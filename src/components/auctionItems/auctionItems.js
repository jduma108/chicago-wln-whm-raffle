import React from 'react';
import styles from './auctionItems.module.css';
import auctionItemData from '../../data/auctionItems.json';
import noImage from '../../assets/no-image.png';
import fourteenParish from '../../assets/raffleItems/14-parish-prize.png';
import barRoma from '../../assets/raffleItems/bar-roma-prize.png';
import cbinm from '../../assets/raffleItems/cant-believe-its-not-meat-prize.png';
import cfp from '../../assets/raffleItems/chicago-french-press-prize.png';
import corePower from '../../assets/raffleItems/corepower-yoga-prize.png';
import fgj from '../../assets/raffleItems/fiya-geraldine-jerrys-prize.png';
import gatg from '../../assets/raffleItems/girl-and-the-goat-prize.png';
import humboldtHouse from '../../assets/raffleItems/humboldt-house-prize.png';
import ivs from '../../assets/raffleItems/indigo-and-violet-prize.png';
import inspiredIndian from '../../assets/raffleItems/inspired-indian-cooking-prize.png';
import kendraScott from '../../assets/raffleItems/kendra-scott-prize.png';
import lsp1 from '../../assets/raffleItems/logan-square-pilates-prize-1.png';
import lsp2 from '../../assets/raffleItems/logan-square-pilates-prize-2.png';
import pizzaLobo from '../../assets/raffleItems/pizza-lobo-prize.png';
import ponnopozz from '../../assets/raffleItems/ponnopozz-prize.png';
import semillas from '../../assets/raffleItems/semillas-prize.png';
import theStudio from '../../assets/raffleItems/the-studio-chicago-prize.png';
import ugs from '../../assets/raffleItems/urban-general-store-prize.png';
import saucy from '../../assets/raffleItems/saucy-porka-prize.png';
import wcf from '../../assets/raffleItems/women-and-children-first-prize.png';

const AuctionItems = () => (
    <div className={styles.auctionItemsWrapper}>
        <h1>RAFFLE ITEMS</h1>
        <hr/>
        <div className={styles.itemContainer}>
            {
                auctionItemData.map((item) => (
                    <div className={styles.item} key={item.itemTitle}>
                        <a href="https://form.jotform.com/230750690775058" target="_blank" rel="noreferrer">
                            <img src={item.itemImage} alt={item.itemTitle} className={styles.itemPic}/>
                        </a>
                        <h3>{item.itemTitle}</h3>
                        <p>{item.itemDescription}</p>
                        {item.website ? <p>To learn more about this company, checkout their <a href={item.website} target="_blank" rel="noreferrer">website</a>.</p> : ''}
                        <p>{item.deliveryType}</p>
                    </div>
                ))
            }
            <div className={styles.item}>
                <a href="https://form.jotform.com/230750690775058" target="_blank" rel="noreferrer" className={styles.linkTitle}>
                    <h1 className={styles.linkTitle}>BUY RAFFLE TICKETS HERE!</h1>
                </a>
            </div>
        </div>
        <div className={styles.hiddenImages}>
            <img src={noImage} alt="item" className={styles.itemPic}/>
            <img src={fourteenParish} alt="item" className={styles.itemPic}/>
            <img src={barRoma} alt="item" className={styles.itemPic}/>
            <img src={cbinm} alt="item" className={styles.itemPic}/>
            <img src={cfp} alt="item" className={styles.itemPic}/>
            <img src={corePower} alt="item" className={styles.itemPic}/>
            <img src={fgj} alt="item" className={styles.itemPic}/>
            <img src={gatg} alt="item" className={styles.itemPic}/>
            <img src={humboldtHouse} alt="item" className={styles.itemPic}/>
            <img src={ivs} alt="item" className={styles.itemPic}/>
            <img src={inspiredIndian} alt="item" className={styles.itemPic}/>
            <img src={kendraScott} alt="item" className={styles.itemPic}/>
            <img src={lsp1} alt="item" className={styles.itemPic}/>
            <img src={lsp2} alt="item" className={styles.itemPic}/>
            <img src={pizzaLobo} alt="item" className={styles.itemPic}/>
            <img src={ponnopozz} alt="item" className={styles.itemPic}/>
            <img src={semillas} alt="item" className={styles.itemPic}/>
            <img src={theStudio} alt="item" className={styles.itemPic}/>
            <img src={ugs} alt="item" className={styles.itemPic}/>
            <img src={saucy} alt="item" className={styles.itemPic}/>
            <img src={wcf} alt="item" className={styles.itemPic}/>
            <img src={saucy} alt="item" className={styles.itemPic}/>
        </div>
    </div>
);

export default AuctionItems;