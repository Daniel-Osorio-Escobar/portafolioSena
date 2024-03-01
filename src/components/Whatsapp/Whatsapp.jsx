import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export const Whatsapp = () => {
  return (
    <div className='whatsapp-container'>
        <a className='whatsapp-button' href="https://api.whatsapp.com/send?phone=573244715475" target='blank'> <FaWhatsapp/ ></a>
    </div>
  )
}
