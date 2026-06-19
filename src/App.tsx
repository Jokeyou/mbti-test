import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useTestStore } from './store/testStore'
import LanguageToggle from './components/common/LanguageToggle'
import ThemeToggle from './components/common/ThemeToggle'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
import ResultPage from './pages/ResultPage'
import TypesPage from './pages/TypesPage'
import TypeDetailPage from './pages/TypeDetailPage'
import FigurePreview from './pages/FigurePreview'

function ThemeManager() {
  const theme = useTestStore((s) => s.theme)

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      // system
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const update = () => {
        if (mq.matches) root.classList.add('dark')
        else root.classList.remove('dark')
      }
      update()
      mq.addEventListener('change', update)
      return () => mq.removeEventListener('change', update)
    }
  }, [theme])

  return null
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeManager />
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/types" element={<TypesPage />} />
          <Route path="/types/:code" element={<TypeDetailPage />} />
          <Route path="/preview" element={<FigurePreview />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
