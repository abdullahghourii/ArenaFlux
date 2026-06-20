import { Navbar } from "@/components/navbar"
import { Countdown } from "@/components/countdown"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Trophy, Target, Zap, ShieldCheck, Twitter, MessageSquare, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="container relative z-10 mx-auto px-4 text-center">
            <div className="mx-auto mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
              Next-Gen Gaming Engine Live on Beta Soon
            </div>
            <h1 className="mx-auto mb-6 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              ArenaFlux – The <span className="text-primary">Crypto Engine</span> for Competitive Gaming
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Play ranked matches, stake AFX, and let winners claim the prize pool while the platform grows sustainably.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/waitlist">
                <Button size="lg" className="h-12 bg-primary px-8 text-white hover:bg-primary/90">
                  Join Waitlist
                </Button>
              </Link>
              <Link href="/roadmap">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 border-white/10 px-8 text-white hover:bg-white/5 bg-transparent"
                >
                  View Roadmap
                </Button>
              </Link>
            </div>

            <div className="mt-16 sm:mt-24">
              <p className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                ArenaFlux Beta Launch in
              </p>
              <Countdown />
            </div>
          </div>
        </section>

        {/* How It Works (Short) */}
        <section className="py-24 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Master the Arena</h2>
              <p className="mt-4 text-muted-foreground">Turn every match into meaningful stakes in 4 simple steps.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Zap,
                  title: "Buy AFX",
                  description: "Purchase AFX tokens through our secure swap portal.",
                },
                {
                  icon: Target,
                  title: "Join Match",
                  description: "Enter a ranked match or tournament for your favorite titles.",
                },
                {
                  icon: Trophy,
                  title: "Compete & Win",
                  description: "Battle it out against players of your skill level.",
                },
                {
                  icon: ShieldCheck,
                  title: "Claim Pool",
                  description: "Winners receive prize pool automatically via smart contract.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="glass group relative overflow-hidden rounded-2xl p-8 transition-all hover:neon-border"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Game Teasers */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Available Arenas</h2>
                <p className="mt-2 text-muted-foreground">Multiple titles supported for AFX-based competitive play.</p>
              </div>
              <Link href="/games">
                <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto font-semibold">
                  View All Games {"->"}
                </Button>
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "FPS Competitve", image: "/games/cs2.jpg" },
                { name: "Battle Royale", image: "/games/warzone.jpg" },
                { name: "RPG Competetive", image: "/games/dota.jpg" },
                { name: "Fighting Games", image: "/games/tekken.jpg" },
              ].map((game) => (
                <div
                  key={game.name}
                  className="glass group overflow-hidden rounded-2xl border-white/5 bg-white/5 transition-all hover:scale-[1.02]"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white">{game.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Competitive $5 AFX entry pool</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-4 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="h-full w-full rounded-md bg-background flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">◆</span>
                  </div>
                </div>
                <span className="text-xl font-bold tracking-tighter text-white">ArenaFlux</span>
              </Link>
              <p className="text-muted-foreground max-w-sm mb-6">
                The decentralized engine for the next generation of competitive gaming. Powering tournaments through
                automated smart contracts.
              </p>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Twitter className="h-4 w-4 text-white" />
                </div>
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Mail className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Ecosystem</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <Link href="/how-it-works" className="hover:text-primary transition-colors">
                    Tournament Models
                  </Link>
                </li>
                <li>
                  <Link href="/games" className="hover:text-primary transition-colors">
                    Supported Games
                  </Link>
                </li>
                <li>
                  <Link href="/tokenomics" className="hover:text-primary transition-colors">
                    AFX Tokenomics
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="hover:text-primary transition-colors">
                    Project Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Platform</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <Link href="/whitepaper" className="hover:text-primary transition-colors">
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary transition-colors">
                    Developer SDK
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-primary transition-colors">
                    Support FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/waitlist" className="hover:text-primary transition-colors">
                    Waitlist Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              &copy; 2026 ArenaFlux Protocol. All rights reserved.
            </p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
              ArenaFlux is a conceptual project. Do your own research.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
