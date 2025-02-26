"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RotateCcw } from "lucide-react"

export default function TimerPage() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const startDate = localStorage.getItem("streakStartDate")
    if (!startDate) return

    const timer = setInterval(() => {
      const start = new Date(startDate).getTime()
      const now = new Date().getTime()
      const diff = now - start

      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((diff % (1000 * 60)) / 1000))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleReset = () => {
    if (confirm("Are you sure you want to reset your streak?")) {
      localStorage.setItem("streakStartDate", new Date().toISOString())
      localStorage.setItem(
        "relapses",
        JSON.stringify([...JSON.parse(localStorage.getItem("relapses") || "[]"), new Date().toISOString()]),
      )
    }
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-center text-3xl font-bold mb-12">NOMORE</h1>

      <div className="flex flex-col items-center gap-8">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold">{days}</div>
              <div className="text-red-500">DAYS</div>
            </div>
          </div>
          {/* Add circular progress indicator here */}
        </div>

        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl">{hours.toString().padStart(2, "0")}</div>
            <div className="text-gray-400">HOURS</div>
          </div>
          <div>
            <div className="text-4xl">{minutes.toString().padStart(2, "0")}</div>
            <div className="text-gray-400">MINUTES</div>
          </div>
          <div>
            <div className="text-4xl">{seconds.toString().padStart(2, "0")}</div>
            <div className="text-gray-400">SECONDS</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-8">
          <Button variant="outline" className="bg-indigo-500 hover:bg-indigo-600 h-16" onClick={handleReset}>
            <RotateCcw className="mr-2" />
            Reset Streak
          </Button>
          <Button variant="outline" className="bg-red-500 hover:bg-red-600 h-16">
            <AlertTriangle className="mr-2" />
            Panic Button
          </Button>
        </div>
      </div>
    </div>
  )
}
