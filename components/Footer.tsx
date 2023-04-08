import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {

    var obj = {
        w: 40,
        h: 40
    }

    return (
        <>
            <div className={styles.one}>
                <Image src={'/logo.png'} alt='rankboost logo' width='80' height='80' />
                <h1>RankBoost</h1>
            </div>
            <div className={styles.two}>
                <div className={styles.two_1}>
                    <h1>Usefull Links</h1>
                    <ul>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/'}>Blogs</Link></li>
                        <li><Link href={'/'}>About Us</Link></li>
                        <li><Link href={'/'}>Contact Us</Link></li>
                        <li><Link href={'/'}>Refund Policy</Link></li>
                        <li><Link href={'/'}>Privacy Policy</Link></li>
                        <li><Link href={'/'}>Terms and Conditions</Link></li>
                    </ul>
                </div>
                <div className={styles.two_2}>
                    <h1>Social Media</h1>
                    <ul>
                        <li><Link target="_blank" href="https://www.facebook.com/RankBoostEducation/"><Image width={obj.w} height={obj.h} alt={'rankboost facebook'} src={'/footer/facebook.svg'} /></Link></li>
                        <li><Link target="_blank" href="https://www.instagram.com/rankboostedu/"><Image width={obj.w} height={obj.h} alt={'rankboost instagram'} src={'/footer/instagram.svg'} /></Link></li>
                        <li><Link target="_blank" href="https://twitter.com/RankboostS"><Image width={obj.w} height={obj.h} alt={'rankboost twitter'} src={'/footer/twitter.svg'} /></Link></li>
                        <li><Link target="_blank" href="https://www.linkedin.com/in/shubham-kumar-sah-b53aa0224"><Image width={obj.w} height={obj.h} alt={'rankboost linkedin'} src={'/footer/linkedin.svg'} /></Link></li>
                        <li><Link target="_blank" href="https://youtube.com/c/RanKBoosTsShubhamKumar"><Image width={obj.w} height={obj.h} alt={'rankboost youtube'} src={'/footer/youtube.svg'} /></Link></li>
                        <li><Link target="_blank" href="https://t.me/RankBoostsYT"><Image width={obj.w} height={obj.h} alt={'rankboost telegram'} src={'/footer/telegram.svg'} /></Link></li>
                    </ul>
                </div>
            </div>
            <h1 className={styles.mark}>RANK BOOST @2022 ALL RIGHTS RESERVED</h1>
        </>
    )
}

export default Footer


