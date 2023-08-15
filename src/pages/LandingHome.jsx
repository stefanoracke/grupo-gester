import React, {useEffect, useState} from 'react'

import Navbar from '../atoms/Navbar'
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

    const [navActive, setNavActive] = useState()
    const sections = [
    
        'misionS3',
        'servicesS4',
        'nosotrosS7',
        'ourWorksS8',
        'testimoniosS8',
        'contactS9'
      ];
    
      const handleScroll = () => {
        sections.forEach(sectionId => {
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight) {
              setNavActive(sectionId)
              // You can perform actions for each section in view here
            }
          }
        });
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <>
            <Navbar navActive={navActive}/>
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
            <section id='testimoniosS8'> 
                <TestimoniosSection/>
            </section>
            <section id='contactS9'> 
                <ContactSection/>
            </section>
            <Footer/>
            <a href='' className='whatsapp z-30 rounded-full p-3 bg-[#22AB40] fixed bottom-[50px] right-[20px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
<path d="M34.1001 5.82012C32.2665 3.96797 30.0825 2.49945 27.6754 1.50022C25.2683 0.500988 22.6863 -0.00896023 20.0801 0.000119139C9.1601 0.000119139 0.260098 8.90012 0.260098 19.8201C0.260098 23.3201 1.1801 26.7201 2.9001 29.7201L0.100098 40.0001L10.6001 37.2401C13.5001 38.8201 16.7601 39.6601 20.0801 39.6601C31.0001 39.6601 39.9001 30.7601 39.9001 19.8401C39.9001 14.5401 37.8401 9.56012 34.1001 5.82012ZM20.0801 36.3001C17.1201 36.3001 14.2201 35.5001 11.6801 34.0001L11.0801 33.6401L4.8401 35.2801L6.5001 29.2001L6.1001 28.5801C4.45559 25.9541 3.58238 22.9186 3.5801 19.8201C3.5801 10.7401 10.9801 3.34012 20.0601 3.34012C24.4601 3.34012 28.6001 5.06012 31.7001 8.18012C33.2351 9.70805 34.4515 11.5254 35.2789 13.527C36.1063 15.5285 36.5282 17.6743 36.5201 19.8401C36.5601 28.9201 29.1601 36.3001 20.0801 36.3001ZM29.1201 23.9801C28.6201 23.7401 26.1801 22.5401 25.7401 22.3601C25.2801 22.2001 24.9601 22.1201 24.6201 22.6001C24.2801 23.1001 23.3401 24.2201 23.0601 24.5401C22.7801 24.8801 22.4801 24.9201 21.9801 24.6601C21.4801 24.4201 19.8801 23.8801 18.0001 22.2001C16.5201 20.8801 15.5401 19.2601 15.2401 18.7601C14.9601 18.2601 15.2001 18.0001 15.4601 17.7401C15.6801 17.5201 15.9601 17.1601 16.2001 16.8801C16.4401 16.6001 16.5401 16.3801 16.7001 16.0601C16.8601 15.7201 16.7801 15.4401 16.6601 15.2001C16.5401 14.9601 15.5401 12.5201 15.1401 11.5201C14.7401 10.5601 14.3201 10.6801 14.0201 10.6601H13.0601C12.7201 10.6601 12.2001 10.7801 11.7401 11.2801C11.3001 11.7801 10.0201 12.9801 10.0201 15.4201C10.0201 17.8601 11.8001 20.2201 12.0401 20.5401C12.2801 20.8801 15.5401 25.8801 20.5001 28.0201C21.6801 28.5401 22.6001 28.8401 23.3201 29.0601C24.5001 29.4401 25.5801 29.3801 26.4401 29.2601C27.4001 29.1201 29.3801 28.0601 29.7801 26.9001C30.2001 25.7401 30.2001 24.7601 30.0601 24.5401C29.9201 24.3201 29.6201 24.2201 29.1201 23.9801Z" fill="white"/>
</svg>
            </a>
        </>
    )
}
