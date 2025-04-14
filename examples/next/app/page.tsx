'use client'
import Image from "next/image";
import { LottieComponent, useLottieControls } from '@lottiepro-web/react';

export default function Home() {
  const lottieRef = useLottieControls();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-8">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">LottiePro Player</h1>
        
        <div className="flex justify-center mb-8">
          <LottieComponent
            ref={lottieRef}
            src="https://cdn.lottiepro.com/lotties/1739284236222-4-wedding_invitation.json"
            style={{ width: 400, height: 400 }}
            loop={true}
            onLoad={() => console.log('Animation loaded')}
            onError={(error) => console.error('Failed to load animation:', error)}
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <button 
            onClick={() => lottieRef.current?.play()}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200 font-medium"
          >
            Play
          </button>
          <button 
            onClick={() => lottieRef.current?.pause()}
            className="bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition duration-200 font-medium"
          >
            Pause
          </button>
          <button 
            onClick={() => lottieRef.current?.stop()}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200 font-medium"
          >
            Stop
          </button>
          <button 
            onClick={() => lottieRef.current?.setSpeed(0.5)}
            className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition duration-200 font-medium"
          >
            Slow
          </button>
          <button 
            onClick={() => lottieRef.current?.setSpeed(2)}
            className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-200 font-medium"
          >
            Fast
          </button>
          <button 
            onClick={() => lottieRef.current?.setDirection(-1)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 font-medium"
          >
            Reverse
          </button>
        </div>
      </div>
    </div>
  );
}
