'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Results() {
  const [results, setResults] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    const storedResults = localStorage.getItem('hearingResults')
    if (storedResults) {
      setResults(JSON.parse(storedResults))
    }
  }, [])

  const getEarResults = (ear: string) =>
    results.filter((r) => r.ear === ear)

  const passed = results.every((r) => r.threshold <= 20)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-8 flex items-center justify-center mt-20">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8 space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Your Hearing Test Results</h1>
          <p className="text-gray-600 mt-2">Overview of your hearing sensitivity by frequency</p>
        </div>

        <div className={`rounded-md p-6 text-white shadow ${passed ? 'bg-green-500' : 'bg-red-500'}`}>
          <h2 className="text-2xl font-semibold">
            {passed ? '✅ Test Passed' : '❌ Test Failed'}
          </h2>
          <p className="mt-2 text-base">
            {passed
              ? 'Your hearing is within normal range across all tested frequencies.'
              : 'Some thresholds are outside the normal hearing range. Please consult an audiologist.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {['left', 'right'].map((ear) => (
            <div key={ear} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4 capitalize">
                {ear} Ear
              </h3>
              <table className="w-full text-sm text-left border border-gray-200 rounded-md overflow-hidden">
                <thead className="bg-gray-200 text-gray-700">
                  <tr>
                    <th className="px-4 py-2">Frequency (Hz)</th>
                    <th className="px-4 py-2">Threshold (dB HL)</th>
                    <th className="px-4 py-2">Range</th>
                    <th className="px-4 py-2">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {getEarResults(ear).map((r) => {
                    const isNormal = r.threshold <= 20
                    return (
                      <tr key={r.freq} className="border-t border-gray-200">
                        <td className="px-4 py-2 text-center">{r.freq}</td>
                        <td className="px-4 py-2 text-center">{r.threshold}</td>
                        <td className="px-4 py-2 text-center">≤ 20</td>
                        <td
                          className={`px-4 py-2 text-center font-semibold ${
                            isNormal ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {isNormal ? 'Normal' : 'Abnormal'}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md text-yellow-800">
          <p className="font-medium">Reminder:</p>
          <p>
            This test is for screening purposes only. For medical evaluation,
            please consult a licensed audiologist.
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={() => router.push('/hearingtest')}
            className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-lg shadow cursor-pointer"
          >
            🔁 Start New Test
          </button>
        </div>
      </div>
    </div>
  )
}
