import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
        <Image src={require('../public/assets/home/shape-bg.png').default} alt="no internet connection" />
      </div>
    </div>
  )
}
