'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const frequencies = [125, 250, 500, 1000, 2000, 4000, 8000]
type Ear = 'left' | 'right'

export default function EarcareTest() {
  const [currentEar, setCurrentEar] = useState<Ear>('left')
  const [currentFreqIdx, setCurrentFreqIdx] = useState(0)
  const [results, setResults] = useState<{ ear: Ear, freq: number, threshold: number }[]>([])
  const router = useRouter()

  const currentFreq = frequencies[currentFreqIdx]

  const playTone = (frequency: number) => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext
    const context = new AudioContext()
    const oscillator = context.createOscillator()
    const gainNode = context.createGain()

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(frequency, context.currentTime)

    const dB = -10
    const linearGain = Math.pow(10, dB / 20)
    gainNode.gain.setValueAtTime(linearGain, context.currentTime)

    oscillator.connect(gainNode)
    gainNode.connect(context.destination)

    oscillator.start()
    oscillator.stop(context.currentTime + 1)
  }

  const handleResponse = (heard: boolean) => {
    const threshold = heard ? -10 : 30
    setResults(prev => [...prev, { ear: currentEar, freq: currentFreq, threshold }])

    if (currentFreqIdx < frequencies.length - 1) {
      setCurrentFreqIdx(currentFreqIdx + 1)
    } else if (currentEar === 'left') {
      setCurrentEar('right')
      setCurrentFreqIdx(0)
    } else {
      localStorage.setItem(
        'hearingResults',
        JSON.stringify([...results, { ear: currentEar, freq: currentFreq, threshold }])
      )
      router.push('/hearingtest/results')
    }
  }

  const handleBack = () => {
    if (results.length === 0) return
    const updatedResults = [...results]
    updatedResults.pop()

    if (currentFreqIdx > 0) {
      setCurrentFreqIdx(currentFreqIdx - 1)
    } else if (currentEar === 'right') {
      setCurrentEar('left')
      setCurrentFreqIdx(frequencies.length - 1)
    }

    setResults(updatedResults)
  }

  return (
    <div className=" flex items-center justify-center px-6 py-12 mt-20">
      <div className="w-full max-w-4xl bg-white border border-gray-300 rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-indigo-700">Hearing Test</h1>
          <p className="text-gray-600 mt-2 text-lg">
            You're testing your{' '}
            <span className="capitalize font-semibold text-indigo-600">{currentEar}</span> ear
          </p>
        </div>

        <div className="text-center space-y-3">
          <p className="text-xl text-gray-800">
            <strong>Frequency:</strong>{' '}
            <span className="text-indigo-600 font-semibold">{currentFreq} Hz</span>
          </p>
          <p className="text-xl text-gray-800">
            <strong>Volume:</strong>{' '}
            <span className="text-indigo-600 font-semibold">-10 dB HL</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-5 pt-6">
          <button
            onClick={() => playTone(currentFreq)}
            className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
            aria-label="Play tone"
          >
            ▶️ Play Tone
          </button>
          <button
            onClick={() => handleResponse(true)}
            className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
          >
            ✅ I Heard It
          </button>
          <button
            onClick={() => handleResponse(false)}
            className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
          >
            ❌ I Didn't Hear It
          </button>
        </div>

        <div className="flex justify-between pt-8">
          <button
            onClick={handleBack}
            disabled={currentEar === 'left' && currentFreqIdx === 0}
            className="cursor-pointer text-indigo-700 hover:underline font-semibold disabled:opacity-40 disabled:pointer-events-none transition"
          >
            ⬅ Back
          </button>
          <button
            onClick={() => handleResponse(true)}
            className="cursor-pointer text-indigo-700 hover:underline font-semibold transition"
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  )
}
