import React from 'react'


export const Experience = ({photo,cant,text}) => {
  return (
    <>
    
        
        <div class="lenguajes">
            
            <img src={photo} alt="" />

            <progress value={cant} max="100"></progress>
            <p>{text}</p>

        </div>
    
    </>
  )
}
