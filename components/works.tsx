import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from './work'
import Image from 'next/image'

const Works = () => (
    <TileWrapper numOfPages={1}>
        <TileBackground progress={0} ><WorkBackground /> </TileBackground>
        <TileContent progress={0} >
            <Tile page ={0} renderContent={({progress}) =>(
                <WorkContainer progress={0} >
                    <WorkLeft progress={progress}>
                        <div>Construimos</div>
                        <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Aplicaciones sorprendentes</div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image src="/assets/phone.jpeg" layout="responsive" width={540} height={980} alt="Pink Panda"/>
                    </WorkRight>
                </WorkContainer>
        )}></Tile>
        
        </TileContent>
    </TileWrapper>
)


export default Works