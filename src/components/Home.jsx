import styles from '../styles/Home.module.css';
import Banner from '../assets/B1.png'
import { FaSteam, FaPlaystation, FaXbox } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";

export default function Home() {
  return (
    <div className={styles.Hcontainer}>
      <section className={styles.Home}>

        <div className={styles.HeadDev}>
          <img src={Banner} alt="" />

          <div className={styles.HomeContxt}>
            <h1>REVENGE OF REALMS</h1>
            <p>Let's play differently in the game!</p>

            <div className={styles.ButtonContxt}>
              <button>click</button>
              <button>click</button>
            </div>

            <div className={styles.PlayIcons}>
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
