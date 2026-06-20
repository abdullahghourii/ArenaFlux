"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setStatus("loading")
    setMessage("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok || !data.ok) {
        setStatus("error")
        setMessage(data.message || "Something went wrong. Please try again.")
        return
      }

      setStatus("success")
      setMessage(data.message || "You're on the list!")
      setEmail("")
    } catch (error) {
      console.error("Waitlist form error:", error)
      setStatus("error")
      setMessage("Could not connect to the server. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="glass p-8 rounded-2xl text-center border-primary/20 animate-in fade-in zoom-in duration-300">
        <div className="mx-auto h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
          <CheckCircle2 className="h-6 w-6" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>

        <p className="text-sm text-muted-foreground">
          {message || "Check your inbox for a confirmation and your early access credentials."}
        </p>

        <Button
          variant="ghost"
          className="mt-6 text-primary hover:text-primary"
          onClick={() => {
            setStatus("idle")
            setMessage("")
          }}
        >
          Join with another email
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative group">
        <Input
          type="email"
          placeholder="Enter your email address"
          className="h-14 bg-white/5 border-white/10 text-white placeholder:text-muted-foreground rounded-xl px-6 focus:neon-border transition-all"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle className="h-4 w-4" />
          <span>{message}</span>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(var(--primary),0.3)]"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          "Join the Arena"
        )}
      </Button>

      <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest mt-4">
        By joining, you agree to our Terms of Beta Service
      </p>
    </form>
  )
}