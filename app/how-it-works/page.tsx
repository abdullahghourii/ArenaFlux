import { Navbar } from "@/components/navbar"
import { Users, User, ArrowRight, Wallet, Shield } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl mb-6">
              The <span className="text-primary">Tournament</span> Economy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ArenaFlux automates prize pool distribution using secure smart contracts, ensuring every victory is
              rewarded fairly and transparently.
            </p>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            {/* Team vs Team Model */}
            <div className="glass group relative overflow-hidden rounded-3xl p-8 lg:p-12 border-primary/20">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all" />
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Team vs Team</h2>
                  <p className="text-primary text-sm font-semibold tracking-wider uppercase">Standard Competitive</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-muted-foreground">Entry Fee</span>
                  <span className="text-xl font-bold text-white">$5 AFX / Player</span>
                </div>

                <div className="relative py-4">
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span className="text-primary">80% Winners</span>
                    <span className="text-muted-foreground">20% Platform Fee</span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary w-[80%]" />
                    <div className="h-full bg-white/10 w-[20%]" />
                  </div>
                </div>

                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0" />
                    <span>In a 5v5 match, the total pool is $50 worth of AFX.</span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0" />
                    <span>Winning team receives $40 (80%) instantly after the match.</span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0" />
                    <span>$10 (20%) funds platform operations and future prize pools.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Battle Royale Model */}
            <div className="glass group relative overflow-hidden rounded-3xl p-8 lg:p-12 border-secondary/20">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 bg-secondary/10 blur-[80px] rounded-full group-hover:bg-secondary/20 transition-all" />
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary">
                  <User className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Battle Royale</h2>
                  <p className="text-secondary text-sm font-semibold tracking-wider uppercase">Solo Survival</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-muted-foreground">Entry Fee</span>
                  <span className="text-xl font-bold text-white">$5 AFX / Player</span>
                </div>

                <div className="relative py-4">
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span className="text-secondary">70% Top 3</span>
                    <span className="text-muted-foreground">30% Platform Fee</span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden flex">
                    <div className="h-full bg-secondary w-[70%]" />
                    <div className="h-full bg-white/10 w-[30%]" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-muted-foreground mb-1 uppercase">1st</div>
                    <div className="text-lg font-bold text-white">40%</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-muted-foreground mb-1 uppercase">2nd</div>
                    <div className="text-lg font-bold text-white">20%</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs text-muted-foreground mb-1 uppercase">3rd</div>
                    <div className="text-lg font-bold text-white">10%</div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  In a 100-player lobby ($500 pool), the winner takes $200, while the remaining pool supports platform
                  sustainability.
                </p>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-32 grid gap-8 md:grid-cols-3">
            <div className="text-center p-8">
              <div className="mx-auto h-12 w-12 text-primary mb-6">
                <Wallet className="h-full w-full" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Automated Payouts</h3>
              <p className="text-sm text-muted-foreground">
                No manual processing. Smart contracts handle distributions the second a match ends.
              </p>
            </div>
            <div className="text-center p-8 border-x border-white/5">
              <div className="mx-auto h-12 w-12 text-primary mb-6">
                <Shield className="h-full w-full" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Anti-Cheat Native</h3>
              <p className="text-sm text-muted-foreground">
                Our SDK verifies match results directly with game servers to prevent fraud.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="mx-auto h-12 w-12 text-primary mb-6">
                <Users className="h-full w-full" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Skill-Based Tiering</h3>
              <p className="text-sm text-muted-foreground">
                Matched against players of similar AFX rankings to ensure competitive integrity.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
