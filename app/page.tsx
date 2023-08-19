import Image from "next/image";
import Link from "next/link";
import Links from "./components/links";
import styles from './styles.module.css'

export default function Home() {
  console.log('Home')
  return <div className={styles.container}>
    <h1>Home</h1>
    <Links />
  </div>
}
