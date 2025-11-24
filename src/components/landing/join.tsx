import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Join() {
  return (
    <section id="join" className="relative overflow-hidden bg-gradient-to-br from-secondary/40 via-background to-secondary/40">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

      <div className="container relative mx-auto max-w-7xl px-4 py-32 text-center md:px-6">
        <h2 className="font-sans text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
          Start Your Journey
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70 md:text-xl">
          Join Aether today and start your journey toward becoming a skilled, recognized, and resilient architect.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="group font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to hover:shadow-glow-lg transition-all duration-300 border-0 text-base px-8">
            <Link href="https://discord.gg/your-discord-link" target="_blank">
              Join the Community on Discord <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
