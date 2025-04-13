# LottiePro-Web 🎬

A cross-framework Lottie animation solution for React, Vue, and Next.js projects.

## Features ✨
- **Multi-Framework/library Support**:(React, Next, Vue)
- **Full Control API**: Play/pause/stop, speed control, and direction reversal
- **Flexible Loading**: Load from URL or local JSON data
- **Customizable Rendering**: Choose between SVG, Canvas, or HTML renderers
- **TypeSafe**: Built with TypeScript

## Installation ⚡
```bash
# For React/Next.js
pnpm add @lottiepro-web/core @lottiepro-web/react
# For Vue
pnpm add @lottiepro-web/core @lottiepro-web/vue

import { LottieComponent, useLottieControls } from '@lottiepro-web/react'
```
## Basic Usage 🚀
### React
``` tsx

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

### NextJs
``` tsx
"use client"
import { LottieComponent, useLottieControls } from '@lottiepro-web/react';

function App() {
  const lottieRef = useLottieControls();

return (
 <div>
    <LottieComponent
      ref={lottieRef}
      
      src="https://cdn.lottiepro.com/lotties/1739284236222-4-wedding_invitation.json"
      style={{ width: 400, height: 400, background: 'red' }}
      loop={true}
    />
    </div>
    )}
```

### Vue
``` tsx
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