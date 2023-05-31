import { Input } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './stylo.css';

function Ejemplo() {
    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if(window.scrollY > 100) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

  return (
    <div className={`nav ${show && 'navDesk'}`}>Ejemplo</div>
  )
}

export default Ejemplo