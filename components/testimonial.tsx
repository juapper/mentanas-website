import React from 'react'
import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Review from './review'


const Testimonials: React.FC = () => (
    <Carousel className="bg-black text-white py-10 lg:py-20">
        <CarouselItem index={0}>
            <Review by="Adrian">
            Fue un acompañamiento muy profesional donde siempre tuvimos distintas opciones para nuestra aplicación.
            </Review>
        </CarouselItem>

        <CarouselItem index={1}>
            <Review by="Santiago ">
            Fue una buena experiencia donde nos sentimos en buenas manos para nuestra aplicación.
            </Review>
        </CarouselItem>

        <CarouselItem index={2}>
            <Review by="Alexa">
            Necesitábamos una solución en tiempo record la cual fue posible después de hablar con el equipo.
            </Review>
        </CarouselItem>

        <CarouselItem index={4}>
            <Review by="Kevin">
            Una agencia que se alineó con nuestros valores entregando un producto de calidad.
            </Review>
        </CarouselItem>
    </Carousel>
)

export default Testimonials