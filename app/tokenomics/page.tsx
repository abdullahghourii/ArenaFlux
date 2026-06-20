import { Navbar } from "@/components/navbar"

export default function Tokenomics() {
  const allocations = [
    { label: "Player Rewards", value: 40, color: "bg-primary", desc: "Eco-system incentives & tournament pools" },
    { label: "Development", value: 25, color: "bg-secondary", desc: "Core platform build and game integrations" },
    { label: "Liquidity", value: 15, color: "bg-accent", desc: "Exchange depth and stability" },
    { label: "Marketing", value: 10, color: "bg-blue-500", desc: "Esports partnerships and awareness" },
    { label: "Advisors", value: 5, color: "bg-purple-400", desc: "Strategic industry partners" },
    { label: "Public Sale", value: 5, color: "bg-pink-500", desc: "Initial community offering" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl mb-6">
              AFX <span className="text-primary">Economics</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Designed for long-term sustainability, the AFX tokenomics model aligns the interests of players,
              developers, and stakeholders through a deflationary tournament-fee cycle.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Visual Chart Placeholder (CSS only) */}
            <div className="glass aspect-square rounded-full flex items-center justify-center p-8 relative overflow-hidden border-primary/20">
              <div className="absolute inset-0 bg-primary/5 blur-[100px]" />
              <div className="relative h-full w-full rounded-full border-8 border-white/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-black text-white tracking-tighter">1B</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Total Supply</div>
                </div>

                {/* Simulated segments with absolute divs */}
                <div className="absolute inset-[-8px] rounded-full border-8 border-transparent border-t-primary" />
                <div className="absolute inset-[-8px] rounded-full border-8 border-transparent border-r-secondary rotate-[45deg]" />
              </div>
            </div>

            <div className="space-y-6">
              {allocations.map((item) => (
                <div
                  key={item.label}
                  className="glass p-6 rounded-2xl border-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`h-4 w-4 rounded-full ${item.color}`} />
                      <h3 className="font-bold text-white">{item.label}</h3>
                    </div>
                    <span className="text-xl font-bold text-primary">{item.value}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 glass p-10 rounded-3xl border-primary/10">
            <h2 className="text-2xl font-bold text-white mb-6">Sustainable Ecosystem Fee</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <p className="text-muted-foreground">
                Unlike traditional inflationary models, AFX utilizes platform fees from tournaments to continuously fund
                the prize pool and development server. 20-30% of every tournament entry is automatically routed via
                smart contracts to support the ecosystem.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-white">Daily tournament fees reinvested into Player Rewards</span>
                </div>
                <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-sm text-white">Automated buy-back and burn mechanism (Conceptual)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
