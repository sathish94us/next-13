import Image from "next/image";
import Link from "next/link";
import Links from "./components/links";

export default function Home() {
  console.log('Home')
  return <>
    <h1>Home</h1>
    <Links />
  </>
}
