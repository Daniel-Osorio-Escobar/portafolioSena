import React from 'react'


import {FaInstagram ,FaLinkedin, FaWhatsapp,FaFacebook,FaGithub } from 'react-icons/fa'


export const Redes = () => {
  return (
    <div class="redes">

            <a className='icons' href="https://www.linkedin.com/in/daniel-osorio-escobar-4440072b8/" target='blank'><FaLinkedin /></a>
            <a className='icons' href="https://www.instagram.com/dani_escobar0?igsh=MWNiY3VsanZnanBuZA==" target='blank'><FaInstagram /></a>
            <a className='icons' href="https://www.facebook.com/profile.php?id=100004251916935&mibextid=ZbWKwL" target='blank'><FaFacebook /></a>
            <a className='icons' href="https://api.whatsapp.com/send?phone=573244715475" target='blank'><FaWhatsapp /></a>           
            <a className='icons' href="https://github.com/Daniel9974532" target='blank'><FaGithub />  </a>
    </div>
  )
}
