"use client"

import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Gift, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function BirthdayInvitation() {
  const [wishlistOpen, setWishlistOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main invitation card */}
        <div className="text-center space-y-12 py-12">
          {/* Header with neon accent */}
          <div className="space-y-4">
            <div className="inline-block">
              <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">You&apos;re Invited</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-balance">
              Lean&apos;s
              <span className="block text-primary font-normal">Birthday Celebration</span>
            </h1>
          </div>

          {/* Decorative element with age */}
          <div className="flex justify-center py-4">
            <div className="w-32 h-32 rounded-full border-2 border-primary/30 flex items-center justify-center animate-[scale_3s_ease-in-out_infinite] [animation-name:breathe]">
              <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary flex flex-col items-center justify-center gap-1">
                <span className="text-3xl font-light text-primary">39</span>
                <span className="text-xs text-muted-foreground">years old</span>
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes breathe {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.05); }
            }
          `}</style>

          {/* Join us section - moved above event details */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-pretty leading-relaxed max-w-md mx-auto">
              Join us for an evening of music, laughter, and celebration. Your presence would make this day truly special.
            </p>
          </div>

          {/* Event details */}
          <Card className="bg-card border-border p-8 md:p-12 space-y-6">
            <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider mb-1">Date</p>
                  <p className="text-lg text-foreground">Saturday, January 3rd, 2026</p>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider mb-1">Time</p>
                  <p className="text-lg text-foreground">7:00 PM onwards</p>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider mb-1">Location</p>
                  <p className="text-lg text-foreground">At my home</p>
                  <p className="text-sm text-muted-foreground mt-1">Prilaz Sv. Josipa Radnika 11</p>
                  <a 
                    href="https://maps.app.goo.gl/AycHUVBrhAcTRVK36" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline mt-1 inline-block"
                  >
                    Google Maps
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Beverages and Snacks section */}
          <Card className="bg-card border-border p-8 md:p-12 space-y-6">
            <div className="space-y-4 text-center">
              <p className="text-foreground leading-relaxed">
                There will be some beers and snacks, feel free to bring along some more beer, drinks, or whatever you fancy to share!
              </p>
            </div>
          </Card>

          {/* Expandable Wishlist */}
          <div className="space-y-4">
            <button
              onClick={() => setWishlistOpen(!wishlistOpen)}
              className="w-full flex items-center justify-center gap-3 px-8 py-6 rounded-lg border border-border hover:bg-card/50 transition-colors"
            >
              <Gift className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-light tracking-tight text-foreground">Wishlist</h2>
              <ChevronDown
                className={`w-5 h-5 text-primary transition-transform ${
                  wishlistOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {wishlistOpen && (
              <Card className="bg-card border-border p-8 md:p-12 space-y-6 animate-in fade-in">
                <div className="space-y-6">
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">
                    If you would like to honor me with a present, I&apos;m collecting Pokémon cards. Here are some places to find them:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center p-4 rounded-lg border border-border">
                      <span className="text-foreground">Magic Omens</span>
                    </div>

                    <div className="flex items-center justify-center p-4 rounded-lg border border-border">
                      <span className="text-foreground">CartaMagica</span>
                    </div>

                    <div className="flex items-center justify-center p-4 rounded-lg border border-border">
                      <div className="flex flex-col gap-1 text-center">
                        <span className="text-foreground">Tisak</span>
                        <span className="text-xs text-muted-foreground">Available at any location across the city</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
