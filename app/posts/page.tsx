import Links from "../components/links";

async function getPosts() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: {
      revalidate: 5,
    },
  });
  const data = await response.json();
  return data;
}

export default async function Posts() {
  console.log('Posts')
  const dog = await getPosts();
  return (
    <>
      <h1>Posts</h1>
      <img src={dog.message} />
      <Links />
    </>
  );
}
