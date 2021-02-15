import '../styles/tailwind.css'
import '../styles/globals.css'

import Layout from '../components/Layout'
// All pages will have the Layout component
import { AnimateSharedLayout } from 'framer-motion' 
// Putting this component of Framer Motion we have the animation between one page and another

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  )
}

export default MyApp
