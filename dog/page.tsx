import Image from "next/image";

const getDog = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    return data.message;
}

export default async function Home() {
    const dog = await getDog();
  return <>
    <h1>Dog</h1>
    <Image src={dog} alt="dog" />
  </>
}