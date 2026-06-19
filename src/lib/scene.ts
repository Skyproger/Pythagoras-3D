import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  Vector2,
  Vector3,
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  PCFSoftShadowMap,
  ACESFilmicToneMapping,
  Mesh,
  PlaneGeometry,
  ShadowMaterial,
  FogExp2,
  Group,
  CircleGeometry,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  Shape,
  ExtrudeGeometry,
  EdgesGeometry,
  LineSegments,
  LineBasicMaterial,
  BufferGeometry,
  type Object3D,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import gsap from 'gsap';
import { buildTriangle } from './theorem';

export interface TheoremParams {
  /** Vertical leg, length. */
  a: number;
  /** Horizontal leg, length. */
  b: number;
}

export interface Stats {
  a: number;
  b: number;
  c: number;
  alphaDeg: number;
  betaDeg: number;
}

type StatsCb = (s: Stats) => void;

type SideKey = 'a' | 'b' | 'c';

const TRIANGLE_THICKNESS = 0.32;

const SIDE_COLORS: Record<SideKey, string> = {
  a: '#2a55b8',
  b: '#1a6da0',
  c: '#4860c8',
};

export class SceneController {
  private readonly canvas: HTMLCanvasElement;
  private readonly container: HTMLElement;

  private readonly scene = new Scene();
  private readonly camera: PerspectiveCamera;
  private readonly renderer: WebGLRenderer;
  private readonly controls: OrbitControls;
  private readonly composer: EffectComposer;
  private readonly bloomPass: UnrealBloomPass;
  private readonly labelRenderer: CSS2DRenderer;

  private readonly figureRoot: Group;
  private readonly groundGroup: Group;

  // ---- Triangle ----
  private triMesh: Mesh;
  private triEdges: LineSegments;
  private triGeo: ExtrudeGeometry;
  private readonly triMat: MeshPhysicalMaterial;
  private readonly triEdgeMat: LineBasicMaterial;

  // ---- Labels ----
  private readonly sideLabels: Record<SideKey, {
    obj: CSS2DObject;
    name: HTMLElement;
    value: HTMLElement;
  }>;
  private readonly vertexLabels: {
    A: CSS2DObject; elA: HTMLElement;
    B: CSS2DObject; elB: HTMLElement;
    C: CSS2DObject; elC: HTMLElement;
  };

  // ---- Params ----
  private targetParams: TheoremParams = { a: 2.828, b: 2.828 };
  private animatedParams: TheoremParams = { a: 2.828, b: 2.828 };

  private onStats: StatsCb = () => {};

  private readonly handleResize: () => void;
  private readonly resizeObs: ResizeObserver;

  private structureDirty = true;
  private lastStatsEmit = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.container = canvas.parentElement ?? document.body;

    // ---- Renderer ----
    this.renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap;
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.06;

    // ---- Scene ----
    this.scene.background = new Color('#e9f1fb');
    this.scene.fog = new FogExp2(0xe9f1fb, 0.016);

    // ---- Camera ----
    this.camera = new PerspectiveCamera(38, 1, 0.1, 200);
    this.camera.position.set(0, 0, 13);

    // ---- Controls ----
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.07;
    this.controls.target.set(0, 0, 0);
    this.controls.minDistance = 4;
    this.controls.maxDistance = 32;
    this.controls.enablePan = true;
    this.controls.touches = { ONE: 0, TWO: 2 };

    // ---- Lights ----
    this.scene.add(new HemisphereLight(0xddeeff, 0xb9cce6, 0.6));
    this.scene.add(new AmbientLight(0xffffff, 0.18));

    const key = new DirectionalLight(0xffffff, 1.5);
    key.position.set(7, 14, 9);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -10;
    key.shadow.camera.right = 10;
    key.shadow.camera.top = 10;
    key.shadow.camera.bottom = -10;
    key.shadow.camera.near = 0.1;
    key.shadow.camera.far = 40;
    key.shadow.bias = -0.0002;
    key.shadow.radius = 6;
    this.scene.add(key);

    const fill = new DirectionalLight(0xa9c6ff, 0.5);
    fill.position.set(-8, 6, 4);
    this.scene.add(fill);

    const rim = new DirectionalLight(0xffffff, 0.35);
    rim.position.set(0, 4, -10);
    this.scene.add(rim);

    // ---- Ground ----
    this.groundGroup = new Group();
    this.groundGroup.position.y = -3.4;
    this.scene.add(this.groundGroup);

