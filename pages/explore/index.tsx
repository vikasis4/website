import React from 'react'
import styles from '@/styles/Abouts.module.scss'
import TopMenu from '@/components/TopMenu'
import Footer from '@/components/Footer'
import Image from 'next/image'

function index() {

    const [width, setWidth] = React.useState(1000);
    React.useEffect(() => {
      setWidth(window.innerWidth);
    }, [])

    return (
        <>
            <TopMenu />

            <div className={styles.ex_one}>
                <div className={styles.ex_card}>
                    <Image
                        src="/ms.png"
                        alt="rankboost selection"
                        width={width < 480 ? width - 40 : 430}
                        height={280}
                        onClick={() => window.open("https://play.google.com/store/apps/details?id=com.rankboost.live")}
                    />
                    <button className={styles.ex_btn}>Buy Now</button>
                </div>
                <div className={styles.ex_card}>
                    <Image
                        src="/sm.png"
                        alt="rankboost selection"
                        width={width < 480 ? width - 40 : 430}
                        height={280}
                        onClick={() => window.open("https://play.google.com/store/apps/details?id=com.rankboost.live")}
                    />
                    <button className={styles.ex_btn}>Buy Now</button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default index