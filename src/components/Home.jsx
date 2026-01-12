import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Banner from '../assets/B1.webp';
import { FaSteam, FaPlaystation, FaXbox, FaGooglePlay } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { IoLogoAppleAppstore } from "react-icons/io5";

export default function Home() {
  
  const [open, setOpen] =useState(false);

  return (
    <div className={styles.Hcontainer}>
      <section className={styles.Home}>

        <div className={styles.HeadDev}>
          <img src={Banner} alt="" loading="lazy"/>

          <div className={styles.HomeContxt}>
  
            <h1>REVENGE OF REALMS</h1>
            <p>A king will fight long for empire</p>

            <div className={styles.ButtonContxt}>
              <button>PLAY</button>
              <button onClick={()=>{setOpen(!open)}}>MOBILE</button>
            </div>
             <div className={`${styles.MobileContxt} ${open ? styles.open :''}`}>
                <FaGooglePlay />
                <IoLogoAppleAppstore />
              </div>

            <div className={`${styles.PlayIcons} ${open ? styles.hide : ''}`}>
              <FaSteam />
              <SiEpicgames />
              <FaPlaystation />
              <FaXbox />
            </div>

          </div>
        </div>
      </section>
      <section className={styles.Game}>
        <p>lkl</p>
      </section>
    </div>
  )
}
