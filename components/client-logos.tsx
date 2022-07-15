import React from 'react'
import SliderContainer, { SliderItem } from './slider';
import Image from 'next/image'

const ClientLogos: React.FC =() => (
    <>
    <SliderContainer initialOffsetX={0} ClassName={''} contentWidth={1290} >

        <SliderItem width={150}>
        <Image src="/assets/phpp.png" width={150} height={50} alt="PHP logo" objectFit="contain"/>
        </SliderItem>

        <SliderItem width={150}>
        <Image src="/assets/html5.png" width={150} height={50} alt="Html logo" objectFit="contain"/>
        </SliderItem>
        <SliderItem width={150}>
        <Image src="/assets/css.png" width={150} height={50} alt="css logo" objectFit="contain"/>
        </SliderItem>
        <SliderItem width={150}>
        <Image src="/assets/java.png" width={150} height={50} alt="javascript logo" objectFit="contain"/>
        </SliderItem>
        <SliderItem width={150}>
        <Image src="/assets/code.png" width={150} height={50} alt="xcode logo" objectFit="contain"/>
        </SliderItem>
        <SliderItem width={150}>
        <Image src="/assets/andro.jpeg" width={150} height={50} alt="android studio logo" objectFit="contain"/>
        </SliderItem>
       
    </SliderContainer>
    </>
)

export default ClientLogos