import { useEffect, useRef } from 'react';
import { SceneController, type TheoremParams, type Stats } from '../lib/scene';

interface Props {
  params: TheoremParams;
  onStats: (s: Stats) => void;
}

export function SceneCanvas({ params, onStats }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const controllerRef = useRef<SceneController | null>(null);
  const onStatsRef = useRef(onStats);

  onStatsRef.current = onStats;

  useEffect(() => {
    if (!canvasRef.current) return;
    const c = new SceneController(canvasRef.current);
    controllerRef.current = c;
    c.setStatsCallback((s) => onStatsRef.current(s));
    return () => {
      c.dispose();
      controllerRef.current = null;
    };
  }, []);

  useEffect(() => {
    controllerRef.current?.setParams(params);
  }, [params]);

  return <canvas ref={canvasRef} className="scene-canvas" />;
}
