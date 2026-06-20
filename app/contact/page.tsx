"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Mail, Twitter, Send, Loader2, AlertCircle } from "lucide-react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  })

  const handleChange = (field: "fullName" | "email" | "message", value: string) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok || !data.ok) {
        setErrorMessage(data.message || "Something went wrong. Please try again.")
        return
      }

      setSubmitted(true)
      setFormData({
        fullName: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error("Contact form error:", error)
      setErrorMessage("Could not connect to the server. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
                  Connect with the <span className="text-primary">Arena</span>
                </h1>

                <p className="text-xl text-muted-foreground mb-12">
                  Have questions about AFX, partnership inquiries, or developer support? Our team is active 24/7 across
                  our community channels.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-6 items-center">
                    <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Email Us</h3>
                      <p className="text-muted-foreground">hello@arenaflux.io</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center">
                    <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Join Discord</h3>
                      <p className="text-muted-foreground">discord.gg/arenaflux</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center">
                    <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                      <Twitter className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Follow X</h3>
                      <p className="text-muted-foreground">@ArenaFlux</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 p-8 glass rounded-2xl border-white/5">
                  <h3 className="text-xl font-bold text-white mb-2">Media Inquiries</h3>
                  <p className="text-muted-foreground text-sm">
                    For press kits and interview requests, please contact our PR department at press@arenaflux.io
                  </p>
                </div>
              </div>

              <div className="glass p-8 lg:p-10 rounded-3xl border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 bg-primary/5 blur-[80px] rounded-full" />

                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                      <Send className="h-8 w-8" />
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>

                    <p className="text-muted-foreground">
                      Thanks for reaching out. A representative from the ArenaFlux team will get back to you within 24
                      hours.
                    </p>

                    <Button
                      variant="ghost"
                      className="mt-8 text-primary"
                      onClick={() => {
                        setSubmitted(false)
                        setErrorMessage("")
                      }}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground uppercase tracking-widest ml-1">
                          Full Name
                        </label>

                        <Input
                          placeholder="John Doe"
                          className="bg-white/5 border-white/10 h-12 focus:neon-border transition-all"
                          value={formData.fullName}
                          onChange={(e) => handleChange("fullName", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground uppercase tracking-widest ml-1">
                          Email Address
                        </label>

                        <Input
                          type="email"
                          placeholder="john@example.com"
                          className="bg-white/5 border-white/10 h-12 focus:neon-border transition-all"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground uppercase tracking-widest ml-1">
                          Message
                        </label>

                        <Textarea
                          placeholder="How can we help you?"
                          className="bg-white/5 border-white/10 min-h-[150px] focus:neon-border transition-all resize-none"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          required
                        />
                      </div>

                      {errorMessage && (
                        <div className="flex items-center gap-2 text-sm text-red-400">
                          <AlertCircle className="h-4 w-4" />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Transmit Message"
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}