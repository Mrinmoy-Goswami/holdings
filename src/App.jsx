import { useEffect, useState } from 'react'
import './App.css'
import HoldingsPage from './Pages/HoldingPage/HoldingsPage'
import Nopage from './Pages/Homepage/Nopage'

function App() {
  const [isMobile,setIsMobile] = useState( window.innerWidth < 768)
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', updateIsMobile);

    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  return (
    <>
    {
      isMobile ? <Nopage/>
     : 
      <HoldingsPage/>
    }
    </>
  )
}

export default App
