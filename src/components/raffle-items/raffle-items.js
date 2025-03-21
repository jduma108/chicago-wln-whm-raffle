import React from 'react';
import styles from './raffle-items.module.css';
import raffleItems from '../../data/raffle-items.json';
import noImage from '../../assets/no-image.png';
import ksPrize from '../../assets/raffle-items/ks-prize.png';
import latavyaPrize from '../../assets/raffle-items/latavya-solutions-llc-prize.jpeg';
import lspMatPrize from '../../assets/raffle-items/lsp-mat-prize.png';
import lspReformerPrize from '../../assets/raffle-items/lsp-reformer-prize.png';
import pizzaLoboPrize from '../../assets/raffle-items/pizza-lobo-prize.png';
import pmpPrize from '../../assets/raffle-items/pmp-prize.png';
import spaSoakFacial from '../../assets/raffle-items/spa-soak-facial-prize.png';
import spaSoakMassage from '../../assets/raffle-items/spa-soak-massage-prize.png';
import sukhaSanctuaryPrize from '../../assets/raffle-items/sukha-sanctuary-prize.png';
import thStudioChicagoPrize from '../../assets/raffle-items/the-studio-chicago-prize.png';
import wcfPrize from '../../assets/raffle-items/wcf-prize.png';


const RaffleItems = () => (
    <div className={styles.raffleItemsWrapper}>
        <h1>RAFFLE ITEMS</h1>
        <hr/>
        <div className={styles.itemContainer}>
            {
                raffleItems.map((item) => (
                    <div className={styles.item} key={item.itemTitle}>
                        <a href="https://form.jotform.com/250790629299168" target="_blank" rel="noreferrer">
                            <img src={item.itemImage} alt={item.itemTitle} className={styles.itemPic}/>
                        </a>
                        <h3>{item.itemTitle}</h3>
                        <p>{item.itemDescription}</p>
                        {item.website ? <p>To learn more about this company, checkout their <a href={item.website} target="_blank" rel="noreferrer">website</a>.</p> : ''}
                        <p>{item.deliveryType}</p>
                    </div>
                ))
            }
        </div>
       <div className={styles.hiddenImages}>
            <img src={noImage} alt="item" className={styles.itemPic}/>
            <img src={ksPrize} alt="item" className={styles.itemPic}/>
            <img src={latavyaPrize} alt="item" className={styles.itemPic}/>
            <img src={lspMatPrize} alt="item" className={styles.itemPic}/>
            <img src={lspReformerPrize} alt="item" className={styles.itemPic}/>
            <img src={pizzaLoboPrize} alt="item" className={styles.itemPic}/>
            <img src={pmpPrize} alt="item" className={styles.itemPic}/>
            <img src={spaSoakFacial} alt="item" className={styles.itemPic}/>
            <img src={spaSoakMassage} alt="item" className={styles.itemPic}/>
            <img src={sukhaSanctuaryPrize} alt="item" className={styles.itemPic}/>
            <img src={thStudioChicagoPrize} alt="item" className={styles.itemPic}/>
            <img src={wcfPrize} alt="item" className={styles.itemPic}/>
        </div>
    </div>
);

export default RaffleItems;