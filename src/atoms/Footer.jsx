import React from 'react'

export default function Footer() {
  return (
    <footer className='flex bg-primary relative z-10 w-full justify-center pt-[110px] pb-[40px] border-2 border-t-secondary border-primary'>
      <svg className='absolute right-0 top-0' xmlns="http://www.w3.org/2000/svg" width="909" height="584" viewBox="0 0 909 584" fill="none">
  <path opacity="0.2" d="M1185.89 65.1315C1195.77 -23.8444 1196.91 -123.8 1185.51 -236.629L170.008 -236.629C86.0161 607.696 677.758 757.251 677.758 757.251C677.758 757.251 990.161 678.498 1128.88 311.235L988.64 312.371C888.307 566.426 677.758 598.987 677.758 598.987C677.758 598.987 283.263 519.477 309.107 -86.6955L1046.41 -86.6955C1049.45 -20.0582 1046.03 34.0846 1043.75 65.5102L472.529 65.5102C460.368 395.289 677.758 456.247 677.758 456.247C677.758 456.247 772.771 427.472 831.299 313.507L677.378 314.643V170.388L1317.39 170.388C1174.49 787.919 677.378 914 677.378 914C678.138 913.243 -99.8295 716.36 10.7658 -393L1345.13 -393C1362.61 -218.834 1358.05 -66.6286 1338.29 65.1315H1185.89Z" fill="url(#paint0_linear_570_3523)"/>
  <defs>
    <linearGradient id="paint0_linear_570_3523" x1="678" y1="-393" x2="678" y2="914" gradientUnits="userSpaceOnUse">
      <stop stop-color="white" stop-opacity="0.4"/>
      <stop offset="1" stop-color="white" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
</svg>
      <div className="max-w-[1100px] flex flex-col justify-center items-center">
        <p className="font-light text-center">Somos <strong>Gester</strong>, somos un Grupo humano, profesional y sobre todo <strong>proactivo</strong>.</p>
        <h3 className="text-center tracking-wide pt-2">
          Transformamos las adversidades, en fuerza motora de superación.
          Somos resilientes, porque elegimos a diario ser creadores de nuestro propio destino. Asumimos el desafío de un mundo más justo.
        </h3>
        <p className="text-[15px] tracking-wide pt-[50px] max-w-[600px] text-center font-light">
        Gestión de Salvatajes en Desarrollos Inmobiliarios, Divisiones Societarias y Desarrollos Financieros e Inmobiliarios.
        </p>
        <hr className="text-secondary w-[70%] mt-[40px]" />
        <small className='text-center text-xs py-5'>2023 Grupo Gester by <a target='_blank' href="https://chimpance.digital/">Chimpancé Digital</a> • Todos los derechos reservados</small>
      </div>
    </footer>
  )
}
