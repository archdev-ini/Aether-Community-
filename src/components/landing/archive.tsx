import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { ArrowRight } from 'lucide-react'

export default function Archive() {
  const archiveImage = PlaceHolderImages.find((img) => img.id === 'archive-image')

  return (
    <section id="archive" className="bg-secondary/50">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-24 md:grid-cols-2 md:px-6 lg:gap-24">
        <div className="flex flex-col items-start text-center md:text-left">
          <h2 className="font-sans text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
            Open Knowledge Archive
          </h2>
          <p className="mt-6 text-lg text-foreground/70 md:text-xl">
            AETHER is building an open archive of African design, research, and
            case studies — a resource for students, professionals, and the world.
          </p>
          <Button asChild size="lg" variant="default" className="mt-10 group">
            <Link href="https://t.me/archivault_official" target="_blank">
              Explore the Archive <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-lg">
          {archiveImage && (
             <Image
              src={archiveImage.imageUrl}
              alt={archiveImage.description}
              data-ai-hint={archiveImage.imageHint}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          )}
        </div>
      </div>
    </section>
  )
}
