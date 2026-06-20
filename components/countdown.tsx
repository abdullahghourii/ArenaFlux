"use client"

import { useEffect, useState } from "react"

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set fictional launch date to 30 days from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center gap-4 sm:gap-8">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Mins", value: timeLeft.minutes },
        { label: "Secs", value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="glass flex h-16 w-16 items-center justify-center rounded-xl border-white/10 sm:h-20 sm:w-20">
            <span className="text-2xl font-bold text-primary sm:text-3xl">
              {item.value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}
