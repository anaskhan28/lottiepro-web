import lottie, { AnimationItem } from 'lottie-web';

export interface LottieOptions {
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  direction?: 1 | -1;
  renderer?: 'svg' | 'canvas' | 'html';
}

export class LottiePlayer {
  private animation: AnimationItem | null = null;
  private container: HTMLElement;
  private options: LottieOptions;

  constructor(container: HTMLElement, options: LottieOptions = {}) {
    this.container = container;
    this.options = {
      loop: true,
      autoplay: true,
      speed: 1,
      direction: 1,
      renderer: 'svg',
      ...options
    };
  }

  async loadFromURL(url: string): Promise<void> {
    try {
      const response = await fetch(url);
      const animationData = await response.json();
      this.load(animationData);
    } catch (error) {
      console.error('Error loading animation:', error);
      throw error;
    }
  }

  load(animationData: any): void {
    // Clean up existing animation first
    if (this.animation) {
      this.destroy();
    }

    // Clear container content
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }

    this.animation = lottie.loadAnimation({
      container: this.container,
      renderer: this.options.renderer,
      loop: this.options.loop,
      autoplay: this.options.autoplay,
      animationData,
    });

    // Set initial speed and direction after animation is loaded
    this.animation.addEventListener('DOMLoaded', () => {
      if (this.animation) {
        this.animation.setSpeed(this.options.speed ?? 1);
        this.animation.setDirection(this.options.direction ?? 1);
      }
    });
  }

  play(): void {
    if (this.animation && !this.animation.isLoaded) {
      this.animation.addEventListener('DOMLoaded', () => {
        this.animation?.play();
      });
    } else {
      this.animation?.play();
    }
  }

  pause(): void {
    if (this.animation?.isLoaded) {
      this.animation.pause();
    }
  }

  stop(): void {
    if (this.animation?.isLoaded) {
      this.animation.stop();
    }
  }

  setSpeed(speed: number): void {
    this.options.speed = speed;
    if (this.animation?.isLoaded) {
      this.animation.setSpeed(speed);
    }
  }

  setDirection(direction: 1 | -1): void {
    this.options.direction = direction;
    if (this.animation?.isLoaded) {
      this.animation.setDirection(direction);
    }
  }

  goToFrame(frame: number): void {
    if (this.animation?.isLoaded) {
      this.animation.goToAndStop(frame, true);
    }
  }

  goToAndPlay(frame: number): void {
    if (this.animation?.isLoaded) {
      this.animation.goToAndPlay(frame, true);
    }
  }

  getDuration(): number {
    return this.animation?.getDuration() || 0;
  }

  getCurrentFrame(): number {
    return this.animation?.currentFrame || 0;
  }

  getTotalFrames(): number {
    return this.animation?.totalFrames || 0;
  }
  isPlaying(): boolean {
    return Boolean(this.animation?.isLoaded && !this.animation?.isPaused);
  }

  destroy(): void {
    if (this.animation) {
      this.animation.destroy();
      this.animation = null;
    }
  }
}