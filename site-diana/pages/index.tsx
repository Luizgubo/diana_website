import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site Diana</title>
        <meta name="description" content="Diana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}
