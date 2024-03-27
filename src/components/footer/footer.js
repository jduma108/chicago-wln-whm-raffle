import React from 'react';
import styles from './footer.module.css';
import wlnLogo from '../../assets/wln-logo-color.png';

const Footer = () => (
    <div className={styles.footerWrapper}>
        <img className={styles.logo} src={wlnLogo} alt="wln-logo"/>
        <p>© Chicago WLN Chapter All Rights Reserved 2023</p>
    </div>
);

export default Footer;