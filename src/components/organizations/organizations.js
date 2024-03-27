import React from 'react';
import styles from './organizations.module.css';

const Organizations = () => (
    <div className={styles.organizationsWrapper}>
        <h1>ABOUT GIRLS INC. OF CHICAGO</h1>
        <hr/>
        <p>Girls Inc. was founded in 1865 to serve the needs of girls and young women in the aftermath of the Civil War. Today, Girls Inc. has 78 affiliates that serve more than 150,000 girls in 1,200 sites in 350 cities across the United States and Canada.</p>
        <p>Girls Inc. of Chicago (GIoC), founded in 2017, is one of the newer Girls Inc. Affiliates. GIoC became an authorized vendor for Chicago Public Schools (CPS) and began serving 65 girls at Ruggles Elementary School in 2017. Each year, our organization provides programming during the school day and during out-of-school-time (weekends, afterschool, spring, and summer breaks) to 800 girls at six (6) CPS schools including: Aldridge, Clay, Hughes, Lavizzo, Libby, and Ruggles Elementary Schools. Girls Inc. Of Chicago intends to serve 1,110 girls during the 2021-2022 school year.</p>
        <p>To learn more about Girls Inc. of Chicago, checkout their <a href='https://girlsincofchicago.org/'>website!</a></p>
    </div>
);

export default Organizations;