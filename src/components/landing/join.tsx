import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Join() {
  return (
    <section id="join" className="bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 py-24 text-center md:px-6">
        <h2 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
          Be Part of What’s Next
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70 md:text-xl">
          Architecture in Africa is evolving. AETHER is the medium that makes
          creativity flow. Don’t just watch the future — help design it.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="group font-semibold">
            <Link href="#">
              Join the Community Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
