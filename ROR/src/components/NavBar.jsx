import React from 'react';
import styles from '../styles/NavBar.module.css';
import Logo from '../assets/ubisoft.png';
import { FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function NavBar() {
  
  const MediaNav = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const [active, setActive] = useState(false);
  

  return (
    <>
    <nav className={styles.NavContainer}>
      <div className={styles.LogoContainer}>
        <img src={Logo} alt="" />
      </div>

      <div className={styles.NavContxt}>
        <h1>CHARACTER</h1>
        <h1>EVENT</h1>
        <h1>DEVELOPMENT</h1>
        <h1>REDEEM</h1>
        <details className={styles.FollowDetails}>
          <summary>FOLLOW US</summary>
          <div className={styles.FollowPanel}>
            <FaInstagram onClick={()=>{MediaNav('https://www.youtube.com/watch?v=EzKkl64rRbM&list=RD-3P2USPFDcE&index=6')}}/>
            <FaXTwitter onClick={()=>{MediaNav('https://www.youtube.com/watch?v=EzKkl64rRbM&list=RD-3P2USPFDcE&index=6')}}/>
            <FaYoutube onClick={()=>{MediaNav('https://www.youtube.com/watch?v=EzKkl64rRbM&list=RD-3P2USPFDcE&index=6')}}/>
          </div>
        </details>
      </div>
       <div className={styles.icons}>
          <svg
            viewBox="0 0 36 22"
            className={`${styles.svg} ${active ? styles.active : ''}`}
            onClick={() => setActive(prev => !prev)}
          >
            <g transform="matrix(1,0,0,1,-419.5,-274.131)">
              <g className={styles.arrow_rocket}>
                <path
                  className={styles.top}
                  d="M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631"
                />
                <g transform="matrix(1,-1.22465e-16,-1.22465e-16,-1,0,569.277)">
                  <path
                    className={styles.bottom}
                    d="M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631"
                  />
                </g>
                <g transform="matrix(1,0,0,1,0,-0.0234189)">
                  <path
                    className={styles.middle}
                    d="M420,284.646L450,284.646"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
    </nav>
    <nav className={`${styles.sideNav} ${active ? styles.active : ""}`}>
      <div className={styles.sideContxt}>
        <h1>CHARACTER</h1>
        <h1>EVENT</h1>
        <h1>DEVELOPMENT</h1>
        <h1>REDEEM</h1>
         <div className={styles.Smedia}>
            <FaInstagram onClick={()=>{MediaNav('https://www.youtube.com/watch?v=EzKkl64rRbM&list=RD-3P2USPFDcE&index=6')}}/>
            <FaXTwitter onClick={()=>{MediaNav('https://www.youtube.com/watch?v=EzKkl64rRbM&list=RD-3P2USPFDcE&index=6')}}/>
            <FaYoutube onClick={()=>{MediaNav('https://www.youtube.com/watch?v=EzKkl64rRbM&list=RD-3P2USPFDcE&index=6')}}/>
        </div>
      </div>
      </nav>
    </>
  )
}
