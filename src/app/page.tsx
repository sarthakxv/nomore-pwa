"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  const router = useRouter()

  useEffect(() => {
    const hasStreak = localStorage.getItem("streakStartDate")
    if (hasStreak) {
      router.push("/timer")
    }
  }, [router])

  return (
    <div className="min-h-screen flex flex-col p-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <button className="text-black mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full text-black">
        <h1 className="text-4xl font-bold mb-4">Not just a streak counter.</h1>
        <p className="text-gray-600 text-xl mb-4">
          NoMore uses scientifically proven ways to build mental toughness and break habits.
        </p>
        <p className="text-gray-500 text-xl mb-8">It stays with you after that to make you feel...</p>
        <Button
          className="bg-indigo-500 hover:bg-indigo-600 text-white text-xl py-6"
          onClick={() => router.push("/setup")}
        >
          Invincible →
        </Button>
      </div>
    </div>
  )
}
