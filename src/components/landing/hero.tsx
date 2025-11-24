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
      className="relative flex h-[95svh] min-h-[700px] flex-col items-center justify-center overflow-hidden bg-black text-center text-white"
    >
      {/* Background Image */}
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover opacity-20 dark:opacity-10"
          priority
        />
      )}

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="max-w-5xl">
          <h1 className="font-sans text-5xl font-extrabold leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in">
            Aether Ecosystem
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 md:text-xl animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Empowering African architecture students to learn, connect, and thrive.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/60 md:text-lg animate-slide-up opacity-0 font-medium" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Mentorship • Skills • Collaboration • Innovation • Wellbeing
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <Button asChild size="lg" className="font-semibold bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to hover:shadow-glow-lg transition-all duration-300 border-0">
              <Link href="/join">Join the Community</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Link href="#about" aria-label="Scroll to next section">
            <ArrowDown className="h-8 w-8 text-white/70" />
          </Link>
        </div>
      </div>
    </section>
  )
}
