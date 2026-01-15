import styles from '../styles/Home.module.css';
import { useState, useRef, useEffect } from 'react';
import Banner from '../assets/B1.webp';
import Banner2 from '../assets/B2.webp';
import jc from '../assets/jc.webp';
import jc2 from '../assets/godL.webp'
import gb2 from '../assets/Game2Banner.webp'
import { FaSteam, FaPlaystation, FaXbox, FaGooglePlay } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { IoLogoAppleAppstore } from "react-icons/io5";

export default function Home() {

  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);



  return (
    <div className={styles.Hcontainer}>

      <section className={styles.Home}>

        <div className={styles.HeadDev}>
          <img src={Banner} alt="" loading="lazy" />

          <div className={styles.HomeContxt}>

            <h1>REVENGE OF REALMS</h1>
            <p>A king will fight long for empire</p>

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
            <h1>Lorem ipsum doxercitationem.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt deleniti est quisquam velit commodi, natus soluta id sit, odio dignissimos qui adipisci suscipit! Voluptate cumque quas, quasi nemo ad ipsam magni optio officiis aperiam cupiditate quibusdam voluptatem ratione consequuntur hic nulla, quaerat error totam nesciunt, id harum numquam omnis expedita.</p>
            <p>rferendis numquam unde in distinctio iste ducimus doloribus, dignissimos dolorum natus modi aut nam aliquid. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, labore illum saepe culpa officia facilis et deserunt nostrum, id voluptatibus, nihil itaque blanditiis. Et suscipit placeat error deleniti aspernatur ut.</p>
          </div>
        </div>
      </section>
      <section className={styles.Game2}>
        <img className={styles.GameBanner} src={gb2} alt="" />
        <div className={`${styles.GameContxt} ${styles.Game2Contxt}`}>
          <div className={styles.GameItem}>
            <h1>Lorem ipsum doxercitationem.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt deleniti est quisquam velit commodi, natus soluta id sit, odio dignissimos qui adipisci suscipit! Voluptate cumque quas, quasi nemo ad ipsam magni optio officiis aperiam cupiditate quibusdam voluptatem ratione consequuntur hic nulla, quaerat error totam nesciunt, id harum numquam omnis expedita.</p>
            <p>rferendis numquam unde in distinctio iste ducimus doloribus, dignissimos dolorum natus modi aut nam aliquid. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, labore illum saepe culpa officia facilis et deserunt nostrum, id voluptatibus, nihil itaque blanditiis. Et suscipit placeat error deleniti aspernatur ut.</p>
          </div>
          <img className={styles.GameImg} src={jc2} alt="" />
        </div>
      </section>
    </div>
  )
}
