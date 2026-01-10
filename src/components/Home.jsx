import styles from '../styles/Home.module.css';
import Banner from '../assets/Banner.webp'

export default function Home() {
  return (
    <div className={styles.Hcontainer}>
      <section className={styles.Home}>
        <img src={Banner} alt="" />
      </section>
      <section className={styles.Game}>
        <h1>jhhh</h1>
      </section>
    </div>
  )
}
