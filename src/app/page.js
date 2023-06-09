import Image from 'next/image'
import styles from './page.module.scss'
import CTABlog from './components/CTABlog';


export default function Home() {
  return (
    <main className={styles.Home}>
      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Leonardo Venezia</h1>
          <p className={styles.subtitle}>Frontend engineer</p>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/profile.jpg" fill />
        </div>
      </header>
      <CTABlog />
    </main>
  )
}