    const shadow = new Mesh(
      new PlaneGeometry(40, 40),
      new ShadowMaterial({ opacity: 0.18, transparent: true })
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.receiveShadow = true;
    this.groundGroup.add(shadow);

    const disc = new Mesh(
      new CircleGeometry(11, 64),
      new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 })
    );
    disc.rotation.x = -Math.PI / 2;
    disc.position.y = 0.001;
    this.groundGroup.add(disc);

    // ---- Figure ----
    this.figureRoot = new Group();
    this.scene.add(this.figureRoot);

    this.triMat = new MeshPhysicalMaterial({
      color: new Color('#f9fbff'),
      metalness: 0.08,
      roughness: 0.35,
      clearcoat: 0.6,
      clearcoatRoughness: 0.22,
      sheen: 0.5,
      sheenColor: new Color(0xdde9ff),
      sheenRoughness: 0.6,
    });
    this.triEdgeMat = new LineBasicMaterial({
      color: new Color('#5b8def'),
      transparent: true,
      opacity: 0.85,
    });
    this.triGeo = new ExtrudeGeometry(new Shape(), { depth: TRIANGLE_THICKNESS, bevelEnabled: false });
    this.triMesh = new Mesh(this.triGeo, this.triMat);
    this.triMesh.castShadow = true;
    this.triMesh.receiveShadow = true;
    this.figureRoot.add(this.triMesh);
    this.triEdges = new LineSegments(new BufferGeometry(), this.triEdgeMat);
    this.figureRoot.add(this.triEdges);

    // ---- Composer ----
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloomPass = new UnrealBloomPass(new Vector2(1, 1), 0.18, 0.85, 0.88);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(new OutputPass());

    // ---- Labels ----
    this.labelRenderer = new CSS2DRenderer();
    this.labelRenderer.domElement.style.position = 'absolute';
    this.labelRenderer.domElement.style.top = '0';
    this.labelRenderer.domElement.style.left = '0';
    this.labelRenderer.domElement.style.pointerEvents = 'none';
    this.labelRenderer.domElement.style.zIndex = '2';
    this.container.appendChild(this.labelRenderer.domElement);

    const mkSideLabel = (k: SideKey) => {
      const el = document.createElement('div');
      el.className = `label-side label-side--${k}`;
      const name = document.createElement('span');
      name.className = 'label-side__name';
      name.textContent = k;
      const value = document.createElement('em');
      value.className = 'label-side__value';
      value.textContent = '0.000';
      el.appendChild(name);
      el.appendChild(value);
      const obj = new CSS2DObject(el);
      this.figureRoot.add(obj);
      return { obj, name, value };
    };
    this.sideLabels = {
      a: mkSideLabel('a'),
      b: mkSideLabel('b'),
      c: mkSideLabel('c'),
    };

    const mkVertex = (letter: 'A' | 'B' | 'C') => {
      const el = document.createElement('div');
      el.className = 'label-vertex';
      el.textContent = letter;
      const obj = new CSS2DObject(el);
      this.figureRoot.add(obj);
      return { obj, el };
    };
    const vA = mkVertex('A');
    const vB = mkVertex('B');
    const vC = mkVertex('C');
    this.vertexLabels = {
      A: vA.obj, elA: vA.el,
      B: vB.obj, elB: vB.el,
      C: vC.obj, elC: vC.el,
    };

    // ---- Listeners ----
    this.handleResize = () => this.onResize();
    window.addEventListener('resize', this.handleResize);
    this.resizeObs = new ResizeObserver(this.handleResize);
    this.resizeObs.observe(this.container);

    this.onResize();
    this.rebuildFigure();
    this.renderer.setAnimationLoop(this.tick);
  }

  // ---------------- Public API ----------------

  setParams(p: Partial<TheoremParams>): void {
    const prev = { ...this.targetParams };
    this.targetParams = { ...this.targetParams, ...p };

    if (p.a !== undefined && p.a !== prev.a) {
      gsap.to(this.animatedParams, {
        a: p.a,
        duration: 0.45,
        ease: 'power3.out',
        overwrite: 'auto',
        onUpdate: () => { this.structureDirty = true; },
      });
    }
    if (p.b !== undefined && p.b !== prev.b) {
      gsap.to(this.animatedParams, {
        b: p.b,
        duration: 0.45,
        ease: 'power3.out',
        overwrite: 'auto',
        onUpdate: () => { this.structureDirty = true; },
      });
    }
  }

  setStatsCallback(cb: StatsCb): void {
    this.onStats = cb;
  }

  dispose(): void {
    this.renderer.setAnimationLoop(null);
    window.removeEventListener('resize', this.handleResize);
    this.resizeObs.disconnect();

    gsap.killTweensOf(this.animatedParams);

    this.triGeo.dispose();
    this.triMat.dispose();
    this.triEdgeMat.dispose();
    this.triEdges.geometry.dispose();

    (Object.keys(this.sideLabels) as SideKey[]).forEach((k) => {
      this.figureRoot.remove(this.sideLabels[k].obj);
    });
    this.figureRoot.remove(this.vertexLabels.A);
    this.figureRoot.remove(this.vertexLabels.B);
    this.figureRoot.remove(this.vertexLabels.C);
    this.labelRenderer.domElement.remove();

    this.groundGroup.traverse((o: Object3D) => {
      const m = o as Mesh;
      if (m.isMesh) {
        m.geometry.dispose();
        const mat = m.material;
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
        else mat.dispose();
      }
    });

    this.composer.dispose();
    this.renderer.dispose();
  }

  // ---------------- Internals ----------------

  private rebuildFigure(): void {
    const { a, b } = this.animatedParams;
    const t = buildTriangle(a, b);

    // Triangle prism
    this.triGeo.dispose();
    const shape = new Shape();
    shape.moveTo(t.vA.x, t.vA.y);
    shape.lineTo(t.vB.x, t.vB.y);
    shape.lineTo(t.vC.x, t.vC.y);
    shape.closePath();
    this.triGeo = new ExtrudeGeometry(shape, { depth: TRIANGLE_THICKNESS, bevelEnabled: false });
    this.triGeo.translate(0, 0, -TRIANGLE_THICKNESS / 2);
    this.triMesh.geometry = this.triGeo;

    const oldEdges = this.triEdges.geometry;
    this.triEdges.geometry = new EdgesGeometry(this.triGeo);
    oldEdges.dispose();

    // Labels — side names + lengths
    const placeSide = (k: SideKey, mid: Vector3, out: Vector3, value: number) => {
      const li = this.sideLabels[k];
      // Push outward away from the figure for legibility. Bias by half-thickness in Z too.
      const offset = 0.22 + 0.04 * value; // grows slightly with side length
      li.obj.position.copy(mid).addScaledVector(out, offset);
      li.obj.position.z = 0;
      li.value.textContent = value.toFixed(3);
    };
    placeSide('a', t.midA, t.outA, t.a);
    placeSide('b', t.midB, t.outB, t.b);
    placeSide('c', t.midC, t.outC, t.c);

    // Vertex letters — sit just outside each vertex (along the average of its two adjacent sides' outward normals)
    const placeVertex = (obj: CSS2DObject, v: Vector3, out: Vector3) => {
      obj.position.copy(v).addScaledVector(out, 0.5);
      obj.position.z = 0;
    };
    // A is between sides b and c → average their outward normals
    const outAvgA = new Vector3().addVectors(t.outB, t.outC).normalize();
    const outAvgB = new Vector3().addVectors(t.outA, t.outC).normalize();
    const outAvgC = new Vector3().addVectors(t.outA, t.outB).normalize();
    placeVertex(this.vertexLabels.A, t.vA, outAvgA);
    placeVertex(this.vertexLabels.B, t.vB, outAvgB);
    placeVertex(this.vertexLabels.C, t.vC, outAvgC);

    this.emitStatsNow(t.a, t.b, t.c, t.alphaDeg, t.betaDeg);
  }

  private emitStatsNow(a: number, b: number, c: number, alphaDeg: number, betaDeg: number): void {
    this.onStats({ a, b, c, alphaDeg, betaDeg });
  }

  private tick = (now: number): void => {
    this.controls.update();

    if (this.structureDirty) {
      this.rebuildFigure();
      this.structureDirty = false;
    }

    if (now - this.lastStatsEmit > 90) {
      this.lastStatsEmit = now;
      const { a, b } = this.animatedParams;
      const c = Math.sqrt(a * a + b * b);
      const alphaDeg = (Math.atan2(a, b) * 180) / Math.PI;
      this.emitStatsNow(a, b, c, alphaDeg, 90 - alphaDeg);
    }

    this.composer.render();
    this.labelRenderer.render(this.scene, this.camera);
  };

  private onResize(): void {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    if (w === 0 || h === 0) return;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
    this.composer.setSize(w, h);
    this.bloomPass.resolution.set(w, h);
    this.labelRenderer.setSize(w, h);
  }
}

// re-export for App typing
export const SIDE_COLOR_MAP = SIDE_COLORS;
