import React from 'react'
import { Project } from '../Project/Project'

import proyecto1 from '../../assets/proyecto1.png'
import proyecto2 from '../../assets/proyecto2.png'
import proyecto3 from '../../assets/proyecto3.png'
import proyecto4 from '../../assets/proyecto4.png'

export const ContainerCard = () => {
  return (
    <>
    <div className='containerCard'>
        <Project photo={proyecto1} title="Bleux" desc={"Este proyecto fue uno de mis primeras paginas responsive"} link={"https://bleux-daniel.netlify.app"} />
        <Project photo={proyecto2} title="Graphel" desc={"Este proyecto fue cuando estaba aprendiendo display flex"} link={"https://daniel9974532.github.io/Graphel/"}/>
        <Project photo={proyecto3} title="Tecno plus" desc={"Este proyecto es sobre una tienda de telefonos y auricurales el cual cuenta con su carrito de compras"} link={"https://incomparable-lamington-ed5449.netlify.app"}/>
        <Project photo={proyecto4} title="Apptastico" desc={"Este proyecto fue uno de mis primeras paginas responsive"} link={"https://daniel9974532.github.io/taller-falla/"} />
    </div>
    </>
  )
}
