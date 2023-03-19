import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.center}>
        <h1 className="text-3xl font-bold underline">LXS</h1>
      </div>

      <div className={styles.grid}>
       
      </div>
    </main>
  )
}
