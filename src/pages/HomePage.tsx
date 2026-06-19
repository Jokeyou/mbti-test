import AnimatedPage from '../components/common/AnimatedPage'
import HeroSection from '../components/home/HeroSection'
import TypePreview from '../components/home/TypePreview'
import FigurePreviewSection from '../components/home/FigurePreviewSection'

export default function HomePage() {
  return (
    <AnimatedPage>
      <HeroSection />
      <TypePreview />
      <FigurePreviewSection />
    </AnimatedPage>
  )
}
