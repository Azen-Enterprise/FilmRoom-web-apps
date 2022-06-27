import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { initializeApp } from 'firebase/app'
import { getDatabase, push, ref } from 'firebase/database'

import styles from '../styles/Home.module.css'
import config from '../config/config';
import Footer from '../components/Footer';
import { Navbar } from '../components';

// TODO: refactor this into it's own component
type ToastProps = {
  message: string;
}

type Props = ToastProps

const Toast = ({message}: Props) => {
  return (
    <div className={styles.toastContainer}>
      {message}
    </div>
  )
}

const Home: NextPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showError, setShowError] = useState('');
  const app = initializeApp(config);

  const onSubmit = () => {
    setLoading(true);
    setShowError('');
    const db = getDatabase(app);
    // Validate email
    if ((/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email))) {
      push(ref(db, '/newsletter'), {
        email: email
      }).then(() => {
        console.log('successfully added email');
        setEmail('');
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 4000);
        setLoading(false);
      });
    } else {
      setShowError('Invalid email entered')
      setTimeout(() => {
        setShowError('')
      }, 5000);
    }

    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>FilmRoom</title>
        <meta name="description" content="A platform for movies for Africans by Africans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar isLoggedIn={false} />

      <main className={styles.main}>
        {showToast && <Toast message={'Thank you for signing up for our newsletter. We\'ve got many things in store for you!'} />}
        <div className={styles.mainContainer}>
          <div>
            <h1 className={styles.title}>Cultural Diversity at its best</h1>
            <h4 className={styles.subTitle}>Watch and enjoy the best of shows in one place, where lies the birth place of humanity. <br></br>Changing the narrative, one scene at a time</h4>
            <br /><br /><br /><br />
            <p>
              <span className={styles.slogan}>BUILT FOR THE WORLD, WITH THE UBUNTU</span>
            </p>
            <span>Enter your email to join our newsletter</span>
            <p className={styles.newsletterContainer}>
              <input type="text" placeholder='e.g. john@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} className={styles.newsletterInput} />
              <button className={styles.btn} onClick={() => onSubmit()}>
                {loading ? <span>Signing up email...</span> : <span>Subscribe to newsletter</span>}
              </button>
            </p>
            {showError.length > 0 && <span className={styles.error}>Invalid email address</span>}
          </div>
        </div>
      </main>

      {/* Features */}
      <section className={`${styles.featuresContainer} container-fluid`}>
        <h3 className={styles.sectionTitle}>Our Offer</h3>
        <h5 className={styles.featuresSubTitle}>We are here to honor and preserve the great African culture and heritage</h5>
        <div className={`${styles.cardContainer} row`}>
          <div className={`${styles.card} col`}>
            <Image src="/images/4k-icon.jpg" height={50} width={50} alt="depiction of HD logo"/>
            <h3>Buy & Watch 4K Movies anywhere, anytime.</h3>
            <p >You can watch or stream movies 4 times better and enjoy every moment. We provide a plethora of content that honors great culture.</p>
          </div>
          <div className={`${styles.card} col`}>
            <Image src="/images/family-icon.png" height={40} width={40} alt="depiction of a family" />
            <h3>Share and earn with family and friends.</h3>
            <p>For every person you refer to the platform, earn a commission that gives you the ability to purchase even more content.</p>
          </div>
          <div className={`${styles.card} col`}>
            <Image src="/images/gift-icon.png" height={40} width={40} alt="depiction of a family" />
            <h3>Gift your family or friends with movie tokens.</h3>
            <p>Purchase movies on behalf of your family or friends so they can enjoy the great content that you enjoy.</p>
          </div>
          <div className={`${styles.card} col`}>
            <Image src="/images/reward-icon.jpeg" height={40} width={40} alt="depiction of laptop" />
            <h3>Great producers deserve a fair reward and here, they will get it.</h3>
            <p>We support great producers by ensuring that their content reaches the maximum audience possible at a fraction of the market cost.</p>
          </div>
        </div>
      </section>

      {/* Top Rated Movies */}
      <section className={styles.featuresContainer}>
        <h3 className={styles.sectionTitle}>Trending</h3>
        <br /><br />
        <div className={styles.cardContainer}>
          <div className={styles.movieCard1}></div>
          <div className={styles.movieCard2}></div>
          <div className={styles.movieCard3}></div>
          <div className={styles.movieCard4}></div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.contentContainer}>
          <h2>Get Our Apps on All your devices</h2>
          <p>We  make it a mission to bring the platform to all your devices from smarphone to your living room cinema. Get started with our smartphone applications on your favorite stores.</p>
          <Image src="/images/playstore-logo.png" alt="Google play store" height={110} width={380} />
          <Image src="/images/app-store-logo.png" alt="App store" height={100} width={300} />
        </div>
        <div>
          <Image src="/images/cta1.png" width={490} height={500} alt="CTA image" />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
