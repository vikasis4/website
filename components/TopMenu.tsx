import React, { useEffect, useState } from 'react'
import styles from '@/styles/TopMenu.module.scss'
import Image from 'next/image'
import ExploreBtn from './ExploreBtn'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

function TopMenu() {

    const router = useRouter();
    const [width, setWidth] = useState(1000);
    const [transform, setTransform] = useState(-100);

    var focus = { color: '#5A4FCF', borderColor: '#5A4FCF' };
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])
    var menuFocus = {
        select: {
            color: 'white'
        },
        deny: {
            color: 'black'
        }
    }

    const menu = async () => {
        setTransform(0)
    }
    const close = async () => {
        setTransform(-100)
    }


    return (
        <>
            <div className={styles.menu} style={{ transform: `translateY(${transform}rem)` }} >
                <div className={styles.top}>
                    <Image
                        src="/home/cancel.png"
                        alt="rankboost logo"
                        width={40}
                        height={40}
                        onClick={close}
                    />
                </div>
                <div className={styles.MenuOne}>
                    <ul>
                        <li><Link style={router.pathname === '/' ? menuFocus.select : menuFocus.deny} href={'/'}>Home</Link></li>
                        <li><Link style={router.pathname === '/about_us' ? menuFocus.select : menuFocus.deny} href={'/about_us'}>About Us</Link></li>
                        <li><Link style={router.pathname === '/contact_us' ? menuFocus.select : menuFocus.deny} href={'/contact_us'}>Contact us</Link></li>
                    </ul>
                </div>
            </div>

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
                {
                    width < 480
                        ?
                        <Image
                            src="/home/menu.png"
                            alt="rankboost logo"
                            width={40}
                            height={40}
                            onClick={menu}
                        />
                        :
                        <div className={styles.one}>
                            <ul>
                                <li><Link style={router.pathname === '/' ? focus : {}} href={'/'}>Home</Link></li>
                                <li><Link style={router.pathname === '/about_us' ? focus : {}} href={'/about_us'}>About Us</Link></li>
                                <li><Link style={router.pathname === '/contact_us' ? focus : {}} href={'/contact_us'}>Contact us</Link></li>
                            </ul>
                            <ExploreBtn fontSize='1rem' width={30} height={30} />
                        </div>
                }
            </div>
        </>
    )
}

export default TopMenu