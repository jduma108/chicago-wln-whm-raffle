import React from 'react';
import browseIcon from '../../assets/browse.png';
import raffleIcon from '../../assets/raffle.png';
import learnIcon from '../../assets/learn.png';
import styles from './how-it-works.module.css';

const HowItWorks = () => (
    <div className={styles.howItWorksWrapper}>
        <h1>HOW IT WORKS</h1>
        <hr className={styles.titleHr}/>
        <div className={styles.iconWrapper}>
            <div className={styles.browseWrapper}>
                <img src={browseIcon} alt="register" className={styles.icon}/>
                <h3>BROWSE ITEMS</h3>
                <p>Check out the awesome raffle items listed below!</p>
            </div>
            <div className={styles.raffleWrapper}>
                <img src={raffleIcon} alt="browse" className={styles.icon}/>
                <h3>PURCHASE RAFFLE TICKETS</h3>
                <p>You are able to purchase as many raffle "tickets" as you want. Click below to buy raffle tickets!</p>
            </div>
            <div className={styles.learnWrapper}>
                <img src={learnIcon} alt="learn" className={styles.icon}/>
                <h3>LEARN MORE</h3>
                <p>Learn more about the local businesses that donated raffle items and Girls Inc of Chicago.</p>
            </div>
        </div>
        <a href="https://form.jotform.com/240744412784155" rel="noreferrer" target="_blank">
            <button className={styles.button}>CLICK HERE TO BUY TICKETS</button>
        </a>
        <hr className={styles.fullWidthHr}/>
        <div className={styles.moreInfoWrapper}>
            <h2>RAFFLE RULES</h2>
            <ul>
                <li>When filling out the raffle form, you will need to provide your full name, work email, and number of tickets you will purchase for each item.</li>
                <li>1 ticket is $3. You may purchase as many tickets as you want and distribute them how you want. For example, 10 tickets is $30. You can contribute 5 tickets to one item and 5 tickets to another item.</li>
                <li>After filling out the raffle form, please Venmo Sophie Lancaster <span className={styles.bold}>@Sophie-Lancaster</span> and include the following message: <span className={styles.bold}>Chicago WLN Raffle Event 2024 - [insert your name].</span></li>
                <li>Please make sure the name you enter in the raffle form matches the name you send in your Venmo message.</li>
                <li>When the event closes, the Chicago WLN Raffle Committee Members will randomly pick the winner for each raffle item.</li>
                <li>Winners will be contacted by email about where to send the raffle item.</li>
            </ul>
        </div>
        <h2 className={styles.raffleDates}>RAFFLE EVENT OPEN FROM MARCH 25 - APRIL 2</h2>
    </div>
);

export default HowItWorks;