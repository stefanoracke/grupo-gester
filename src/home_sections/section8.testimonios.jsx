import React, { useEffect, useState } from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide';

import TestimoniosCards from '../atoms/TestimoniosCards'
import img1 from '/src/assets/luciano.png'
import img2 from '/src/assets/virginia.png'
import img3 from '/src/assets/federico.png'


export default function TestimoniosSection() {

  const [isMobile, setIsMobile] = useState(false)

  const testimonios = [
    {
      name: 'Luciano Dutto',
      title: 'Socio de Estudio Dutto & Asocs.',
      text: '“Me complace compartir mi experiencia positiva con la empresa Grupo Gester. Durante mi interacción con la empresa, he observado un excelente desempeño y un cumplimiento constante de las tareas encomendadas en tiempo y forma. Alexis Maffini se destaca por su enfoque meticuloso hacia los detalles y su disponibilidad constante para atender cualquier inquietud o consulta. Su compromiso con la calidad y el servicio al cliente es ejemplar. Recomiendo encarecidamente Grupo Gester a aquellos que buscan profesionalismo y eficiencia en sus proyectos.”',
      img: img1
    },
    {
      name: 'Virginia Ávila',
      title: 'Escisión Societaria Familia Ávila',
      text: '“Como familia, hemos recibido una asesoría contable y administrativa excepcional, así como recomendaciones basadas en una profunda empatía por parte de su equipo. Estos aspectos han sido fundamentales para el crecimiento de nuestro grupo económico. Grupo Gester y especialmente Alexis, ha demostrado una profunda comprensión de nuestras necesidades y objetivos, brindándonos soluciones a medida que han impulsado nuestro progreso. Su conocimiento y experiencia en el campo nos han permitido tomar decisiones informadas y estratégicas, demostrando empatía, transparencia y compromiso al comprender nuestras circunstancias únicas. Nos han brindado recomendaciones personalizadas que van más allá de lo puramente financiero y nos han apoyado en nuestro crecimiento como familia. Recomendamos una y mil veces al Grupo Gester, quienes han sido un socio confiable en nuestro viaje empresarial.”',
      img: img2
    },
    {
      name: 'Federico Arce',
      title: 'Socio de ABYA Abogados',
      text: '“Alexis es un ejemplo de honestidad y profesionalismo, aptitudes que pone al servicio de sus clientes. Lo conocí personalmente en una circunstancia muy difícil, cuando afrontó la tarea de poner en marcha un emprendimiento inmobiliario que estaba totalmente paralizado. Con mucho esfuerzo, y liderando un equipo de personas capaces, logró el objetivo de concluirlo exitosamente, aun en un contexto económico muy adverso, agravado por las consecuencias de la pandemia.”',
      img: img3
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center pb-10 sm:pb-[200px]">
      <h3 className="text-4xl text-secondary">
        Testimonios
      </h3>
      <p className='pt-2 max-w-[700px] text-center text-[20px]'>
        Trabajamos desde la
        <strong> transparencia</strong> y el <strong> profesionalismo</strong>, logrando resultados que respaldan nuestra trayectoria. Conocé el testimonio en primer persona de los clientes que nos eligieron.
      </p>
    {
      isMobile ?
      <div className='pt-7'>
        <Splide
        options={{
            gap: '3rem',
            perPage: 1,
            focus: 0,
            arrows:false,
            
            autoplay: true,
            pauseOnHover: false,
            pauseOnFocus: true,
            type: 'loop',
        }}
        aria-label="Others"
    >
        {
            testimonios.map((testimonio, index) => (

                <SplideSlide key={'testi' + index}>
                    <div className="flex justify-center">

                    <TestimoniosCards testimonio={testimonio}/>
                    </div>
                </SplideSlide>
            ))
        }


    </Splide>

      </div>
      :
      
      <div className="grid grid-cols-3 justify-center gap-3 pt-7">
        {
          testimonios.map((testimonio, index)=>(
            <div className="col-span-3 md:col-span-1" key={index+'test'}>
              <TestimoniosCards testimonio={testimonio}/>
            </div>
          ))
        }
      </div>
    }

    </div>
  )
}
