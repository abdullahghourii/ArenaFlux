import { Navbar } from "@/components/navbar"
import { WaitlistForm } from "@/components/waitlist-form"
import { Zap, Trophy, ShieldCheck } from "lucide-react"

export default function Waitlist() {
  const perks = [
    {
      icon: Zap,
      title: "Early Access",
      desc: "Be the first to test the AFX tournament engine in closed beta matches.",
    },
    {
      icon: Trophy,
      title: "Genesis Drops",
      desc: "Receive exclusive AFX token drops and founder-only gaming badges.",
    },
    {
      icon: ShieldCheck,
      title: "Priority Support",
      desc: "Direct access to the development team for feedback and feature requests.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-6xl mb-6">
                Claim Your <span className="text-primary">Spot</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Join 50,000+ players waiting to revolutionize competitive gaming. Early adopters receive priority access
                to the AFX Beta and exclusive platform rewards.
              </p>

              <div className="space-y-8">
                {perks.map((perk, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <perk.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{perk.title}</h3>
                      <p className="text-sm text-muted-foreground">{perk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
              <div className="relative glass p-8 lg:p-12 rounded-3xl border-white/5">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
                  <p className="text-sm text-muted-foreground">Limited spots available for the Q4 Beta cycle.</p>
                </div>
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
