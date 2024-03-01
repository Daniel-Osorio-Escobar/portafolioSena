import React from 'react'


export const Project = ({photo,title,desc,link}) => {
  return (
    <>
    
    <div class="card">

         <div class="photo">
         <img src={photo} alt="" />
         </div>

        <div class="infoCard">
         <h4>{title}</h4>
         <p>{desc}</p>
         <a target='blank' href={link}>Ir al proyecto</a>
         </div>

      </div>
       
    

    </>
  )
}
