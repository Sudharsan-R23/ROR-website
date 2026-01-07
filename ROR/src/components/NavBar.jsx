import React from 'react'
import styles from '../styles/NavBar.module.css'
import Logo from '../assets/ubisoft.png'

export default function NavBar() {
  return (
    <nav className={styles.NavContainer}>
      <div className={styles.LogoContainer}>
        <img src={Logo} alt="" />
      </div>

      <dir className={styles.NavContxt}>
         
      </dir>
    </nav>
  )
}
