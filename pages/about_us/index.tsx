import React from 'react'
import styles from '@/styles/Abouts.module.scss'
import TopMenu from '@/components/TopMenu'
import Image from 'next/image'
import Footer from '@/components/Footer'

function index() {
    return (
        <>
            <TopMenu />
            <div className={styles.one}>
                <h1>About Us</h1>
                <h2>RankBoost is an EdTech platform that aims to provide the best guidance for competitive exams like the IIT-JEE and NEET. RankBoost offers guidance courses, study materials, 1-1 mentorship, etc. We do not offer any certificates upon completion of the courses. In our courses, guidance is provided by IITIANS, experienced teachers, and seniors who have cracked the JEE and NEET exams. The major problem with clearing the competitive exams is a lack of proper mentoring and guidance. We are dedicated to helping students clear their IITJEE and NEET exams and get them into their dream engineering and medical colleges. RankBoost offers students proper, structured guidance for competitive exams. Our mode of service is completely online; we do not have any offline centers.
                    The co-founders of this platform are Shubham and Vikas. Both have cracked JEE Mains and Advance and have mentored more than 7,500 students for IIT and NEET. We both believe in providing quality education and guidance to our students, ensuring that they get the best service at an affordable price.
                </h2>
            </div>
            <div className={styles.two}>
                <h1>Founders</h1>
                <div className={styles.two_2}>
                    <Image src={'/about/fx1.jpg'} height={400} width={300} alt="rankboost founder" />
                    <Image src={'/about/fx2.jpg'} height={400} width={300} alt="rankboost founder" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default index