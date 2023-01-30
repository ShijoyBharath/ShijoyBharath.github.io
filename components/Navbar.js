import React from 'react'
import {BsLightningCharge} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <BsLightningCharge/>
        <span>Shijoy Bharath</span>
      </section>
      <section className={styles.links}>
        <div>About</div>
        <div>Experience</div>
        <div>Projects</div>
        <div>Contact</div>
      </section>
    </div>
  )
}

export default Navbar