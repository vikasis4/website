import React from 'react'
import styles from '@/styles/TopMenu.module.scss'
import Image from 'next/image'
import ExploreBtn from './ExploreBtn'
import Link from 'next/link'

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
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/about_us'}>About Us</Link></li>
                        <li><Link href={'/contact_us'}>Contact us</Link></li>
                    </ul>
                    <ExploreBtn fontSize='1rem' width={30} height={30} />
                </div>
            </div>
        </>
    )
}

export default TopMenu