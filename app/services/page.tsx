import { Navbar } from "@/components/navbar"
import { Code2, Cpu, Globe, Share2, BadgeInfo } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Services() {
  const services = [
    {
      icon: Cpu,
      title: "Matchmaking SDK",
      desc: "Integrate AFX buy-ins and payouts directly into your game's matchmaking logic with our lightweight C++ and C# SDKs.",
      status: "Alpha",
    },
    {
      icon: Code2,
      title: "Platform API",
      desc: "Comprehensive REST API for fetching tournament data, player rankings, and historical pool distributions.",
      status: "Beta Access",
    },
    {
      icon: Globe,
      title: "White-label Portal",
      desc: "Deploy a branded tournament platform using ArenaFlux's backend, allowing you to run custom tournaments with ease.",
      status: "Coming Soon",
    },
    {
      icon: Share2,
      title: "Social Integration",
      desc: "Automatically post tournament highlights and winner announcements to X, Discord, and Telegram.",
      status: "Coming Soon",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
              For <span className="text-primary">Developers</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Build the future of competitive gaming with ArenaFlux. We provide the infrastructure, you provide the
              action.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <div key={i} className="glass p-8 rounded-3xl border-white/5 hover:neon-border transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    {service.status}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 glass p-8 lg:p-12 rounded-3xl border-secondary/20 bg-secondary/5">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
                  <BadgeInfo className="h-4 w-4" />
                  Dev Grants Program
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Empowering Creators</h2>
                <p className="text-muted-foreground mb-8">
                  We're offering $2M in AFX grants for developers who integrate ArenaFlux into indie titles or build
                  innovative tournament management tools.
                </p>
                <div className="flex gap-4">
                  <div className="h-10 w-40 rounded-lg bg-secondary text-white font-bold flex items-center justify-center cursor-pointer hover:bg-secondary/90 transition-colors">
                    Apply for Grant
                  </div>
                  <div className="h-10 w-40 rounded-lg border border-white/10 flex items-center justify-center text-muted-foreground cursor-pointer hover:bg-white/5">
                    Documentation
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[40%] aspect-video bg-black/40 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <Code2 className="h-16 w-16 text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
