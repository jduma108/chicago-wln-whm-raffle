import React from 'react';
import styles from './businesses.module.css';
import businesses from '../../data/businesses.json';

import ksLogo from '../../assets/logos/kendra-scott-logo.png';
import latavyaLogo from '../../assets/logos/latavya-solutions-llc-logo.jpeg';
import lspLogo from '../../assets/logos/lsp-logo.png';
import pizzaLoboLogo from '../../assets/logos/pizza-lobo-logo.png';
import pmpLogo from '../../assets/logos/pmp-logo.png';
import ponnopozzLogo from '../../assets/logos/ponnopozz-logo.png';
import spaSoakLogo from '../../assets/logos/spa-soak-logo.png';
import squeakyBeasLogo from '../../assets/logos/squeaky-beas-logo.png';
import sukhaSanctuaryLogo from '../../assets/logos/sukha-sanctuary-logo.png';
import theStudioChicagoLogo from '../../assets/logos/the-studio-chicago-logo.png';
import wcfLogo from '../../assets/logos/wcf-logo.png';

import ksOwner from '../../assets/owners/kendra-scott-owner.png';
import latavyaOwner from '../../assets/owners/latavya-solutions-llc-owner.jpeg';
import lspOwner from '../../assets/owners/lsp-owner.png'
import pizzaLoboOwner from '../../assets/owners/pizza-lobo-owner.png';
import ponnopozzOwner from '../../assets/owners/ponnopozz-owner.png'
import pmpOwneer from '../../assets/owners/pmp-owner.png'
import spaSoakOwner from '../../assets/owners/spa-soak-owner.png'
import squeakyBeasOwner from '../../assets/owners/squeaky-beas-owner.png'
import sukhaSanctuaryOwner from '../../assets/owners/sukha-sanctuary-owner.jpeg'
import theStudioChicagoOwner from '../../assets/owners/the-studio-chicago-owner.png'
import wcfOwner from '../../assets/owners/wcf-owners.png'

const Businesses = () => (
    <div className={styles.mainWrapper}>
        <h1>WOMEN/LOCALLY OWNED BUSINESSES</h1>
        <hr/>
        <h2>Below are the businesses who donated to our raffle or businesses WLN purchased raffle prizes from. Click on the name of each business to learn more about what they do!</h2>
        <div className={styles.itemWrapper}>
            {businesses.map((info, index) => (
                <a href={info.website} target="_blank" rel="noreferrer" key={index} className={styles.item}>
                    <div className={styles.itemGroupImg}>
                        <img 
                            src={info.logo}
                            alt={info.altLogo}
                            className={styles.itemImg}
                        />
                        <img 
                            src={info.owner}
                            alt={info.altOwner}
                            className={styles.itemImg}
                        />
                    </div>
                    <div className={styles.itemDescription}>{info.description}</div>
                </a>
            ))}
        </div>
        <h4>Chicago WLN Raffle Committee Members:</h4>
        <h4>Ciera deCourcy, Jillian Duma, Sophie Lancaster, Sabrina Ruiz, Jessie Price, Megan Gilard annd Quinn Sheehan</h4>
        <div className={styles.hiddenImages}>
            <img src={ksLogo} alt="item" className={styles.itemPic}/>
            <img src={latavyaLogo} alt="item" className={styles.itemPic}/>
            <img src={lspLogo} alt="item" className={styles.itemPic}/>
            <img src={pizzaLoboLogo} alt="item" className={styles.itemPic}/>
            <img src={pmpLogo} alt="item" className={styles.itemPic}/>
            <img src={ponnopozzLogo} alt="item" className={styles.itemPic}/>
            <img src={spaSoakLogo} alt="item" className={styles.itemPic}/>
            <img src={squeakyBeasLogo} alt="item" className={styles.itemPic}/>
            <img src={sukhaSanctuaryLogo} alt="item" className={styles.itemPic}/>
            <img src={theStudioChicagoLogo} alt="item" className={styles.itemPic}/>
            <img src={wcfLogo} alt="item" className={styles.itemPic}/>

            <img src={ksOwner} alt="item" className={styles.itemPic}/>
            <img src={latavyaOwner} alt="item" className={styles.itemPic}/>
            <img src={lspOwner} alt="item" className={styles.itemPic}/>
            <img src={pizzaLoboOwner} alt="item" className={styles.itemPic}/>
            <img src={ponnopozzOwner} alt="item" className={styles.itemPic}/>
            <img src={pmpOwneer} alt="item" className={styles.itemPic}/>
            <img src={spaSoakOwner} alt="item" className={styles.itemPic}/>
            <img src={squeakyBeasOwner} alt="item" className={styles.itemPic}/>
            <img src={sukhaSanctuaryOwner} alt="item" className={styles.itemPic}/>
            <img src={theStudioChicagoOwner} alt="item" className={styles.itemPic}/>
            <img src={wcfOwner} alt="item" className={styles.itemPic}/>
        </div>
    </div>
);

export default Businesses;