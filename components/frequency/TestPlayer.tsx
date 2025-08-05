import { useState } from 'react';

export default function TestPlayer() {
  const [customFrequency, setCustomFrequency] = useState(1000);

  const playTone = (freq: number) => {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 1); // Play for 1 second
  };

  const frequencies = [250, 500, 1000, 2000, 4000, 8000];

  return (
    <main className="flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl text-center space-y-6">
        <div className="bg-green-400 text-white font-semibold py-3 rounded-md text-xl">
          Frequency test Player
        </div>

        <div className="space-y-2">
          <p className="text-lg font-medium">Select a Frequency test</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {frequencies.map((freq) => (
              <button
                key={freq}
                onClick={() => playTone(freq)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-lg transition"
              >
                {freq}HZ
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-lg font-medium">Or choose a custom frequency:</p>
          <div className="flex items-center justify-center gap-3">
            <input
              type="number"
              value={customFrequency}
              onChange={(e) => setCustomFrequency(parseInt(e.target.value))}
              className="border px-3 py-2 rounded-md w-24 text-center"
              min={20}
              max={20000}
            />
            <button
              onClick={() => playTone(customFrequency)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
            >
              Play Custom Frequency
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
