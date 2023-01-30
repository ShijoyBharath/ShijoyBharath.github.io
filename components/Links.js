import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import styles from '@/styles/Links.module.css'

const Links = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
      <BsLinkedin/>
      <BsGithub/>
      <SiGmail/>

      </div>
    </div>
  )
}

export default Links