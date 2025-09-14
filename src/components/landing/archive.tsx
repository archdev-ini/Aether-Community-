import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export default function Archive() {
  const archiveImage = PlaceHolderImages.find((img) => img.id === 'archive-image')

  return (
    <section id="archive" className="bg-secondary">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-24 md:grid-cols-2 md:px-6 lg:gap-24">
        <div className="flex flex-col items-start text-center md:text-left">
          <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            Preserving & Sharing Knowledge
          </h2>
          <p className="mt-6 text-lg text-foreground/80 md:text-xl">
            AETHER is building an open archive of African design, research, and
            case studies — a resource for students, professionals, and the world.
          </p>
          <Button asChild size="lg" variant="outline" className="mt-10 bg-transparent">
            <Link href="#">Explore the Archive</Link>
          </Button>
        </div>
        <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-2xl">
          {archiveImage && (
             <Image
              src={archiveImage.imageUrl}
              alt={archiveImage.description}
              data-ai-hint={archiveImage.imageHint}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>
    </section>
  )
}
