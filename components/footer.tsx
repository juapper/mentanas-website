import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Privacy from './privacy'

const Footer: React.FC = ( ) => {
    return <footer className='flex gap-8 items-center justify-center bg-black text-white p-20'>
        <Image src="/assets/logo5.png" width={18} height={18} />
        <div>Ⓒ Mentanas 2022</div>
    </footer>
}

export default Footer