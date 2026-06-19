import { useEffect, useRef, useState } from 'react';

interface Props {
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  /** Decimals to show in display mode (default: 3). */
  decimals?: number;
  className?: string;
  /** Optional title attribute override. */
  title?: string;
}

/**
 * Displays a number that looks like plain text. Double-click to edit.
 * On Enter / blur — commits; on Escape — discards.
 */
export function EditableNumber({
  value,
  min,
  max,
  onChange,
  decimals = 3,
  className,
  title = 'Двойной клик — впиши значение',
}: Props) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (editing) {
      setDraft(value.toFixed(decimals));
      // focus + select after mount
      requestAnimationFrame(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      });
    }
  }, [editing, value, decimals]);

  const commit = () => {
    const parsed = parseFloat(draft.replace(',', '.'));
    if (!Number.isNaN(parsed) && Number.isFinite(parsed)) {
      const clamped = Math.max(min, Math.min(max, parsed));
      onChange(clamped);
    }
    setEditing(false);
  };

  if (editing) {
    return (
      <input
        ref={inputRef}
        className={`editable-number editable-number--editing ${className ?? ''}`}
        type="text"
        inputMode="decimal"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            commit();
          } else if (e.key === 'Escape') {
            e.preventDefault();
            setEditing(false);
          }
        }}
      />
    );
  }

  return (
    <span
      className={`editable-number ${className ?? ''}`}
      title={title}
      onDoubleClick={() => setEditing(true)}
    >
      {value.toFixed(decimals)}
    </span>
  );
}
