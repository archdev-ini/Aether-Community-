import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background')
  
  return (
    <section
      id="hero"
      className="relative flex h-[90svh] min-h-[600px] items-center justify-center text-center text-white"
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
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-5xl font-bold leading-tight drop-shadow-md md:text-7xl">
          The Creative Ecosystem for Architects & Designers
        </h1>
        <p className="mt-6 text-lg text-white/90 drop-shadow-sm md:text-xl">
          From students to young professionals, AETHER is the space where
          Africa’s architects and designers learn, connect, and build the
          future.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="#community">Join the Community</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white bg-transparent text-white backdrop-blur-sm hover:bg-white/10">
            <Link href="#events">Explore Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
