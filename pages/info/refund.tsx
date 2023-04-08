import Head from 'next/head'
import styles from '@/styles/Info.module.scss'
import TopMenu from '@/components/TopMenu'
import Footer from '@/components/Footer'

function refund() {
  return (
    <>
    <TopMenu />
    <div className={styles.one}>
      <h1>Refund/Cancellation Policy</h1>
    <p>Rankboost sells only digital products that is videos subscription and pdfs in form of online courses. If the customer once made the payment for any course then there is no refund scheme for that course. However, if a person face any technical issues, where he/she makes the payment and the subscription did not get activated then the person can contact us through our customer support, and we will verify the details of the payment and then will make subscription active for that account.<br />Rank boost does not offer any refund on the current course.</p>
    </div>
    <Footer />
    </>  )
}

export default refund