import { motion } from 'framer-motion'

import Link from 'next/link'

interface CardProps {
    href: string
    imgSrc: string
    layoutId: string
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId }) => { /* LayoutID - It must be the same between two pages to be able to animate with Framer Motion */ 
    return (
        <Link href={href}>
            <div className="relative h-20 md:h-40 bg-gray-200 hover:bg-gray-50 rounded-xl cursor-pointer transition mt-10">
            <motion.img className="w-full h-full" src={imgSrc} alt="Next.js" layoutId={layoutId} />
            </div>
        </Link>
    )
}

export default Card