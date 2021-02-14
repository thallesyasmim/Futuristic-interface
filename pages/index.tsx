import Layout from '../components/Layout'
import Card from '../components/Card'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-900">Construa interfaces modernas utilizando Next.js, TaillwindCSS e Framer Motion.</h1>

      <div className="grid w-full grid-cols-1 grid-rows-3 mt-10 md:mt-24">
        <Card imgSrc="/img/nextjs.svg" href="/nextjs" layoutId="nextjs-logo" />
        <Card imgSrc="/img/tailwind.svg" href="/tailwind" layoutId="tailwind-logo" />
        <Card imgSrc="/img/framermotion.svg" href="/framermotion" layoutId="framermotion-logo" />
      </div>
      
    </Layout>
  )
}
