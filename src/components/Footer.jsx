import { React } from 'react';
import Logo from '../assets/ubisoft.webp';
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
        <div className={styles.Icons}>
          <h1>JOINT NOW |</h1>
          <FaInstagram onClick={() => openLink('https://instagram.com')} />
          <FaXTwitter onClick={() => openLink('https://twitter.com')} />
          <FiYoutube onClick={() => openLink('https://youtube.com')} />
          <AiOutlineLinkedin onClick={() => openLink('https://youtube.com')} />
        </div>
        <div className={styles.FooterLogo}>
          <img src={Logo} alt="" />
          <img src={Logo} alt="" />
        </div>
        <div className={styles.FooterPara}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab voluptatibus iste facilis vitae illo perferendis impedit sit ipsam enim excepturi! Totam doloribus, cupiditate amet id eum veritatis porro, placeat eligendi architecto omnis nisi atque dolor ipsa ipsum minus ipsam iste praesentium, blanditiis voluptatem dolorem facere laborum obcaecati animi! Ratione delectus eveniet cupiditate quas necessitatibus quidem repellendus distinctio repellat at, facere suscipit, eaque aliquid neque, voluptate harum a explicabo ipsum error quis quae ex magnam. Rerum molestias illo impedit facilis veritatis quaerat magni nulla non libero, vero.</p>
        </div>
      </div>

    </div>
  )
}
