import React from 'react';
import styles from './raffle-items.module.css';
import raffleItems from '../../data/raffle-items.json';
import noImage from '../../assets/no-image.png';
import andreaPricePotteryPrize from '../../assets/raffleItems/andrea-price-pottery-prize.png';
import bsYogaPrize from '../../assets/raffleItems/big-shoulders-yoga-prize.png';
import blackLuxeCandlePrize from '../../assets/raffleItems/black-luxe-candle-prize.png';
import bonFemmesPrize from '../../assets/raffleItems/bon-femmes-prize.png';
import csuPrize from '../../assets/raffleItems/chicago-state-university-prize.png';
import coletteCollectionPrize from '../../assets/raffleItems/colette-collection-prize.png';
import demeraPrize from '../../assets/raffleItems/demera-prize.png';
import kendraScottPrize from '../../assets/raffleItems/kendra-scott-prize.png';
import momNPopPrize from '../../assets/raffleItems/momnpop-hospitality-prize.png';
import onLeavePrize from '../../assets/raffleItems/on-leave-experiences-prize.png';
import overflowCandlePrize from '../../assets/raffleItems/overflow-candle-prize.png';
import pizzaLoboPrize from '../../assets/raffleItems/pizza-lobo-prize.png';
import sinTituloPrize from '../../assets/raffleItems/sin-titulo-prize.png';
import soapDistilleryPrize from '../../assets/raffleItems/soap-distillery-prize.png';
import spaSoakPrize from '../../assets/raffleItems/spa-soak-prize.png';
import squeakyBeasPrize from '../../assets/raffleItems/squeaky-beas-prize.png';
import sukhaSanctuaryPrize from '../../assets/raffleItems/sukha-sanctuary-prize.png';
import theRefilleriPrize from '../../assets/raffleItems/the-refilleri-prize.png';
import unbotheredFoodsPrize from '../../assets/raffleItems/unbothered-foods-prize.png';
import vietfivePrize from '../../assets/raffleItems/vietfive-coffee-prize.png';
import vosgesPrize from '../../assets/raffleItems/vosges-prize.png';

const RaffleItems = () => (
    <div className={styles.raffleItemsWrapper}>
        <h1>RAFFLE ITEMS</h1>
        <hr/>
        <div className={styles.itemContainer}>
            {
                raffleItems.map((item) => (
                    <div className={styles.item} key={item.itemTitle}>
                        <a href="https://form.jotform.com/240744412784155" target="_blank" rel="noreferrer">
                            <img src={item.itemImage} alt={item.itemTitle} className={styles.itemPic}/>
                        </a>
                        <h3>{item.itemTitle}</h3>
                        <p>{item.itemDescription}</p>
                        {item.website ? <p>To learn more about this company, checkout their <a href={item.website} target="_blank" rel="noreferrer">website</a>.</p> : ''}
                        <p>{item.deliveryType}</p>
                    </div>
                ))
            }
            {/* <div className={styles.item}>
                <a href="https://form.jotform.com/240744412784155" target="_blank" rel="noreferrer" className={styles.linkTitle}>
                    <h1 className={styles.linkTitle}>BUY RAFFLE TICKETS HERE!</h1>
                </a>
            </div> */}
        </div>
        <div className={styles.hiddenImages}>
            <img src={noImage} alt="item" className={styles.itemPic}/>
            <img src={andreaPricePotteryPrize} alt="item" className={styles.itemPic}/>
            <img src={bsYogaPrize} alt="item" className={styles.itemPic}/>
            <img src={blackLuxeCandlePrize} alt="item" className={styles.itemPic}/>
            <img src={bonFemmesPrize} alt="item" className={styles.itemPic}/>
            <img src={csuPrize} alt="item" className={styles.itemPic}/>
            <img src={coletteCollectionPrize} alt="item" className={styles.itemPic}/>
            <img src={demeraPrize} alt="item" className={styles.itemPic}/>
            <img src={kendraScottPrize} alt="item" className={styles.itemPic}/>
            <img src={momNPopPrize} alt="item" className={styles.itemPic}/>
            <img src={onLeavePrize} alt="item" className={styles.itemPic}/>
            <img src={overflowCandlePrize} alt="item" className={styles.itemPic}/>
            <img src={pizzaLoboPrize} alt="item" className={styles.itemPic}/>
            <img src={sinTituloPrize} alt="item" className={styles.itemPic}/>
            <img src={soapDistilleryPrize} alt="item" className={styles.itemPic}/>
            <img src={spaSoakPrize} alt="item" className={styles.itemPic}/>
            <img src={squeakyBeasPrize} alt="item" className={styles.itemPic}/>
            <img src={sukhaSanctuaryPrize} alt="item" className={styles.itemPic}/>
            <img src={theRefilleriPrize} alt="item" className={styles.itemPic}/>
            <img src={unbotheredFoodsPrize} alt="item" className={styles.itemPic}/>
            <img src={vietfivePrize} alt="item" className={styles.itemPic}/>
            <img src={vosgesPrize} alt="item" className={styles.itemPic}/>
        </div>
    </div>
);

export default RaffleItems;