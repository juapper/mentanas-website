import React from "react";
import Member from "./member";


const AboutUs: React.FC = () => {
    return <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
        <div className="containter mx-auto px-11">
            <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
                <strong>Te ayudaremos a tener mejores aplicaciones, más rápido.</strong> Nuestro equipo de ingenieros ha creado una gran cantidad de aplicaciones profesionales.
            </p>
        </div>
        <div className="container mx-auto px-11 text-center mt-28">
            <h2>Nuestros Servicios</h2>
            <div className="mt-10 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-20">
                <Member id="apple" namemember="Aplicaciones para Android." socialId={""} link={""}/>
                <Member id="appe" namemember="Aplicaciones para IOS." socialId="@mrousavy" link="https://github.com/"/>
                <Member id="html" namemember="Desarrollo de páginas web." socialId="@mrousavy" link="https://github.com/"/>
                <Member id="FB" namemember="Manejo de redes sociales" socialId="@mrousavy" link="https://github.com/"/>

            </div>
        </div>
    </section>
}

export default AboutUs