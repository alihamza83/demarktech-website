import { useEffect, useState } from "react";

/**
 * Smooth count-up; cleans up on unmount (works cleanly with StrictMode remounts).
 */
export function useAnimatedCounter(target: number, durationMs: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let rafId = 0;
    let cancelled = false;
    const start = performance.now();

    const tick = (now: number) => {
      if (cancelled) return;
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - (1 - t) ** 2;
      setValue(Math.floor(target * eased));
      if (t < 1) rafId = requestAnimationFrame(tick);
      else setValue(target);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [target, durationMs]);

  return value;
}
