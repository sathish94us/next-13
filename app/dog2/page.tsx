import Image from "next/image";
import Links from "../components/links";

const getDog = async () => {
  console.log('getDog Dog 2')
    const res = await fetch('https://dog.ceo/api/breeds/image/random', { cache: 'no-store' });
    const data = await res.json();
    return data.message;
}

export default async function Dog() {
  console.log('Dog 2')
    const dog = await getDog();
  return <>
    <h1>Dog</h1>
    <Image src={dog} alt="dog" width={500} height={500} />
    <Links />
  </>
}