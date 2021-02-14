import { motion } from 'framer-motion'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-900">Construa interfaces modernas utilizando Next.js, TaillwindCSS e Framer Motion.</h1>

      <div className="grid w-full grid-cols-1 grid-rows-3">
        <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer">
          <motion.img className="w-full h-full" src="/img/nextjs.svg" alt="Next.js" />
        </div>
      </div>
    </Layout>
  )
}
