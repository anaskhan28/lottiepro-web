<p align="center">
  <img src="https://res.cloudinary.com/anaskhan/image/upload/v1744609327/lottiepro/LottiePro_white_h5djkc.png" alt="LottiePro Logo" width="200"/>
  </p>

  # LottiePro Engine

  A high-performance, cross-framework Lottie animation solution for React, Vue, and Next.js projects.

  ## Demo
  <p align="center">
    <video width="500" autoplay muted loop>
      <source src="https://res.cloudinary.com/anaskhan/video/upload/v1744609059/lottiepro/LottiePro_Player_fpxjl0.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </p>

  ## Features ✨

  - **Multi-Framework Support**: Seamless integration with React, Next.js, and Vue
  - **Performance-Optimized**: Faster rendering and minimal runtime overhead
  - **Complete Control API**: Play/pause/stop, speed control, and direction reversal
  - **Flexible Loading**: Stream animations from URL or use local JSON data
  - **Rendering Options**: Choose between SVG, Canvas, or HTML renderers
  - **TypeScript-Powered**: Full type safety and autocompletion
  - **Lightweight**: Minimal bundle size impact
  - **Event System**: Rich callbacks for animation lifecycle events

  ## Installation ⚡

  ```bash
  # For React/Next.js
  pnpm add @lottiepro-web/core @lottiepro-web/react

  # For Vue
  pnpm add @lottiepro-web/core @lottiepro-web/vue
  ```

  ## Quick Start 🚀
  ### React
  ```tsx
  import { LottieComponent, useLottieControls } from '@lottiepro-web/react'

  function App() {
    const lottieRef = useLottieControls();

    return (
      <>
        <LottieComponent
          ref={lottieRef}
          src="https://cdn.lottiepro.com/animation.json"
          style={{ width: 400, height: 400 }}
          loop={true}
          onLoad={() => console.log('Loaded!')}
        />
        <button onClick={() => lottieRef.current?.play()}>Play</button>
      </>
    );
  }
  ```

  ### Next.js
  ```tsx
  "use client"
  import { LottieComponent, useLottieControls } from '@lottiepro-web/react';

  function App() {
    const lottieRef = useLottieControls();

    return (
      <div>
        <LottieComponent
          ref={lottieRef}
          src="https://cdn.lottiepro.com/animation.json"
          style={{ width: 400, height: 400 }}
          loop={true}
        />
      </div>
    );
  }
  ```
  ### Vue
  ```tsx
  <script setup>
  import { LottieComponent, useLottieControls } from '@lottiepro-web/vue'

  const lottieRef = useLottieControls()
  </script>

  <template>
    <LottieComponent
      ref="lottieRef"
      src="/animation.json"
      :loop="true"
      style="width: 400px; height: 400px"
      @load="() => console.log('Loaded!')"
    />
    <button @click="lottieRef?.play()">Play</button>
  </template>
  ```

  ## API Reference

  ### Properties

  | Property   | Type                     | Default   | Description                                |
  |------------|--------------------------|-----------|--------------------------------------------|
  | `src`      | `string | object`        | required  | Animation source URL or data object       |
  | `loop`     | `boolean`                | `false`   | Whether to loop the animation             |
  | `autoplay` | `boolean`                | `true`    | Start animation immediately when loaded   |
  | `renderer` | `'svg' | 'canvas' | 'html'` | `'svg'`   | Rendering method                          |
  | `speed`    | `number`                 | `1`       | Animation playback speed                  |

  ### Events

  | Event       | Description                                |
  |-------------|--------------------------------------------|
  | `onLoad`    | Fires when animation is loaded and ready   |
  | `onError`   | Fires when an error occurs loading the animation |
  | `onComplete`| Fires when animation completes playing     |
  | `onFrame`   | Fires on each frame update                 |


## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS/Android)

## License
### MIT