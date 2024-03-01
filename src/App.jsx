import './App.css'

import { Navbar } from './components/Navbar/Navbar'
import { Header } from './components/layouts/Header/Header'
import { PictureProfile } from './components/PictureProfile/PictureProfile'
import { Logo } from './components/Logo/Logo'
import { Redes } from './components/Redes/Redes'
import { Home } from './components/pages/Home/Home'



function App() {
  
  return (

    <>
      <Header>
        <PictureProfile />
        <Navbar></Navbar>
          <Logo />
          <Redes/>
      </Header>
      

      <Home />
      
    </>
  )
}

export default App
