import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import TeamSection from './components/TeamSection'
import TimelineSection from './components/TimelineSection'
import ContactSection from './components/ContactSection'
import Companies from './components/Companies'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#040509]">
      <Navigation />
      <HeroSection />
      <Companies />
      <StatsSection />
      <TeamSection />
      <TimelineSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
