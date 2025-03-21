import React from 'react';
import styles from './businesses.module.css';
import businesses from '../../data/businesses.json';
import andreaPriceLogo from '../../assets/logos/andrea-price-pottery-logo.png';
import bsYogaLogo from '../../assets/logos/big-shoulders-yoga-logo.png';
import blackLuxeCandleLogo from '../../assets/logos/black-luxe-candle-logo.png';
import bonFemmesLogo from '../../assets/logos/bon-femmes-logo.png';
import coletteCollectionLogo from '../../assets/logos/colette-collection-logo.png';
import csuLogo from '../../assets/logos/chicago-statue-university-logo.png';
import demeraLogo from '../../assets/logos/demera-logo.png';
import kendraScottLogo from '../../assets/logos/kendra-scott-logo.png';
import momNpopLogo from '../../assets/logos/momnpop-hospitality-logo.png';
import onLeaveLogo from '../../assets/logos/on-leave-experiences-logo.png';
import overflowLogo from '../../assets/logos/overflow-candle-logo.png';
import pizzaLoboLogo from '../../assets/logos/pizza-lobo-logo.png';
import sinTituloLogo from '../../assets/logos/sin-titulo-logo.png';
import soapDistilleryLogo from '../../assets/logos/soap-distillery-logo.png';
import spaSoakLogo from '../../assets/logos/spa-soak-logo.png';
import squeakyBeasLogo from '../../assets/logos/squeaky-beas-logo.png';
import sukhaSanctuaryLogo from '../../assets/logos/sukha-sanctuary-logo.png';
import refilleriLogo from '../../assets/logos/the-refilleri-logo.png';
import unbotheredFoodsLogo from '../../assets/logos/unbothered-foods-logo.png';
import vietfiveLogo from '../../assets/logos/vietfive-logo.png';
import vosgesLogo from '../../assets/logos/vosges-logo.png';
import andreaPricePotteryOwner from '../../assets/owners/andrea-price-pottery-owner.png';
import bsYogaOwner from '../../assets/owners/big-shoulders-yoga-owner.png';
import blackLuxeCandleOwner from '../../assets/owners/black-luxe-candle-owner.png';
import bonFemmesOwner from '../../assets/owners/bon-femmes-owner.png';
import coletteCollectionOwner from '../../assets/owners/colette-collection-owner.png';
import csuDirector from '../../assets/owners/chicago-state-university-athletics-director.png';
import demeraOwner from '../../assets/owners/demera-owner.png';
import kendraScottOwner from '../../assets/owners/kendra-scott-owner.png';
import momNpopOwner from '../../assets/owners/momnpop-hospitality-owner.png';
import onLeaveOwner from '../../assets/owners/on-leave-experiences-owner.png';
import overflowOwner from '../../assets/owners/overflow-candle-owner.png';
import pizzaLoboOwner from '../../assets/owners/pizza-lobo-owner.png';
import sinTituloOwner from '../../assets/owners/sin-titulo-owner.png';
import soapDistilleryOwner from '../../assets/owners/soap-distillery-owner.png';
import spaSoakOwner from '../../assets/owners/spa-soak-owner.png'
import squeakyBeasOwner from '../../assets/owners/squeaky-beas-owner.png';
import sukhaSanctuaryOwner from '../../assets/owners/sukha-sanctuary-owner.jpeg'
import refilleriOwner from '../../assets/owners/the-refilleri-owner.png';
import unbotheredFoodsOwner from '../../assets/owners/unbothered-foods-owner.png';
import vietfiveOwner from '../../assets/owners/vietfive-coffee-owner.png';
import vosgesOwner from '../../assets/owners/vosges-owner.png';

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
            <img src={andreaPriceLogo} alt="item" className={styles.itemPic}/>
            <img src={bsYogaLogo} alt="item" className={styles.itemPic}/>
            <img src={blackLuxeCandleLogo} alt="item" className={styles.itemPic}/>
            <img src={bonFemmesLogo} alt="item" className={styles.itemPic}/>
            <img src={coletteCollectionLogo} alt="item" className={styles.itemPic}/>
            <img src={csuLogo} alt="item" className={styles.itemPic}/>
            <img src={demeraLogo} alt="item" className={styles.itemPic}/>
            <img src={kendraScottLogo} alt="item" className={styles.itemPic}/>
            <img src={momNpopLogo} alt="item" className={styles.itemPic}/>
            <img src={onLeaveLogo} alt="item" className={styles.itemPic}/>
            <img src={overflowLogo} alt="item" className={styles.itemPic}/>
            <img src={pizzaLoboLogo} alt="item" className={styles.itemPic}/>
            <img src={sinTituloLogo} alt="item" className={styles.itemPic}/>
            <img src={soapDistilleryLogo} alt="item" className={styles.itemPic}/>
            <img src={spaSoakLogo} alt="item" className={styles.itemPic}/>
            <img src={squeakyBeasLogo} alt="item" className={styles.itemPic}/>
            <img src={sukhaSanctuaryLogo} alt="item" className={styles.itemPic}/>
            <img src={refilleriLogo} alt="item" className={styles.itemPic}/>
            <img src={unbotheredFoodsLogo} alt="item" className={styles.itemPic}/>
            <img src={vietfiveLogo} alt="item" className={styles.itemPic}/>
            <img src={vosgesLogo} alt="item" className={styles.itemPic}/>
            <img src={andreaPricePotteryOwner} alt="item" className={styles.itemPic}/>
            <img src={bsYogaOwner} alt="item" className={styles.itemPic}/>
            <img src={blackLuxeCandleOwner} alt="item" className={styles.itemPic}/>
            <img src={bonFemmesOwner} alt="item" className={styles.itemPic}/>
            <img src={coletteCollectionOwner} alt="item" className={styles.itemPic}/>
            <img src={csuDirector} alt="item" className={styles.itemPic}/>
            <img src={demeraOwner} alt="item" className={styles.itemPic}/>
            <img src={kendraScottOwner} alt="item" className={styles.itemPic}/>
            <img src={momNpopOwner} alt="item" className={styles.itemPic}/>
            <img src={onLeaveOwner} alt="item" className={styles.itemPic}/>
            <img src={overflowOwner} alt="item" className={styles.itemPic}/>
            <img src={pizzaLoboOwner} alt="item" className={styles.itemPic}/>
            <img src={sinTituloOwner} alt="item" className={styles.itemPic}/>
            <img src={soapDistilleryOwner} alt="item" className={styles.itemPic}/>
            <img src={spaSoakOwner} alt="item" className={styles.itemPic}/>
            <img src={squeakyBeasOwner} alt="item" className={styles.itemPic}/>
            <img src={sukhaSanctuaryOwner} alt="item" className={styles.itemPic}/>
            <img src={refilleriOwner} alt="item" className={styles.itemPic}/>
            <img src={unbotheredFoodsOwner} alt="item" className={styles.itemPic}/>
            <img src={vietfiveOwner} alt="item" className={styles.itemPic}/>
            <img src={vosgesOwner} alt="item" className={styles.itemPic}/>
        </div>
    </div>
);

export default Businesses;