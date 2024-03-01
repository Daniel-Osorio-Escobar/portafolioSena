import React from 'react'
import { Experience } from '../Experience/Experience'
import java from '../../assets/java_logo.png'
import javaScript from '../../assets/javaScript.png'
import php from '../../assets/php.png'
import mongo from '../../assets/mongo.png'

export const ContainerExperience = () => {
  return (
    <>
    <div className='xp'>
      <Experience photo={java} cant={50} text={"medio"}/>
      <Experience photo={javaScript} cant={50} text={"medio"}/>
      <Experience photo={php} cant={50} text={"medio"}/>
      <Experience photo={mongo} cant={50} text={"medio"}/>
    </div>
    </>
  )
}
