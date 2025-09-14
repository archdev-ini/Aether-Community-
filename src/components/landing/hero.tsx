import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background')
  
  return (
    <section
      id="hero"
      className="relative flex h-[90svh] min-h-[700px] items-center justify-center text-center text-white"
    >
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
      <div className="relative z-10 max-w-5xl px-4">
        <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg md:text-7xl">
          The Creative Ecosystem for Architects & Designers
        </h1>
        <p className="mt-6 text-lg text-white/90 drop-shadow-md md:text-xl max-w-3xl mx-auto">
          From students to young professionals, AETHER is the space where
          Africa’s architects and designers learn, connect, and build the
          future.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="font-semibold">
            <Link href="#community">Join the Community</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white font-semibold">
            <Link href="#events">Explore Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
