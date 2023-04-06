import React from 'react'
import styles from '@/styles/TopMenu.module.scss'
import Image from 'next/image'
import ExploreBtn from './ExploreBtn'

function TopMenu() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.one_one}>
                    <Image
                        src="/logo.png"
                        alt="rankboost logo"
                        width={50}
                        height={50}
                    />
                    <h1>RankBoost</h1>
                </div>
                <div className={styles.one}>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <ExploreBtn fontSize='1rem' width={30} height={30} />
                </div>
            </div>
        </>
    )
}

export default TopMenu