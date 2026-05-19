import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import './i18n'

function HashScroll() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1))
      if (!target) return

      const top = target.getBoundingClientRect().top + window.scrollY - 88
      document.documentElement.scrollTop = top
      document.body.scrollTop = top
    })
  }, [hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <HashScroll />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
