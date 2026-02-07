import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { StickyContact } from './components/StickyContact'
import { Footer } from './sections/Footer'
import { Home } from './pages/Home'
import { Legal } from './pages/Legal'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentions-legales" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
        <StickyContact />
      </div>
    </Router>
  )
}

export default App
