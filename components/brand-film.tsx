'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Autoplaying, muted, looping brand film.
 * Browsers only permit autoplay when muted — if a policy still blocks it,
 * we fall back to the poster and swap the status label honestly.
 */
export function BrandFilm({ poster, src, label }: { poster: string; src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<'idle' | 'playing' | 'blocked'>('idle');

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // Respect reduced-motion: don't autoplay, leave it paused on the poster.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setState('blocked');
      return;
    }

    const attempt = v.play();
    if (attempt && typeof attempt.then === 'function') {
      attempt.then(() => setState('playing')).catch(() => setState('blocked'));
    }

    const onPlay = () => setState('playing');
    const onPause = () => setState((s) => (s === 'playing' ? 'blocked' : s));
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, []);

  return (
    <figure className="border-2 border-ink bg-surface">
      <video
        ref={ref}
        className="h-full w-full grayscale"
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label="Blaze brand film: a model in a black Blaze tee in a red kitchen, with the Blaze Established 24 mark"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video element.
      </video>
      <figcaption className="flex items-center justify-between gap-3 border-t-2 border-ink px-3 py-2">
        <span className="label text-[#6b6b6b]">{label}</span>
        <span className="label text-[#6b6b6b]">
          {state === 'playing' ? (
            <span className="bg-accent px-1.5 py-0.5 text-ground">Playing</span>
          ) : state === 'blocked' ? (
            <span className="border-2 border-ink px-1.5 py-0.5">Press play</span>
          ) : (
            <span aria-hidden="true">—</span>
          )}
        </span>
      </figcaption>
    </figure>
  );
}
