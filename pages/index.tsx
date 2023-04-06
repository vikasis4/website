import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import TopMenu from '@/components/TopMenu'
import ExploreBtn from '@/components/ExploreBtn'

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <TopMenu />
        <div className={styles.one}>
          <div className={styles.one_one}>
            <h1><span>India's</span> &nbsp;Best <br /> Guidance Platform</h1>
            <h2>
              <main>
                <Image src="/home/star.png" alt="rankboost logo" width={20} height={20} />
                RankBoost provides enhanced experience of world best mentors <br />
              </main>
              <main>
                <Image src="/home/star.png" alt="rankboost logo" width={20} height={20} />
                RankBoost provides enhanced experience of world best mentors <br />
              </main>
              <main>
                <Image src="/home/star.png" alt="rankboost logo" width={20} height={20} />
                RankBoost provides enhanced experience of world best mentors <br />
              </main>
              <main>
                <Image src="/home/star.png" alt="rankboost logo" width={20} height={20} />
                RankBoost provides enhanced experience of world best mentors <br />
              </main>
            </h2>
            <ExploreBtn fontSize='1.8rem' width={35} height={35} />
          </div>
          <Image
            src="/home/main.png"
            alt="rankboost logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  )
}
