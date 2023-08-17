import Image from 'next/image'
import styles from './page.module.css';
import Hero from '../public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerItems}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.description}>Turning ideas into reality. We bring together teams from the 
          global tech industry.
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.bannerItems}>
        <Image src={Hero} alt='hero' className={styles.bannerImg} />
      </div>
    </div>
  )
}
