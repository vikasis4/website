import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import TopMenu from '@/components/TopMenu'
import ExploreBtn from '@/components/ExploreBtn'
import Footer from '@/components/Footer'

export default function Home() {

  var object = {
    link: '/home/star.png',
    w: 20,
    h: 20
  }

  return (
    <>
      <TopMenu />
      <div className={styles.main}>


        <div className={styles.one}>
          <div className={styles.one_one}>
            <h1><span>India's</span> &nbsp;Best <br /> Guidance Platform</h1>
            <h2>
              <main>
                <Image src={object.link} alt="rankboost points" width={object.w} height={object.h} />
                We have transformed average and below average students to toppers <br />
              </main>
              <main>
                <Image src={object.link} alt="rankboost points" width={object.w} height={object.h} />
                Our mentors understand the students and rectify all the problems <br />
              </main>
              <main>
                <Image src={object.link} alt="rankboost points" width={object.w} height={object.h} />
                We use pyschology to change the mindset of the student <br />
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

        <div className={styles.two}>
          <h1>1000+<br />Jee Mains</h1>
          <h1>800+<br />Jee Advance</h1>
          <h1>3000+<br />Students Guided</h1>
        </div>

        <div className={styles.three}>
          <div className={styles.three_3}>
            <h1>Our Selections</h1>
          </div>
          <Image
            src="/home/djx.png"
            alt="rankboost selection"
            width={500}
            height={500}
          />
        </div>

        <div className={styles.four}>
          <h1>Download Our App to Access Our Services</h1>
          <Image
            src="/googlePlay.png"
            alt="rankboost selection"
            width={400}
            height={150}
          />
        </div>

      </div>

      <Footer />
    </>
  )
}
