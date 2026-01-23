import React from 'react';
import styles from '../styles/Redeem.module.css';
import NavBar from '../components/NavBar';
import TopUpData from './TopUpData';
import Footer from './Footer';

export default function Redeem() {
  return (
    <main className={styles.redeemBody}>
      <NavBar />


      <section className={styles.redeemHero}>
        <div className={styles.GiftBox}>
          <form>
            <label>GIFT CODE</label>
            <div className={styles.Gifaction}>
              <input type="text" placeholder="XXX-XXX-000" />
              <button type="submit">GET</button>
            </div>
          </form>
        </div>
      </section>

    
      <section className={styles.topUpSection}>
        <h1 className={styles.topUpTitle}>TOP UP</h1>
        <div className={styles.StoreTxt}>
          <TopUpData />
        </div>
      </section>

      <Footer />
    </main>
  );
}
