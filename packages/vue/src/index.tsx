// packages/vue/src/index.ts
import { defineComponent, ref, onMounted, onBeforeUnmount, watch, PropType, h } from 'vue';
import { LottiePlayer, LottieOptions } from '@lottiepro-web/core';

// Define props interface extending LottieOptions
interface LottieProps extends LottieOptions {
  src: string | object;
  style?: object;
  class?: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  onComplete?: () => void;
  onLoopComplete?: () => void;
}

// Create Vue component
export const LottieComponent = defineComponent({
  name: 'LottieComponent',
  
  props: {
    src: {
      type: [String, Object] as PropType<string | object>,
      required: true
    },
    style: {
      type: Object as PropType<object>,
      default: () => ({})
    },
    class: {
      type: String,
      default: ''
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 1
    },
    direction: {
      type: Number as PropType<1 | -1>,
      default: 1,
      validator: (value: number) => value === 1 || value === -1
    },
    renderer: {
      type: String as PropType<'svg' | 'canvas' | 'html'>,
      default: 'svg'
    }
  },

  emits: ['load', 'error', 'complete', 'loopComplete'],

  setup(props, { emit, expose }) {
    const containerRef = ref<HTMLElement | null>(null);
    const playerRef = ref<LottiePlayer | null>(null);
    const isLoading = ref(false);
    const error = ref<Error | null>(null);

    // Create and configure player
    const createPlayer = () => {
      if (!containerRef.value) return;

      const options: LottieOptions = {
        loop: props.loop,
        autoplay: props.autoplay,
        speed: props.speed,
        direction: props.direction,
        renderer: props.renderer
      };

      playerRef.value = new LottiePlayer(containerRef.value, options);
    };

    // Load animation
    const loadAnimation = async () => {
      if (!playerRef.value) return;

      try {
        isLoading.value = true;
        error.value = null;

        if (typeof props.src === 'string') {
          await playerRef.value.loadFromURL(props.src);
        } else {
          playerRef.value.load(props.src);
        }
        emit('load');
      } catch (err) {
        const loadError = err instanceof Error ? err : new Error("Failed to load animation");
        error.value = loadError;
        emit('error', loadError);
      } finally {
        isLoading.value = false;
      }
    };

    // Lifecycle hooks
    onMounted(() => {
      createPlayer();
      loadAnimation();
    });

    onBeforeUnmount(() => {
      playerRef.value?.destroy();
      playerRef.value = null;
    });

    // Watch for prop changes
    watch(() => props.src, () => {
      loadAnimation();
    });

    watch(() => props.loop, (newValue) => {
      // Reload animation to apply new loop setting
      if (playerRef.value) {
        loadAnimation();
      }
    });

    watch(() => props.speed, (newValue) => {
      playerRef.value?.setSpeed(newValue);
    });

    watch(() => props.direction, (newValue) => {
      playerRef.value?.setDirection(newValue);
    });

    // Expose methods to parent component
    expose({
      play: () => playerRef.value?.play(),
      pause: () => playerRef.value?.pause(),
      stop: () => playerRef.value?.stop(),
      setSpeed: (speed: number) => playerRef.value?.setSpeed(speed),
      setDirection: (direction: 1 | -1) => playerRef.value?.setDirection(direction)
    });

    // Template
    return () => h('div', {
      ref: containerRef,
      style: props.style,
      class: props.class
    });
  }
});

// Create composable for controls
export function useLottieControls() {
  const lottieRef = ref<{
    play: () => void;
    pause: () => void;
    stop: () => void;
    setSpeed: (speed: number) => void;
    setDirection: (direction: 1 | -1) => void;
  } | null>(null);

  return lottieRef;
}