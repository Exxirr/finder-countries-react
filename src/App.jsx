import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { CountryComponent } from './components/CountryComponent'

function App() {

  return (
    <div className="row g-4 justify-content-center">
      <CountryComponent />
    </div>
  )
}

export default App
