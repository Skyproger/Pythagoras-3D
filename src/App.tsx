import { useCallback, useMemo, useState } from 'react';
import { SceneCanvas } from './components/SceneCanvas';
import { ControlPanel } from './components/ControlPanel';
import { InfoOverlay } from './components/InfoOverlay';
import type { Stats } from './lib/scene';

const DEFAULT_A = 2.828; // a = b makes c = 4 (45-45-90 to start)
const DEFAULT_B = 2.828;

const A_MIN = 0.3, A_MAX = 6;
const B_MIN = 0.3, B_MAX = 6;
const C_MIN = 0.5, C_MAX = 9;

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

export default function App() {
  const [a, setA] = useState(DEFAULT_A);
  const [b, setB] = useState(DEFAULT_B);
  const [stats, setStats] = useState<Stats | null>(null);

  const c = useMemo(() => Math.sqrt(a * a + b * b), [a, b]);

  const onAChange = useCallback((newA: number) => {
    setA(clamp(newA, A_MIN, A_MAX));
  }, []);

  const onBChange = useCallback((newB: number) => {
    setB(clamp(newB, B_MIN, B_MAX));
  }, []);

  const onCChange = useCallback(
    (newCRaw: number) => {
      const newC = clamp(newCRaw, C_MIN, C_MAX);
      const currentC = Math.sqrt(a * a + b * b);
      if (currentC < 1e-6) return;
      const ratio = newC / currentC;
      setA(clamp(a * ratio, A_MIN, A_MAX));
      setB(clamp(b * ratio, B_MIN, B_MAX));
    },
    [a, b]
  );

  const onReset = useCallback(() => {
    setA(DEFAULT_A);
    setB(DEFAULT_B);
  }, []);

  return (
    <div className="app">
      <div className="app__bg" />
      <div className="app__scene">
        <SceneCanvas params={{ a, b }} onStats={setStats} />
      </div>

      <InfoOverlay stats={stats} />
      <ControlPanel
        a={a}
        b={b}
        c={c}
        onAChange={onAChange}
        onBChange={onBChange}
        onCChange={onCChange}
        onReset={onReset}
      />

    </div>
  );
}
