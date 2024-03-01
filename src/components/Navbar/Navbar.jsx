import React from 'react'
import { ItemNav } from '../ItemNav/ItemNav'


export const Navbar = () => {
  return (
    <>
    <h2 class="name">Daniel Osorio Escobar</h2>
    
    <nav>
      
      <ul>
        <ItemNav content = 'Inicio' route={'/'}/>
        <ItemNav content = 'Perfil' route={'#profile'}/>
        <ItemNav content = 'Proyectos' route={'#project'} />
        <ItemNav content = 'Referencias' route={'#reference'} />
        <ItemNav content = 'Experiencias' route='#experience' />
      </ul>
    </nav>
    </>
  )
}
