import React from 'react'

import Navbar from '../atoms/navbar'
import HeroSection from '../home_sections/section1.hero'
import DescriptionSection from '../home_sections/section2.description'
import MisionSection from '../home_sections/section3.mision'
import ServicesSection from '../home_sections/section4.services'
import OurWorksSection from '../home_sections/section5.ourWorks'
import SuccessCasesSection from '../home_sections/section6.successCases'
import TestimoniosSection from '../home_sections/section8.testimonios'
import ContactSection from '../home_sections/section9.contact'
import Footer from '../atoms/Footer'
import Nosotros from '../home_sections/section7.nosotros'

export default function LandingHome() {
    return (
        <>
            <Navbar/>
            <section id='heroS1'>
                <HeroSection/>
            </section>
            <section id='descriptionS2'>
                <DescriptionSection/>
            </section>
            <section id='misionS3'>
                <MisionSection/>
            </section>
            <section id='servicesS4'>
                <ServicesSection/>
            </section>
            <section id='ourWorksS5'> 
                <OurWorksSection/>
            </section>
            <section id='ourWorksS6'> 
                <SuccessCasesSection/>
            </section>
            <section id='nosotrosS7'> 
                <Nosotros/>
            </section>
            <section id='ourWorksS8'> 
                <TestimoniosSection/>
            </section>
            <section id='ourWorksS9'> 
                <ContactSection/>
            </section>
            <Footer/>
        </>
    )
}
