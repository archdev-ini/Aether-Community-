import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background')
  
  return (
    <section
      id="hero"
      className="relative flex h-[95svh] min-h-[700px] flex-col items-center justify-center bg-black text-center text-white"
    >
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover opacity-20"
          priority
        />
      )}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="max-w-5xl">
          <h1 className="font-sans text-5xl font-extrabold leading-tight tracking-tighter md:text-7xl lg:text-8xl">
            The Creative Ecosystem for Africa's Architects & Designers
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
            From students to young professionals, AETHER is the space where
            Africa’s architects and designers learn, connect, and build the
            future.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/join">Join the Community</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/30 font-semibold">
              <Link href="/events">Explore Events</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
            <Link href="#about" aria-label="Scroll to next section">
                <ArrowDown className="h-8 w-8 text-white/70" />
            </Link>
        </div>
      </div>
    </section>
  )
}
