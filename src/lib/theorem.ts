import { Vector3 } from 'three';

/**
 * Right triangle, fully determined by two legs (a, b).
 * c is the hypotenuse, derived: c² = a² + b².
 *
 * Layout (figure coordinates, before centering):
 *   vC = (0, 0)          — right angle vertex
 *   vA = (b, 0)          — vertex with angle α
 *   vB = (0, a)          — vertex with angle (90° − α)
 *
 * Sides:
 *   side a (opposite vA) connects vC → vB    (vertical leg, length a)
 *   side b (opposite vB) connects vC → vA    (horizontal leg, length b)
 *   side c (opposite vC) connects vA → vB    (hypotenuse, length c)
 */

export interface RightTriangleGeometry {
  a: number;
  b: number;
  c: number;
  alphaDeg: number;          // angle at vA, in degrees
  betaDeg: number;           // angle at vB = 90° − α

  // Vertices, centered around the centroid (so the figure stays balanced in view).
  vA: Vector3;
  vB: Vector3;
  vC: Vector3;

  // Midpoints of each side (for floating labels).
  midA: Vector3;
  midB: Vector3;
  midC: Vector3;

  // Outward normals at side midpoints (used to push labels away from the figure).
  outA: Vector3;
  outB: Vector3;
  outC: Vector3;
}

export function buildTriangle(a: number, b: number): RightTriangleGeometry {
  const c = Math.sqrt(a * a + b * b);
  const alphaRad = Math.atan2(a, b);
  const alphaDeg = (alphaRad * 180) / Math.PI;
  const betaDeg = 90 - alphaDeg;

  // Centroid in raw coords:
  const cx = b / 3;
  const cy = a / 3;

  const vC = new Vector3(-cx, -cy, 0);
  const vA = new Vector3(b - cx, -cy, 0);
  const vB = new Vector3(-cx, a - cy, 0);

  const midA = vC.clone().lerp(vB, 0.5);
  const midB = vC.clone().lerp(vA, 0.5);
  const midC = vA.clone().lerp(vB, 0.5);

  // Outward = perpendicular to side, pointing away from the triangle interior.
  // Triangle interior is in +X +Y quadrant relative to vC, so:
  //   side a (vC→vB, vertical):  outward = (−1, 0, 0)
  //   side b (vC→vA, horizontal): outward = (0, −1, 0)
  //   side c (vA→vB):             outward = (a, b, 0) / c
  return {
    a,
    b,
    c,
    alphaDeg,
    betaDeg,
    vA,
    vB,
    vC,
    midA,
    midB,
    midC,
    outA: new Vector3(-1, 0, 0),
    outB: new Vector3(0, -1, 0),
    outC: new Vector3(a / c, b / c, 0),
  };
}
