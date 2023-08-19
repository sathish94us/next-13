// import { Metadata } from "next";

// // Return a list of `params` to populate the [slug] dynamic segment
// export function generateStaticParams() {
//     console.log('generateStaticParams Blog Slug');
//     return [1, 2, 3, 4, 5].map(number => ({ slug: number + '' }));
// }

// async function getData(value: string): Promise<string> {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res(`Promise ${value}`);
//         }, 3000)
//     })
// }

// export default async function BlogSlug({ params }: { params: { slug: string } }) {
//     const slug = params.slug;
//     console.log('Blog slug: ', slug);
//     const data = await getData(slug);
//     return <h1>BlogSlug: {data}</h1>;
// }


// Check for generateStaticParams page are created automatically when revalidateTime expires or page creation happens at request time
import Links from "@/app/components/links";
import { Metadata } from "next";

// Return a list of `params` to populate the [slug] dynamic segment
export function generateStaticParams() {
    console.log('generateStaticParams Blog Slug');
    return [1, 2, 3, 4, 5].map(number => ({ slug: number + '' }));
}

async function getData(value: string): Promise<string> {
    console.log('getData Blog')
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + value, { next: { revalidate: 3 } });
    const data = await res.json();
    return data.title;
}

export default async function BlogSlug({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    console.log('Blog slug: ', slug);
    const data = await getData(slug);
    return <>
        <h1>BlogSlug: {data}</h1>
        <Links /></>;
}