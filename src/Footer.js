import React from 'react'
import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className='footer'>
        <p>copyright © {year}</p>
    </div>
  )
}
