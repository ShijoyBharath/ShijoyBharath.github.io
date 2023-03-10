import React from 'react'
import Links from './Links'
import Navbar from './Navbar'
import Scrolldown from './Scrolldown'

const Hero = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <h3>Hey, I'm</h3>
        <h1>Shijoy<br/>Bharath.</h1>
        <h3>I am a software engineering student at Rajiv Gandhi Institute of Technology, Kottayam.</h3>
      </div>
      <Links/>
      <Scrolldown/>
    </div>
  )
}

export default Hero