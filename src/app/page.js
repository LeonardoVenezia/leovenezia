import Image from 'next/image'
import styles from './page.module.scss'
import CTABlog from './components/CTABlog';
// import ContactForm from './components/ContactForm';
import Portfolio from './components/Portfolio';

export default function Home() {
  return (
    <main className={styles.Home}>

      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Leonardo Venezia</h1>
          <p className={styles.subtitle}>Frontend engineer</p>
        </div>
      </header>
      <div className={styles.ctas}>
        <div className={styles.imgContainer}>
          <Image src="/profile.png" fill alt="Profile photo" />
        </div>
        <CTABlog />
        <CTABlog text="Linkedin" link="https://www.linkedin.com/in/leovenezia/" />
        <CTABlog text="Resume" link="/Resume Leonardo Venezia.pdf" />
      </div>
      <Portfolio />
      <div className={styles.meCard}>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            <span className={styles.textOne}>6 years of experience. </span>
            <span className={styles.textTwo}>Numerous projects. </span>
            <span className={styles.textThree}>Several friends. </span>
            <span className={styles.textFour}>Improving the world one line of code at a time.</span>
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/profile.png" height={125} width={125} alt="Profile photo" />
        </div>
      </div>
      <div className={styles.ctas}>
        <CTABlog />
        <CTABlog text="Linkedin" link="https://www.linkedin.com/in/leovenezia/" />
        <CTABlog text="Resume" link="/Resume Leonardo Venezia.pdf" />
      </div>
      {/* <ContactForm /> */}
    </main>
  )
}
