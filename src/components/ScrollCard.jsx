import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/ScrollCard.module.css';
import Bvedio from '../assets/BackVideo.mp4';
import W1 from '../assets/Wepan/w1.webp';
import W2 from '../assets/Wepan/w2.webp';
import W3 from '../assets/Wepan/w3.webp';

export default function ScrollCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const weapons = [
    {
      name: "Dragon Blade",
      description: "A legendary sword forged in the heart of ancient mountains, wielded by masters of the wind.",
      image: W1,
      navLabel: "WEAPON I"
    },
    {
      name: "Phoenix Spear",
      description: "Born from the flames of rebirth, this spear channels the eternal power of the phoenix.",
      image: W2,
      navLabel: "WEAPON II"
    },
    {
      name: "Tiger Fang",
      description: "Swift and deadly as its namesake, this blade strikes with the ferocity of the wild.",
      image: W3,
      navLabel: "WEAPON III"
    },
    {
      name: "Tiger Fang",
      description: "Swift and deadly as its namesake, this blade strikes with the ferocity of the wild.",
      image: W3,
      navLabel: "WEAPON III"
    }
  ];

  const handleNavClick = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const cardWidth = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollRef.current.scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    };

    const el = scrollRef.current;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.SideScreentxt}>
      <video autoPlay muted loop playsInline preload="none" className={styles.bgVideo}>
        <source src={Bvedio} type="video/mp4" />
      </video>

      <section className={styles.SideScrollSection} ref={scrollRef}>
        {weapons.map((weapon, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardText}>
              <h1>{weapon.name}</h1>
              <p>{weapon.description}</p>
            </div>
            <img className={styles.cardImg} src={weapon.image} alt={weapon.name} loading='lazy'/>
          </div>
        ))}
      </section>

      <nav className={styles.CineNav}>
        <div className={styles.NavLine}></div>
        {weapons.map((weapon, index) => (
          <button
            key={index}
            className={`${styles.NavItem} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => handleNavClick(index)}
          >
            <p>{weapon.navLabel}</p>
          </button>
        ))}
      </nav>
    </section>
  );
}
