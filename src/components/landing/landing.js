import React from 'react';
import styles from './landing.module.css';
import wlnLogo from '../../assets/wln-logo-color.png';
import Fade from 'react-reveal/Fade';

const Landing = () => (
    <Fade left cascade>
        <div className={styles.landingWrapper}>
            <img className={styles.logo} src={wlnLogo} alt="wln-logo"/>
            <h2>2023 Women's History Month</h2>
            <h1>VIRTUAL RAFFLE</h1>
        </div>
    </Fade>
);

export default Landing;