import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Hero from '@/components/landing/hero'
import About from '@/components/landing/about'
import Community from '@/components/landing/community'
import Join from '@/components/landing/join'
import HowItWorks from '@/components/landing/how-it-works'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Community />
        <HowItWorks />
        <Join />
      </main>
      <Footer />
    </div>
  )
}
