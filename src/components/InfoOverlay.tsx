import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import type { Stats } from '../lib/scene';

interface Props {
  stats: Stats | null;
}

export function InfoOverlay({ stats }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    gsap.fromTo(
      rootRef.current,
      { y: -22, opacity: 0, filter: 'blur(8px)' },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.15,
      }
    );
  }, []);

  const a = stats?.a ?? 0;
  const b = stats?.b ?? 0;
  const c = stats?.c ?? 0;
  const aSq = a * a;
  const bSq = b * b;
  const cSq = c * c;
  const sum = aSq + bSq;
  const checkOk = Math.abs(sum - cSq) < 1e-3;

  return (
    <div ref={rootRef} className="panel panel--left">
      <h1 className="title">
        Теорема
        <br />
        <span className="title__accent">Пифагора</span>
      </h1>

      <div className="formula-stack">
        <div className="formula-card formula-card--main">
          <span className="formula-card__caption">главная формула</span>
          <div className="formula-card__body">
            a²<span className="formula-card__op">+</span>b²
            <span className="formula-card__op">=</span>c²
          </div>
          <div className="formula-card__nums">
            <span>{a.toFixed(3)}²</span>
            <span className="op">+</span>
            <span>{b.toFixed(3)}²</span>
            <span className="op">=</span>
            <span>{c.toFixed(3)}²</span>
          </div>
          <div className="formula-card__check">
            <span>{aSq.toFixed(3)}</span>
            <span className="op">+</span>
            <span>{bSq.toFixed(3)}</span>
            <span className="op">=</span>
            <span className="check__num--accent">{sum.toFixed(3)}</span>
            <span className={checkOk ? 'check__badge check__badge--ok' : 'check__badge'}>
              {checkOk ? '✓' : '≈'}
            </span>
          </div>
        </div>

        <div className="formula-arrow" aria-hidden="true">
          <span className="formula-arrow__line" />
          <span className="formula-arrow__label">отсюда</span>
          <span className="formula-arrow__line" />
        </div>

        <div className="formula-card formula-card--derived">
          <span className="formula-card__caption">следствие</span>
          <div className="formula-card__body">
            c<span className="formula-card__op">=</span>
            <span className="formula-card__root">
              <span className="formula-card__root-bar">
                a²<span className="formula-card__op formula-card__op--inline">+</span>b²
              </span>
            </span>
          </div>
          <div className="formula-card__nums">
            <span>c</span>
            <span className="op">=</span>
            <span className="formula-card__root formula-card__root--small">
              <span className="formula-card__root-bar">
                {aSq.toFixed(3)}
                <span className="op op--inline">+</span>
                {bSq.toFixed(3)}
              </span>
            </span>
            <span className="op">=</span>
            <span className="check__num--accent">{c.toFixed(3)}</span>
          </div>
        </div>
      </div>

      <p className="lede">
        Двигай слайдеры справа — треугольник пересчитывается в реальном времени.
        Двойной клик по числу — впишешь значение руками.
      </p>

      <dl className="stats">
        <div className="stats__row stats__row--a">
          <dt>
            a <span className="stats__sub">(катет)</span>
          </dt>
          <dd>{a.toFixed(3)}</dd>
        </div>
        <div className="stats__row stats__row--b">
          <dt>
            b <span className="stats__sub">(катет)</span>
          </dt>
          <dd>{b.toFixed(3)}</dd>
        </div>
        <div className="stats__row stats__row--c">
          <dt>
            c <span className="stats__sub">(гипотенуза)</span>
          </dt>
          <dd>{c.toFixed(3)}</dd>
        </div>
        <div className="stats__row">
          <dt>углы</dt>
          <dd>
            90° / {(stats?.alphaDeg ?? 0).toFixed(1)}° / {(stats?.betaDeg ?? 0).toFixed(1)}°
          </dd>
        </div>
      </dl>
    </div>
  );
}
