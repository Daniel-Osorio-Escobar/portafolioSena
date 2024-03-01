import React from 'react'
import sena from '../../assets/sena-1.jpg'

export const Logo2 = ({title,x}) => {
  return (
    <>
    <div class="topProfile">
    <img class="logo2" src={sena} alt="Logo"/>
    <h3 id={x} >{title}</h3>
    </div>
    </>
  )
}

