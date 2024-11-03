import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComponent from './components/NavbarComponent';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavbarComponent />
      <h1>Bienvenido a la Shop de Phoenix Contact</h1>
    </div>
  );
}

export default App
