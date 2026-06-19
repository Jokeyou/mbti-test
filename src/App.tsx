import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LanguageToggle from './components/common/LanguageToggle'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
import ResultPage from './pages/ResultPage'
import TypesPage from './pages/TypesPage'

function App() {
  return (
    <BrowserRouter>
      <LanguageToggle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/types" element={<TypesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
