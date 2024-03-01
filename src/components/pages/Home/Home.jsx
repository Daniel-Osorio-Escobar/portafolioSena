import React from 'react'
import { Main } from '../../layouts/Main/Main'
import { Logo2 } from '../../Logo/Logo2'
import { DescripcionProfile } from '../../DescripcionProfile/DescripcionProfile'
import { ContainerCard } from '../../ContainerCard/ContainerCard'
import { ContainerReference } from '../../ContainerReference/ContainerReference'
import { ContainerExperience } from '../../ContainerExperience/ContainerExperience'
import { Whatsapp } from '../../Whatsapp/Whatsapp'

export const Home = () => {
  return (
    <>
      
      <Main>
        
        <Logo2  x="profile" title="Perfil"/>
        <DescripcionProfile/>  

        <Logo2 x="project" title="Proyectos"/>
        <ContainerCard />
        
        <Logo2 x="reference" title="Referencias"/>
        <ContainerReference/>

        <Logo2 x="experience" title="Experencias"/>
        <ContainerExperience/>
        <Whatsapp/>
        
      </Main>
    </>
  )
}
