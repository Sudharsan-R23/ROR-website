import React from 'react';
import styles from '../styles/Redeem.module.css';
import NavBar from '../components/NavBar';
import Store from '../components/Store'
import Footer from './Footer';

export default function Redeem() {
    return (
        <section className={styles.redeemBody}>
            <NavBar />
            <section>
                <div className={styles.Redeemtxt}>
                    <div className={styles.GiftBox}>
                        <form action="" method="get">
                            <label htmlFor="">GIFT CODE</label>
                            <div className={styles.Gifaction}>
                                <input type="text" placeholder='XXX-XXX-000' />
                                <button>GET</button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
            <Store />
            <Footer/>
            </section >
            )
}
