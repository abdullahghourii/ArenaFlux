import { Navbar } from "@/components/navbar"
import { CheckCircle2, Circle } from "lucide-react"

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 245 240"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M104.4 104.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.3-5 10.2-11.1 0-6.1-4.5-11.1-10.2-11.1Zm36.4 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.3-5 10.2-11.1 0-6.1-4.5-11.1-10.2-11.1Z" />
      <path d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v134.9c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.4 12.8 11.9 12.1 11.2 21.5 19.2V40.6C210 29.2 200.8 20 189.5 20Zm-38.8 130.2s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.4-14.5 4.2-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.2-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.8c10.7-4.7 19.2-5.9 22.7-6.2.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2Z" />
    </svg>
  )
}

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "Complete",
      items: ["Concept Development", "Technical Whitepaper v1.0", "Website Launch", "Community Channels Setup"],
    },
    {
      phase: "Phase 2",
      title: "Prototypes",
      status: "In Progress",
      items: ["AFX Smart Contract Audit", "Closed Beta for CS2 Ranked", "Waitlist Launch", "Strategic Seed Round"],
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      status: "Upcoming",
      items: ["Game Developer SDK (Alpha)", "Battle Royale Integration", "Mobile Gaming Pilot", "CEX/DEX Listings"],
    },
    {
      phase: "Phase 4",
      title: "Ecosystem",
      status: "Upcoming",
      items: ["DAO Governance Module", "Esports Partnership Tour", "Cross-chain Bridges", "ArenaFlux VR Hub"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl mb-4">
              The <span className="text-primary">Journey</span>
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our roadmap is a strategic blueprint for the future of competitive gaming. From initial concept to a fully
              decentralized gaming economy.
            </p>
          </div>

          <div className="relative mt-20">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />

            <div className="space-y-12">
              {phases.map((item, i) => (
                <div key={i} className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary shadow-[0_0_15px_var(--primary)] hidden lg:block z-10" />

                  <div
                    className={`glass w-full lg:w-[45%] p-8 rounded-2xl border-white/5 group hover:neon-border transition-all ${
                      i % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">{item.phase}</span>

                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full border ${
                          item.status === "Complete"
                            ? "bg-green-500/10 border-green-500/20 text-green-500"
                            : item.status === "In Progress"
                              ? "bg-primary/10 border-primary/20 text-primary animate-pulse"
                              : "bg-white/5 border-white/10 text-muted-foreground"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>

                    <ul className="space-y-3">
                      {item.items.map((task) => (
                        <li key={task} className="flex items-center gap-3 text-sm text-muted-foreground">
                          {item.status === "Complete" ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          ) : (
                            <Circle className="h-4 w-4 text-white/20" />
                          )}

                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-32 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Stay ahead of the curve</h2>

            <p className="text-muted-foreground mb-8">
              Roadmap is updated monthly based on community governance votes and technical milestones. Join our Discord
              for real-time updates.
            </p>

            <div className="flex justify-center">
              <a
                href="https://discord.gg/VBxVv5qx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#5865F2] px-7 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(88,101,242,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#4752C4] hover:shadow-[0_0_28px_rgba(88,101,242,0.5)]"
              >
                <DiscordIcon className="h-5 w-5" />
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}