import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"

export default function Games() {
  const games = [
    {
      title: "FPS Competetives",
      games: ["CS2", "Valorant", "R6 Siege"],
      entry: "$5 AFX",
      type: "5v5 Ranked",
      image: "/games/cs2.jpg",
    },
    {
      title: "Battle Royale",
      games: ["Warzone", "Apex", "Fortnite"],
      entry: "$5 - $20 AFX",
      type: "Solo/Squad",
      image: "/games/warzone.jpg",
    },
    {
      title: "MOBA Arenas",
      games: ["League of Legends", "Dota 2"],
      entry: "$10 AFX",
      type: "Ranked Ladders",
      image: "/games/dota.jpg",
    },
    {
      title: "Fighting Titles",
      games: ["Street Fighter 6", "Tekken 8"],
      entry: "$2 AFX",
      type: "1v1 Duels",
      image: "/games/tekken.jpg",
    },
    {
      title: "Sports & Racing",
      games: ["FC25", "F1 24", "Rocket League"],
      entry: "$5 AFX",
      type: "Tournament Brackets",
      image: "/games/sports-racing.jpg",
    },
    {
      title: "Mobile Legends",
      games: ["Wild Rift", "Brawl Stars"],
      entry: "$1 AFX",
      type: "Fast Match",
      image: "/games/mobile-legends.jpg",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
              Supported <span className="text-primary">Arenas</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join competitive matches across all major platforms and genres. Use AFX to stake your skills and climb the
              global leaderboards.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((category, i) => (
              <div
                key={i}
                className="glass group overflow-hidden rounded-2xl border-white/5 hover:neon-border transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={category.image || "/placeholder.svg"}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                    alt={category.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <Badge className="absolute bottom-4 left-4 bg-primary/80 hover:bg-primary border-none text-white">
                    {category.type}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.games.map((game) => (
                      <span
                        key={game}
                        className="text-xs px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5"
                      >
                        {game}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">Standard Entry</span>
                    <span className="text-primary font-bold">{category.entry}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 glass rounded-3xl p-12 text-center border-primary/10">
            <h2 className="text-2xl font-bold text-white mb-4">Are you a Game Developer?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Integrate the ArenaFlux SDK into your game to enable automated tournament management and real-stakes
              matchmaking for your players.
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="text-primary border-primary/50 px-4 py-2">
                Coming Q4 2026
              </Badge>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
