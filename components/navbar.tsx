"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const checkTokenLink =
  "https://explorer.solana.com/address/6WWWTRJ9EaeoEgHHLZEHMhZT3gXQj55hGHMsTGykveAV?cluster=devnet"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Games", href: "/games" },
  { label: "Tokenomics", href: "/tokenomics" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Developers", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary p-1">
            <div className="h-full w-full rounded-md bg-background flex items-center justify-center">
              <span className="text-xs font-bold text-primary">AFX</span>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">ArenaFlux</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}

          <Link
            href="/whitepaper"
            className="transition-colors hover:text-primary text-xs uppercase tracking-widest bg-white/5 px-2 py-1 rounded"
          >
            WP
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href={checkTokenLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              variant="outline"
              className="border-primary/40 bg-white/5 text-white hover:bg-primary/10 hover:text-primary font-semibold px-5"
            >
              Check Token
            </Button>
          </Link>

          <Link href="/waitlist">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 shadow-[0_0_15px_rgba(var(--primary),0.5)]"
            >
              Join Waitlist
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Popup Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute left-0 top-16 w-full border-b border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl">
          <div className="container mx-auto px-4 py-5">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/whitepaper"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-primary transition-colors"
              >
                Whitepaper
              </Link>
            </nav>

            <div className="mt-5 grid gap-3">
              <Link href={checkTokenLink} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                <Button
                  variant="outline"
                  className="w-full border-primary/40 bg-white/5 text-white hover:bg-primary/10 hover:text-primary font-semibold"
                >
                  Check Token
                </Button>
              </Link>

              <Link href="/waitlist" onClick={closeMobileMenu}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                  Join Waitlist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}