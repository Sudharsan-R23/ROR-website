import { React } from 'react';
import Logo from '../assets/ubisoftBlack.png';
import Unreal from '../assets/Unreal.png';
import styles from '../styles/Footer.module.css';
import FooterBanner from '../assets/FooterB.jpg';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";

export default function Footer() {

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (

    <div className={styles.Footertxt}>
      <img src={FooterBanner} alt="" />
      <div className={styles.FooterSec1}>
        <div className={styles.FooterLogo}>
          <img src={Logo} alt="" />
          <img src={Unreal} alt="" />
        </div>
        <div className={styles.Icons}>
          <h1>JOINT NOW |</h1>
          <FaInstagram onClick={() => openLink('https://instagram.com')} />
          <FaXTwitter onClick={() => openLink('https://twitter.com')} />
          <FiYoutube onClick={() => openLink('https://youtube.com')} />
          <AiOutlineLinkedin onClick={() => openLink('https://youtube.com')} />
        </div>
        
      </div>

    </div>
  )
}
