import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {

    var obj = {
        w:40,
        h:40
    }

    return (
        <>
            <div className={styles.footer_help}>

                <div className={styles.footer_main}>

                    <div className={styles.footer_three}>
                        <h1 className={styles.fotter_t_t}>Contact</h1>
                        <div className={styles.footer_th_t}>
                            <h1>rankboosteducation@gmail.com</h1>
                            <h1>kumarshubham6089@gmail.com</h1>
                        </div>
                    </div>

                    <div className={styles.footer_one}>



                        <div className={styles.footer_ek}>
                            <h1>Usefull Links</h1>
                            <div>
                                <li><Link href={'/'}>Home</Link></li>
                                <li><Link href={'/'}>Blogs</Link></li>
                                <li><Link href={'/'}>Books</Link></li>
                                <li><Link href={'/'}>Register</Link></li>
                                <li><Link href={'/'}>Change Password</Link></li>
                                <li><Link href={'/'}>Customer support</Link></li>
                            </div>
                        </div>
                        <div className={styles.footer_do}>
                            <h1>Business</h1>
                            <div>
                                <li><Link href={'/'}>About us</Link></li>
                                <li><Link href={'/'}>About us</Link></li>
                                <li><Link href={'/'}>Privacy policy</Link></li>
                                <li><Link href={'/'}>Terms & conditions</Link></li>
                                <li><Link href={'/'}>Cancellation / refund policy</Link></li>
                            </div>
                        </div>
                        <div className={styles.footer_teen}>
                            <h1>Follow Us On</h1>
                            <div className={styles.footer_social}>
                                <div className={styles.social_class}>
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
                        </div>
                    </div>
                    <div className={styles.footer_two}>
                        <div className={styles.footer_brand}>
                            <span>rank boost @2022 All rights reserved</span>
                        </div>
                    </div>
                </div>
                <div className="f-gappers activate-dis"></div>
            </div>
        </>
    )
}

export default Footer

