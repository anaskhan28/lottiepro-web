// packages/react/src/index.ts
import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { LottiePlayer, LottieOptions } from '@lottiepro-web/core';

// Define what methods we want to expose to parent components
export interface LottieRef {
  play: () => void;
  pause: () => void;
  stop: () => void;
  setSpeed: (speed: number) => void;
  setDirection: (direction: 1 | -1) => void;
}

interface LottieProps extends LottieOptions {
  src: string | object;
  style?: React.CSSProperties;
  className?: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  onComplete?: () => void;
  onLoopComplete?: () => void;
}

export const LottieComponent = forwardRef<LottieRef, LottieProps>((props, ref) => {
  const { src, style, className, onLoad, onError, onComplete, onLoopComplete, ...options } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<LottiePlayer | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Expose methods to parent through ref
  useImperativeHandle(ref, () => ({
    play: () => playerRef.current?.play(),
    pause: () => playerRef.current?.pause(),
    stop: () => playerRef.current?.stop(),
    setSpeed: (speed: number) => playerRef.current?.setSpeed(speed),
    setDirection: (direction: 1 | -1) => playerRef.current?.setDirection(direction)
  }), []);

  useEffect(() => {
    if (!containerRef.current) return;

    const player = new LottiePlayer(containerRef.current, options);
    playerRef.current = player;

    const loadAnimation = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (typeof src === 'string') {
          await player.loadFromURL(src);
        } else {
          player.load(src);
        }
        onLoad?.();
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Failed to load animation");
        setError(error);
        onError?.(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAnimation();

    return () => {
      player.destroy();
      playerRef.current = null;
    };
  }, [src, options.loop, options.autoplay, options.renderer]);

  return <div ref={containerRef} style={style} className={className} />;
});

// Custom hook to use Lottie controls
export const useLottieControls = () => {
  const ref = useRef<LottieRef>(null);
  return ref;
};