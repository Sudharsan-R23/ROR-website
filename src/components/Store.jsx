import React from 'react'
import styles from '../styles/Store.module.css';
import cup1 from '../assets/store/cup1.webp'



export default function () {
    return (
        <div className={styles.card}>
            <img src={cup1} alt="" />
            <div className={styles.cardItems}>
                <h1>hjh</h1>
                <p>jjhkjhiujhui</p>

                <label htmlFor=""></label>
                <button>Buy</button>

            </div>
        </div>
    )
}
