import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import LanguageToggle from './components/common/LanguageToggle'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
import ResultPage from './pages/ResultPage'
import TypesPage from './pages/TypesPage'
import TypeDetailPage from './pages/TypeDetailPage'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LanguageToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/types" element={<TypesPage />} />
          <Route path="/types/:code" element={<TypeDetailPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
