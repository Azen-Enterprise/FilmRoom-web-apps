import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FilmRoom</title>
        <meta name="description" content="A platform for movies for Africans by Africans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div>
            <h1 className={styles.title}>All Your Greatest Shows</h1>
            <h4 className={styles.subTitle}>In one place with great plans starting at just 2000 XAF/month</h4>
            <br /><br /><br /><br />
            <p>
              <span className={styles.slogan}>BUILT FOR AFRICANS, BY AFRICANS</span>
            </p>
            <p>
              <button className={styles.btn}>Get Started</button>
            </p>
          </div>
        </div>
      </main>

      {/* Features */}
      <section className={styles.featuresContainer}>
        <h3 className={styles.sectionTitle}>Features</h3>
        <h5 className={styles.featuresSubTitle}>Built just for you with your needs at heart</h5>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Image src="/images/hd-icon.png" height={50} width={50} alt="depiction of HD logo"/>
            <h3>Buy & Watch High Definition Movies</h3>
            <p>You can watch very good movies in HD and enjoy every moment</p>
          </div>
          <div className={styles.card}>
            <Image src="/images/family-icon.png" height={40} width={40} alt="depiction of a family" />
            <h3>Share the fun with your family members</h3>
            <p>You can watch very good movies in HD and enjoy every moment</p>
          </div>
          <div className={styles.card}>
            <Image src="/images/laptop-icon.png" height={40} width={40} alt="depiction of laptop" />
            <h3>Get the best right on your devices</h3>
            <p>You can watch very good movies in HD and enjoy every moment</p>
          </div>
        </div>
      </section>

      {/* Top Rated Movies */}
      <section className={styles.featuresContainer}>
        <h3 className={styles.sectionTitle}>Top Rated Movies</h3>
        <br /><br />
        <div className={styles.cardContainer}>
          <div className={styles.movieCard1}></div>
          <div className={styles.movieCard2}></div>
          <div className={styles.movieCard3}></div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.contentContainer}>
          <h2>Get Our Apps on All your devices</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriesLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          <Image src="/images/playstore-logo.png" alt="Google play store" height={110} width={380} />
          <Image src="/images/app-store-logo.png" alt="App store" height={100} width={300} />
        </div>
        <div>
          <Image src="/images/cta.png" width={490} height={500} alt="CTA image" />
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.branding}>
          <span className={styles.logo}>
            <Image src="/images/logos/footer-logo.png" alt="Film room logo" height={25} width={25} />
          </span>
          <span>Filmroom &copy; Copyright 2022</span>
        </div>
        <div className={styles.footerContent}>
          <span>Privay Policy</span>
          <span>Terms of Service</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
      </footer>
    </div>
  )
}

export default Home
