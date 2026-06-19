import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { EditableNumber } from './EditableNumber';

interface Props {
  a: number;
  b: number;
  c: number;
  onAChange: (v: number) => void;
  onBChange: (v: number) => void;
  onCChange: (v: number) => void;
  onReset: () => void;
}

interface SliderProps {
  letter: 'a' | 'b' | 'c';
  label: string;
  hint?: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
}

function Slider({ letter, label, hint, min, max, step, value, onChange }: SliderProps) {
  return (
    <div className={`control-row control-row--${letter}`}>
      <div className="control-row__head">
        <span className="control-row__label">
          <span className={`control-row__letter control-row__letter--${letter}`}>{letter}</span>
          {label}
        </span>
        <EditableNumber
          className={`control-row__value control-row__value--${letter}`}
          value={value}
          min={min}
          max={max}
          onChange={onChange}
        />
      </div>
      <input
        className="range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={Math.min(max, Math.max(min, value))}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      {hint && <div className="control-row__hint">{hint}</div>}
    </div>
  );
}

export function ControlPanel({
  a,
  b,
  c,
  onAChange,
  onBChange,
  onCChange,
  onReset,
}: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!panelRef.current) return;
    gsap.fromTo(
      panelRef.current,
      { y: 28, opacity: 0, filter: 'blur(8px)' },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.25,
      }
    );
  }, []);

  return (
    <aside ref={panelRef} className="panel panel--right">
      <header className="panel__head">
        <div className="panel__eyebrow">Studio</div>
        <h2 className="panel__title">Стороны треугольника</h2>
        <p className="panel__sub">
          Меняй любую из сторон — остальные пересчитаются так, чтобы&nbsp;
          a² + b² = c² выполнялось точно. Двойной клик по числу — впишешь руками.
        </p>
      </header>

      <div className="panel__body">
        <Slider
          letter="a"
          label="катет"
          hint="Вертикальный катет. При изменении подстраивается гипотенуза c."
          min={0.3}
          max={6}
          step={0.01}
          value={a}
          onChange={onAChange}
        />
        <Slider
          letter="b"
          label="катет"
          hint="Горизонтальный катет. При изменении подстраивается гипотенуза c."
          min={0.3}
          max={6}
          step={0.01}
          value={b}
          onChange={onBChange}
        />
        <Slider
          letter="c"
          label="гипотенуза"
          hint="Меняет c, сохраняя пропорцию катетов: a и b масштабируются вместе."
          min={0.5}
          max={9}
          step={0.01}
          value={c}
          onChange={onCChange}
        />

        <div className="divider" />

        <button className="cta" onClick={onReset} type="button">
          <span className="cta__dot" />
          Сбросить
        </button>
      </div>

      <footer className="panel__foot">
        <span className="panel__foot-key">Подсказка</span>
        <span className="panel__foot-text">
          Левая кнопка мыши — вращение, колесо — зум.
        </span>
      </footer>
    </aside>
  );
}
