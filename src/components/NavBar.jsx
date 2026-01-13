import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';
import Logo from '../assets/ubisoft.webp';
import { FaInstagram, FaXTwitter} from 'react-icons/fa6'
import { SlSocialLinkedin } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";


export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [followOpen, setFollowOpen] = useState(false)

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const closeAll = () => {
    setMobileOpen(false)
    setFollowOpen(false)
  }

  return (
    <>
  <header className={`${styles.Header} ${mobileOpen ? styles.showH : ''}`}>
      <nav className={styles.NavBar}>
        <img src={Logo} className={styles.Logo} alt="logo" />

        <div className={styles.Menu}>
          <Link className={styles.Item} to="/" onClick={closeAll}>CHARACTER</Link>
          <Link className={styles.Item} to="/event" onClick={closeAll}>EVENT</Link>
          <Link className={styles.Item} to="/dev" onClick={closeAll}>DEVELOPMENT</Link>
          <Link className={styles.Item} to="/redeem" onClick={closeAll}>REDEEM</Link>

          <div className={styles.Follow}>
            <button
              className={styles.FollowBtn}
              onClick={() => setFollowOpen(v => !v)}
            >
              FOLLOW US
            </button>

            <div className={`${styles.FollowBox} ${followOpen ? styles.show : ''}`}>
              <FaInstagram onClick={() => openLink('https://instagram.com')} />
              <FaXTwitter onClick={() => openLink('https://twitter.com')} />
              <FiYoutube onClick={() => openLink('https://youtube.com')} />
              <SlSocialLinkedin onClick={() => openLink('https://youtube.com')} />
            </div>
          </div>
        </div>

        <button
          className={`${styles.Toggle} ${mobileOpen ? styles.active : ''}`}
          onClick={() => {
            setMobileOpen(v => !v)
            setFollowOpen(false)
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`${styles.MobileMenu} ${mobileOpen ? styles.open : ''}`}>
        <Link className={styles.MobileItem} to="/" onClick={closeAll}>CHARACTER</Link>
        <Link className={styles.MobileItem} to="/event" onClick={closeAll}>EVENT</Link>
        <Link className={styles.MobileItem} to="/dev" onClick={closeAll}>DEVELOPMENT</Link>
        <Link className={styles.MobileItem} to="/redeem" onClick={closeAll}>REDEEM</Link>

        <div className={styles.MobileSocial}>
          <FaInstagram onClick={() => openLink('https://instagram.com')} />
          <FaXTwitter onClick={() => openLink('https://twitter.com')} />
          <FiYoutube onClick={() => openLink('https://youtube.com')} />
          <SlSocialLinkedin onClick={() => openLink('https://youtube.com')} />
        </div>
      </div>
    </header>
    </>
  )
}
