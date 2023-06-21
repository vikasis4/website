import React from 'react'
import styles from '@/styles/Abouts.module.scss'
import TopMenu from '@/components/TopMenu'
import Footer from '@/components/Footer'

function index() {
    return (
        <>
            <TopMenu />
            <div className={styles.one}>
                <h1>Product and Pricing</h1>
                <h2>RankBoost is currently Providing guidance/mentorship service for the jee/neet aspirants.<br/>Along with this service rankboost also provides premium study material to the students. Below you can check the price of all of the products. apart from this rankboost does not provide any other service and product, we does not provide any offline services.</h2>
            </div>
            <div className={styles.ftwo}>
                <h1><span>Mentorship :- </span> &#8377; 1999 for 3 months</h1>
                <h1><span>Study Material :- </span> &#8377; 499 </h1>
            </div>
            <Footer />
        </>
    )
}

export default index