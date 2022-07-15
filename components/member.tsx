import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    id: string
    namemember: string
    socialId: string
    link: string
}

const Member: React.FC<Props> = ({ id, namemember, socialId, link}) =>
(
    <div>
        <Image src={`/assets/services/${id}.png`} alt={namemember} width={1155} height={1155}/>
        <div className='text-2xl xl:text-3xl'>{namemember}</div>
    </div>
)

export default Member