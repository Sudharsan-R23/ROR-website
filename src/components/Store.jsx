import React from 'react';
import styles from '../styles/Store.module.css';


export default function (props) {
    return (
        <div className={styles.card}>
            <img src={props.Image}  loading="lazy" alt="" />
            <div className={styles.cardItems}>
                <h1>{props.Title}</h1>
                <p>{props.price}</p>

                <label htmlFor=""></label>
                <button>Buy</button>

            </div>
        </div>
    )
}
