import { Navbar } from "@/components/navbar"

export default function Whitepaper() {
  const sections = [
    {
      id: "intro",
      title: "1. Introduction",
      content:
        "Competitive gaming has evolved into a global phenomenon, yet the mechanisms for managing prize pools and tournament payouts remain fragmented and often opaque. ArenaFlux (AFX) introduces a decentralized solution built on blockchain transparency, designed to turn every ranked match into a high-stakes, rewarding experience for players of all levels.",
    },
    {
      id: "problem",
      title: "2. The Current Landscape",
      content:
        "Today's esports ecosystem suffers from delayed payouts, high administrative overhead for organizers, and a lack of trust between participants and platforms. Amateur players often compete for 'bragging rights' only, while professional prize pools can take months to clear banking hurdles. ArenaFlux removes these barriers by automating the entire tournament lifecycle.",
    },
    {
      id: "solution",
      title: "3. The ArenaFlux Solution",
      content:
        "By utilizing AFX tokens and secure smart contracts, we provide a trustless environment for matchmaking. Players buy into tournaments with a fixed AFX amount. The smart contract holds these funds and, upon verification of match results via our proprietary server SDK, instantly distributes the prize pool to the winners according to pre-defined splits.",
    },
    {
      id: "economics",
      title: "4. Economic Model",
      content:
        "Sustainability is achieved through a built-in platform fee (20-30%) on every tournament entry. These fees are split between development operations, marketing, and a revolving player rewards pool, ensuring the platform grows in tandem with its user base.",
    },
    {
      id: "security",
      title: "5. Security & Governance",
      content:
        "ArenaFlux prioritizes integrity through robust anti-cheat integrations and multi-signature wallet security for platform reserves. Future iterations will transition to a DAO model, allowing AFX holders to vote on game integrations, fee structures, and community initiatives.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass rounded-3xl p-8 lg:p-12 border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">Version 1.0.2</span>
            </div>

            <div className="mb-12">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">Whitepaper</h1>
              <p className="text-primary font-semibold tracking-wider uppercase text-sm">ArenaFlux Protocol (AFX)</p>
            </div>

            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-xl font-bold text-white mb-4 border-l-2 border-primary pl-4">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
                </section>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-white/5 text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
                Official Document - ArenaFlux Foundation
              </p>
              <div className="flex justify-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
              
               
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
