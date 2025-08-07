'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  FaPlay,
  FaCheck,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeOff,
} from 'react-icons/fa'

const frequencies = [250, 500, 1000, 2000, 4000, 6000, 8000]
const MIN_VOLUME = -50
const MAX_VOLUME = 80
const VOLUME_STEP = 5

type Ear = 'left' | 'right'

export default function EarcareTest() {
  const [currentEar, setCurrentEar] = useState<Ear>('left')
  const [currentFreqIdx, setCurrentFreqIdx] = useState(0)
  const [volume, setVolume] = useState(-10)
  const [results, setResults] = useState<{ ear: Ear; freq: number; threshold: number }[]>([])
  const router = useRouter()

  const currentFreq = frequencies[currentFreqIdx]

  const playTone = (frequency: number) => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext
    const context = new AudioContext()
    const oscillator = context.createOscillator()
    const gainNode = context.createGain()

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(frequency, context.currentTime)

    const linearGain = Math.pow(10, volume / 20)
    gainNode.gain.setValueAtTime(linearGain, context.currentTime)

    oscillator.connect(gainNode)
    gainNode.connect(context.destination)

    oscillator.start()
    oscillator.stop(context.currentTime + 1)
  }

  const handleResponse = (heard: boolean) => {
    const threshold = heard ? volume : 30
    setResults((prev) => [...prev, { ear: currentEar, freq: currentFreq, threshold }])

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

  const increaseVolume = () => {
    setVolume((v) => Math.min(v + VOLUME_STEP, MAX_VOLUME))
  }

  const decreaseVolume = () => {
    setVolume((v) => Math.max(v - VOLUME_STEP, MIN_VOLUME))
  }

  return (
    <div className="flex items-center justify-center px-6 py-12">
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
          <p className="text-xl text-gray-800 flex items-center justify-center gap-2">
            <FaVolumeUp className="text-indigo-600" />
            <strong>Volume:</strong>{' '}
            <span className="text-indigo-600 font-semibold">{volume} dB HL</span>
          </p>

          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={decreaseVolume}
              className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-lg shadow transition text-gray-700"
              aria-label="Decrease Volume"
            >
              <FaVolumeDown />
            </button>
            <input
              type="range"
              min={MIN_VOLUME}
              max={MAX_VOLUME}
              step={VOLUME_STEP}
              value={volume}
              onChange={(e) => setVolume(parseInt(e.target.value))}
              className="w-64 accent-indigo-600"
            />
            <button
              onClick={increaseVolume}
              className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-lg shadow transition text-gray-700"
              aria-label="Increase Volume"
            >
              <FaVolumeUp />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-5 pt-6">
          <button
            onClick={() => playTone(currentFreq)}
            className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition duration-300 flex items-center gap-2"
            aria-label="Play tone"
          >
            <FaPlay /> Play Tone
          </button>
          <button
            onClick={() => handleResponse(true)}
            className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition duration-300 flex items-center gap-2"
          >
            <FaCheck /> I Heard It
          </button>
          <button
            onClick={() => handleResponse(false)}
            className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition duration-300 flex items-center gap-2"
          >
            <FaTimes /> I Didn't Hear It
          </button>
        </div>

        <div className="flex justify-between pt-8">
          <button
            onClick={handleBack}
            disabled={currentEar === 'left' && currentFreqIdx === 0}
            className="cursor-pointer text-indigo-700 hover:underline font-semibold disabled:opacity-40 disabled:pointer-events-none transition flex items-center gap-1"
          >
            <FaArrowLeft /> Back
          </button>
          <button
            onClick={() => handleResponse(true)}
            className="cursor-pointer text-indigo-700 hover:underline font-semibold transition flex items-center gap-1"
          >
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}
