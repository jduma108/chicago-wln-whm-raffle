import React from 'react';
import styles from './businesses.module.css';
import businessInfo from '../../data/businessInfo.json';
import barRoma from '../../assets/logos/bar-roma-logo.png';
import cfp from '../../assets/logos/chicago-french-press-logo.png';
import gatg from '../../assets/logos/gatg-logo.png';
import ivs from '../../assets/logos/indigo-violet-studio-logo.png';
import ugs from '../../assets/logos/urban-general-store-logo.png';
import wcf from '../../assets/logos/women-children-first-logo.png';
import fourteenParish from '../../assets/logos/14-parish-logo.png'
import cbinm from '../../assets/logos/cant-believe-its-not-meat-logo.png'
import cpy from '../../assets/logos/core-power-yoga-logo.png'
import humboldtHouse from '../../assets/logos/humboldt-house-logo.png'
import iic from '../../assets/logos/inspired-indian-cooking-logo.png'
import kendraScott from '../../assets/logos/kendra-scott-logo.png'
import lsp from '../../assets/logos/logan-square-pilates-logo.png'
import momNpop from '../../assets/logos/mom-n-pop-hospitality-logo.png'
import pizzaLobo from '../../assets/logos/pizza-lobo-logo.png'
import ponnopozz from '../../assets/logos/ponnopozz-logo.png'
import semillas from '../../assets/logos/semillas-plant-studio-logo.png'
import tsc from '../../assets/logos/the-studio-chicago-logo.png'
import saucy from '../../assets/logos/saucy-porka-logo.png'
import barRomaOwner from '../../assets/owners/julia-zhu.png';
import cfpOwner from '../../assets/owners/chicago-french-press-owner.png';
import gatgOwner from '../../assets/owners/stephanie-izard.png';
import ivsOwner from '../../assets/owners/leigh-hardy.png';
import wcfOwners from '../../assets/owners/women-children-first-owners.png';
import fourteenParishOwner from '../../assets/owners/14-parish-owner.png';
import cbinmOwner from '../../assets/owners/cant-believe-its-not-meat-owner.png';
import humboldtHouseOwner from '../../assets/owners/humboldt-house-owner.png';
import iicOwner from '../../assets/owners/inspired-indian-cooking-owner.png';
import kendraScottOwner from '../../assets/owners/kendra-scott-owner.png';
import lspOwner from '../../assets/owners/logan-square-pilates-owner.png'
import momNpopOwner from '../../assets/owners/mom-n-pop-hospitality-owner.png'
import pizzaLoboOwner from '../../assets/owners/pizza-lobo-owner.png'
import ponnopozzOwner from '../../assets/owners/ponnopozz-owner.png'
import semillasOwner from '../../assets/owners/semillas-plant-studio-owner.png'
import tscOwner from '../../assets/owners/the-studio-chicago-owner.png'
import saucyOwner from '../../assets/owners/saucy-porka-owner.png'
import ugsOwner from '../../assets/owners/urban-general-store-owner.png'
import cpyOwner from '../../assets/owners/corepower-yoga-owner.png'

const Businesses = () => (
    <div className={styles.mainWrapper}>
        <h1>WOMEN/LOCALLAY OWNED BUSINESSES</h1>
        <hr/>
        <h2>Below are the businesses who donated to our raffle or businesses WLN purchased raffle prizes from. Click on the name of each business to learn more about what they do!</h2>
        <div className={styles.itemWrapper}>
            {businessInfo.map((info, index) => (
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
        <h4>Cecelia Aragones, Ciera deCourcy, Jillian Duma, Mary Erickson, Sophie Lancaster, Sabrina Ruiz and John Webb</h4>
        <div className={styles.hiddenImages}>
            <img src={fourteenParish} alt="item" className={styles.itemPic}/>
            <img src={cbinm} alt="item" className={styles.itemPic}/>
            <img src={barRoma} alt="item" className={styles.itemPic}/>
            <img src={iic} alt="item" className={styles.itemPic}/>
            <img src={cfp} alt="item" className={styles.itemPic}/>
            <img src={lsp} alt="item" className={styles.itemPic}/>
            <img src={momNpop} alt="item" className={styles.itemPic}/>
            <img src={gatg} alt="item" className={styles.itemPic}/>
            <img src={ivs} alt="item" className={styles.itemPic}/>
            <img src={ponnopozz} alt="item" className={styles.itemPic}/>
            <img src={semillas} alt="item" className={styles.itemPic}/>
            <img src={ugs} alt="item" className={styles.itemPic}/>
            <img src={wcf} alt="item" className={styles.itemPic}/>
            <img src={pizzaLobo} alt="item" className={styles.itemPic}/>
            <img src={tsc} alt="item" className={styles.itemPic}/>
            <img src={kendraScott} alt="item" className={styles.itemPic}/>
            <img src={pizzaLobo} alt="item" className={styles.itemPic}/>
            <img src={humboldtHouse} alt="item" className={styles.itemPic}/>
            <img src={cpy} alt="item" className={styles.itemPic}/>
            <img src={saucy} alt="item" className={styles.itemPic}/>
            <img src={wcfOwners} alt="item" className={styles.itemPic}/>
            <img src={barRomaOwner} alt="item" className={styles.itemPic}/>
            <img src={gatgOwner} alt="item" className={styles.itemPic}/>
            <img src={wcfOwners} alt="item" className={styles.itemPic}/>
            <img src={fourteenParishOwner} alt="item" className={styles.itemPic}/>
            <img src={ivsOwner} alt="item" className={styles.itemPic}/>
            <img src={cbinmOwner} alt="item" className={styles.itemPic}/>
            <img src={cfpOwner} alt="item" className={styles.itemPic}/>
            <img src={humboldtHouseOwner} alt="item" className={styles.itemPic}/>
            <img src={kendraScottOwner} alt="item" className={styles.itemPic}/>
            <img src={lspOwner} alt="item" className={styles.itemPic}/>
            <img src={iicOwner} alt="item" className={styles.itemPic}/>
            <img src={momNpopOwner} alt="item" className={styles.itemPic}/>
            <img src={wcfOwners} alt="item" className={styles.itemPic}/>
            <img src={semillasOwner} alt="item" className={styles.itemPic}/>
            <img src={tscOwner} alt="item" className={styles.itemPic}/>
            <img src={ponnopozzOwner} alt="item" className={styles.itemPic}/>
            <img src={pizzaLoboOwner} alt="item" className={styles.itemPic}/>
            <img src={ugsOwner} alt="item" className={styles.itemPic}/>
            <img src={cpyOwner} alt="item" className={styles.itemPic}/>
            <img src={saucyOwner} alt="item" className={styles.itemPic}/>
        </div>
    </div>
);

export default Businesses;