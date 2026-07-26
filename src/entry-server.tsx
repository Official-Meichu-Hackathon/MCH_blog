import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import Layout from './components/Layout'
import Home from './pages/Home'
import './i18n'

// The router is decorative (single route, no router hooks/links anywhere), so
// rendering Layout > Home directly produces DOM identical to the client tree
// (BrowserRouter and Routes emit no markup), keeping hydration consistent.
export function render() {
  return renderToString(
    <StrictMode>
      <Layout>
        <Home />
      </Layout>
    </StrictMode>,
  )
}
