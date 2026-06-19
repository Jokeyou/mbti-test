import AnimatedPage from '../components/common/AnimatedPage'
import HeroSection from '../components/home/HeroSection'
import TypePreview from '../components/home/TypePreview'

export default function HomePage() {
  return (
    <AnimatedPage>
      <HeroSection />
      <TypePreview />
    </AnimatedPage>
  )
}
