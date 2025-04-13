<script setup lang="ts">
import { LottieComponent, useLottieControls } from '@lottiepro-web/vue';
import { onMounted } from 'vue';

const lottieRef = useLottieControls();

const handleLoad = () => {
  console.log('Animation loaded!');
};

const handleError = (error: Error) => {
  console.error('Failed to load animation:', error);
};
</script>

<template>
  <div class="container">
    <LottieComponent
      ref="lottieRef"
      src="https://cdn.lottiepro.com/lotties/1739284236222-4-wedding_invitation.json"
      :style="{ width: '400px', height: '400px' }"
      :loop="true"
      :autoplay="true"
      @load="handleLoad"
      @error="handleError"
    />

    <div class="controls">
      <button @click="lottieRef?.play()">Play</button>
      <button @click="lottieRef?.pause()">Pause</button>
      <button @click="lottieRef?.stop()">Stop</button>
      <button @click="lottieRef?.setSpeed(0.5)">Slow Motion</button>
      <button @click="lottieRef?.setSpeed(2)">Fast Forward</button>
      <button @click="lottieRef?.setDirection(-1)">Reverse</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
}

.controls {
  display: flex;
  gap: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #646cff;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #535bf2;
}
</style> 