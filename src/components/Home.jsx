import styles from '../styles/Home.module.css';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../assets/B1.webp';
import Banner2 from '../assets/B2.webp';
import jc from '../assets/jc.webp';
import jc2 from '../assets/godL.webp'
import gb2 from '../assets/Game2Banner.webp';
import { FaSteam, FaPlaystation, FaXbox, FaGooglePlay } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { IoLogoAppleAppstore } from "react-icons/io5";
import Footer from './Footer';
import ScrollCard from './ScrollCard';
import NavBar from './NavBar';
import BV from '../assets/videos/BV3.mp4';


export default function Home() {

  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);

return (
  <>
    <NavBar/>
    <div className={styles.Hcontainer}>

      <section className={styles.Home}>

        <div className={styles.HeadDev}>
          <video autoPlay muted loop playsInline preload="none" className={styles.HeadVedio}>
                  <source src={BV} type="video/mp4" />
                </video>

          <div className={styles.HomeContxt}>

            <h1>REVENGE OF REALMS</h1>
            <p>Latin Christian kingdoms of Europe.</p>

            <div className={styles.ButtonContxt}>
              <button>PLAY</button>
              <button onClick={() => { setOpen(!open) }}>MOBILE</button>
            </div>
            <div className={`${styles.MobileContxt} ${open ? styles.open : ''}`}>
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
        <img className={styles.GameBanner} src={Banner2} alt="" />
        <div className={styles.GameContxt}>
          <img className={styles.GameImg} src={jc} alt="" />
          <div className={styles.GameItem}>
            <h1>Throne Demands Blood</h1>
            <p>Once crowned ruler of Valemarch, King Aldric lost his kingdom to invasion, betrayal, and war. His castle fell, his banner was torn down, and his people were scattered across foreign lands.</p>
            <p>Driven by faith and duty rather than pride, Aldric now walks the path of exile—gathering allies, rebuilding his army, and questioning the meaning of kingship. His journey is not only to reclaim a throne, but to decide what kind of king he will become when power is finally restored.</p>
          </div>
        </div>
      </section>
      <section className={styles.Game2}>
        <img className={styles.GameBanner} src={gb2} alt="" loading='lazy'/>
        <div className={`${styles.GameContxt} ${styles.Game2Contxt}`}>
          <div className={styles.GameItem}>
            <h1>Desert Forged Power</h1>
            <p>The Sultanate of Al-Zahra is a powerful Muslim empire built on discipline, unity, and strategic mastery. Rising from the deserts and great cities of the east, the empire expanded through strength and belief in order.</p>
            <p>To them, conquered lands are not stolen—they are secured for stability and survival. As King Aldric seeks to reclaim his lost kingdom, Al-Zahra stands as both his greatest enemy and a reminder that every empire believes its cause is just.</p>
          </div>
          <img className={styles.GameImg} src={jc2} alt="" />
        </div>
      </section>
      <section className={styles.SideScreentxt}>
        
        <ScrollCard/>
      </section>
      <section className={styles.FooterSec}>
        <Footer />
      </section>

    </div>
  </>
  )
}
