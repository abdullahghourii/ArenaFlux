import { Navbar } from "@/components/navbar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      q: "What is ArenaFlux (AFX)?",
      a: "ArenaFlux is a tournament-focused gaming cryptocurrency (AFX) and protocol designed to automate prize pools for competitive gaming. It allows players to stake tokens in matches and receive instant payouts upon victory.",
    },
    {
      q: "How do prize pools work?",
      a: "Players contribute a set amount of AFX (e.g., $5 worth) to a match pool. Upon match completion, the smart contract automatically distributes the pool: usually 70-80% to winners and 20-30% to the platform for operations and growth.",
    },
    {
      q: "Is this gambling?",
      a: "No. ArenaFlux is a skill-based competitive platform. Payouts are determined strictly by match performance in skill-based games (like CS2, MOBA, or fighting games), not by chance. Users are competing based on their own abilities.",
    },
    {
      q: "Do I need crypto experience to use ArenaFlux?",
      a: "We aim for a seamless experience. While the backend uses blockchain, our interface is designed for gamers. You can purchase AFX directly within the platform using traditional payment methods in supported regions.",
    },
    {
      q: "Which games will be supported?",
      a: "We are launching with support for major titles including CS2, Valorant, and popular Battle Royale games. Our Developer SDK will allow game creators to integrate AFX directly into any competitive title.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
              Common <span className="text-primary">Questions</span>
            </h1>
            <p className="text-muted-foreground">Everything you need to know about the ArenaFlux ecosystem.</p>
          </div>

          <div className="glass rounded-3xl p-6 lg:p-8 border-white/5">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/5">
                  <AccordionTrigger className="text-left text-white hover:text-primary transition-colors py-6 font-bold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              Still have questions?{" "}
              <a href="/contact" className="text-primary hover:underline font-semibold">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
