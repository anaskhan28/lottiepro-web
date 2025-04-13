
export interface LottieOptions {
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  direction?: 1 | -1;
  renderer?: 'svg' | 'canvas' | 'html';
}

export interface LottiePlayerInterface {
  loadFromURL(url: string): Promise<void>;
  load(animationData: any): void;
  play(): void;
  pause(): void;
  stop(): void;
  setSpeed(speed: number): void;
  setDirection(direction: 1 | -1): void;
  goToFrame(frame: number): void;
  goToAndPlay(frame: number): void;
  getDuration(): number;
  getCurrentFrame(): number;
  getTotalFrames(): number;
  isPlaying(): boolean;
  
}