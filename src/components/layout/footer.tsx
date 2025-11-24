import Link from 'next/link'
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import Logo from '@/components/logo'

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="border-t border-gradient-from/20">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 text-center sm:flex-row md:px-6">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-2 text-sm text-foreground/60">
              Aether Ecosystem | Bridging African architecture students to industry.
            </p>
            <p className="mt-1 text-xs text-foreground/50">
              Mentorship • BIM • Mental Wellness • Collaboration • Innovation
            </p>
          </div>
          <p className="text-sm text-foreground/60 order-last sm:order-none mt-4 sm:mt-0">
            © 2025 Aether Ecosystem
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://x.com/aethernwk?s=09" aria-label="Twitter" target="_blank">
              <Twitter className="h-5 w-5 text-foreground/70 transition-all duration-300 hover:text-gradient-from hover:scale-110" />
            </Link>
            <Link href="https://www.instagram.com/aether_eco?igsh=ZjNzeW11azl1M3dq" aria-label="Instagram" target="_blank">
              <Instagram className="h-5 w-5 text-foreground/70 transition-all duration-300 hover:text-gradient-via hover:scale-110" />
            </Link>
            <Link href="https://www.linkedin.com/company/aether-ecosystem/" aria-label="LinkedIn" target="_blank">
              <Linkedin className="h-5 w-5 text-foreground/70 transition-all duration-300 hover:text-gradient-to hover:scale-110" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
