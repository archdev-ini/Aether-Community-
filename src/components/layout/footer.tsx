import Link from 'next/link'
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from '@/components/logo'

export default function Footer() {
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-4 py-20 text-center md:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Be Part of What’s Next.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/80">
            Architecture in Africa is evolving. AETHER is the medium that makes
            creativity flow. Don’t just watch the future — help design it.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="font-semibold">
              <Link href="#">Join Now</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="font-semibold">
              <Link href="#">Follow on Socials</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row md:px-6">
          <Logo className="text-xl" />
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Aether Hub. All rights reserved.
          </p>
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
        </div>
      </div>
    </footer>
  )
}
