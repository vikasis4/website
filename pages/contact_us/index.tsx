import React from 'react'
import styles from '@/styles/Abouts.module.scss'
import TopMenu from '@/components/TopMenu'
import Footer from '@/components/Footer'

function index() {
    return (
        <>
            <TopMenu />
            <div className={styles.one}>
                <h1>Contact Us</h1>
                <h2>if you want to talk to us related to any issue or want to raise any query related to the business you can contact us through our Email. Our company address is near shiv shakti nagar board, anand nagar, boh road, Ambala cantt, haryana and pincode is 133001</h2>
            </div>
            <div className={styles.ftwo}>
                <h1><span>EMAIL :- </span> support@rankboost.live </h1>
                <h1><span>ADDRESS :-</span> #5 lucky garden, daliph garh, ambala cantt, Haryan || PinCode : 133001</h1>
                <h1><span>PHONE NUMBER :-</span>  8307067006</h1>
                <h2>If you want to use our customer support service, install our app and raise and track your query there, all the query related to payment/technical failure etc will be address there</h2>
            </div>
            <Footer />
        </>
    )
}

export default index