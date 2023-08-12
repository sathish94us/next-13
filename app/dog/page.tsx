import Image from "next/image";

const getDog = async () => {
  console.log('getDog Dog 1')
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    return data.message;
}

export default async function Dog() {
  console.log('Dog 1')
    const dog = await getDog();
  return <>
    <h1>Dog</h1>
    <Image src={dog} alt="dog" width={500} height={500} />
  </>
}