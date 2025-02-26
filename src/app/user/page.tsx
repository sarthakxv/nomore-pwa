"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

type StreakDay = {
  date: string
  status: "streak" | "relapse" | "none"
}

export default function UserPage() {
  const [streakDays, setStreakDays] = useState<StreakDay[]>([])
  const [bestStreak, setBestStreak] = useState(0)

  useEffect(() => {
    const startDate = localStorage.getItem("streakStartDate")
    const relapses = JSON.parse(localStorage.getItem("relapses") || "[]")

    if (!startDate) return

    // Calculate streak days and relapses
    // This is a simplified version - you'll want to expand this
    const days: StreakDay[] = []
    const start = new Date(startDate)
    const now = new Date()

    for (let d = start; d <= now; d.setDate(d.getDate() + 1)) {
      const isRelapse = relapses.some((r: string) => new Date(r).toDateString() === d.toDateString())

      days.push({
        date: d.toISOString(),
        status: isRelapse ? "relapse" : "streak",
      })
    }

    setStreakDays(days)
    setBestStreak(calculateBestStreak(days))
  }, [])

  const calculateBestStreak = (days: StreakDay[]) => {
    let currentStreak = 0
    let maxStreak = 0

    days.forEach((day) => {
      if (day.status === "streak") {
        currentStreak++
        maxStreak = Math.max(maxStreak, currentStreak)
      } else {
        currentStreak = 0
      }
    })

    return maxStreak
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-2xl font-bold mb-8">PROFILE</h1>

      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-red-500">YOUR HEAT-MAP</h2>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm">STREAK</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-sm">RELAPSE</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-6">
          {streakDays.map((day, i) => (
            <div
              key={i}
              className={`aspect-square rounded-md ${
                day.status === "streak" ? "bg-green-500" : day.status === "relapse" ? "bg-red-500" : "bg-gray-800"
              }`}
            />
          ))}
        </div>

        <div className="text-green-500 mb-6">
          BEST STREAK --{">"} {bestStreak} DAYS
        </div>

        <Button variant="outline" className="w-full bg-blue-900 hover:bg-blue-800 flex items-center justify-between">
          <span>CHANGE START DATE</span>
          <Calendar className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
