import React from 'react';
import styles from './overview.module.css';
import Fade from 'react-reveal/Fade';

const Overview = () => (
    <Fade bottom cascade>
        <div className={styles.overviewWrapper}>
            <h1>OVERVIEW</h1>
            <hr/>
            <p>To celebrate Women's History Month, the Women's Leadership Network Chicago chapter will be hosting a virtual raffle fundraiser! Raffle items have been donated or purchased by women-owned and/or Chicago-based businesses. All proceeds from the raffle ticket purchases will be donated to <a href="https://girlsincofchicago.org/" target="_blank" rel="noreferrer" style={{textDecoration: 'underline'}}>Girls Inc. of Chicago</a>. The purpose of this fundraising event is to raise awareness for women-owned, Chicago-based businesses and raise money for a non-profit organization that focuses on supporting and empowering women.</p>
            <p>Please reach out to anyone on the Chicago WLN Raffle Committee Members (Cecelia Aragones, Ciera deCourcy, Jillian Duma, Mary Erickson, Sophie Lancaster, Sabrina Ruiz and John Webb) for any questions!</p>
        </div>
    </Fade>
    
);

export default Overview;