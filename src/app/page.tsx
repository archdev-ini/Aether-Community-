import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Hero from '@/components/landing/hero'
import About from '@/components/landing/about'
import Events from '@/components/landing/events'
import Community from '@/components/landing/community'
import Archive from '@/components/landing/archive'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Events />
        <Community />
        <Archive />
      </main>
      <Footer />
    </div>
  )
}
