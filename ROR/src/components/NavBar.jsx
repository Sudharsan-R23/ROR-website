import React from 'react'
import styles from '../styles/NavBar.module.css'
import Logo from '../assets/ubisoft.png'
import { FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'


export default function NavBar() {
  return (
    <nav className={styles.NavContainer}>
      <div className={styles.LogoContainer}>
        <img src={Logo} alt="" />
      </div>

      <dir className={styles.NavContxt}>
         <h1></h1>
         <h1>HOME</h1>
         <h1>HOME</h1>
         <h1>HOME</h1>
         <details className={styles.FollowDetails}>
          <summary>FOLLOW</summary>

          <div className={styles.FollowPanel}>
            <FaInstagram />
            <FaXTwitter />
            <FaYoutube />
          </div>
        </details>
      </dir>
    </nav>
  )
}
