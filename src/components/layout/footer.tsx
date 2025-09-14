import Link from 'next/link'
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from '@/components/logo'

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-16 text-center md:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            Be Part of What’s Next.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/80">
            Architecture in Africa is evolving. AETHER is the medium that makes
            creativity flow. Don’t just watch the future — help design it.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#">Join Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#">Follow on Socials</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
          <Logo className="text-xl" />
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-foreground/70 transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-foreground/70 transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-foreground/70 transition-colors hover:text-primary" />
            </Link>
          </div>
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Aether Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
