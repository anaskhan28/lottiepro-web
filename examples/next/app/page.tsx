'use client'
import Image from "next/image";
import {LottieComponent, useLottieControls} from '@lottiepro-web/react';

export default function Home() {
  const lottieRef = useLottieControls();

  return (
    <div>
    <LottieComponent
      ref={lottieRef}
      
      src="https://cdn.lottiepro.com/lotties/1739284236222-4-wedding_invitation.json"
      style={{ width: 400, height: 400, background: 'red' }}
      loop={true}
      onLoad={() => console.log('Animation loaded')}
      onError={(error) => console.error('Failed to load animation:', error)}
    />

    {/* Control buttons */}
    <div>
      <button onClick={() => lottieRef.current?.play()}>Play</button>
      <button onClick={() => lottieRef.current?.pause()}>Pause</button>
      <button onClick={() => lottieRef.current?.stop()}>Stop</button>
      <button onClick={() => lottieRef.current?.setSpeed(0.5)}>Slow Motion</button>
      <button onClick={() => lottieRef.current?.setSpeed(2)}>Fast Forward</button>
      <button onClick={() => lottieRef.current?.setDirection(-1)}>Reverse</button>
    </div>
  </div>
  );
}
