import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Additional_information from '../components/Additional-information/Additional_information'
import How_work from '../components/How_work/How_work'
import Section_info from '../components/Section_info/Section_info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Additional_information />
     <How_work />
     <Section_info />
     <Footer />
    </>
  )
}

export default App
