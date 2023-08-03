'use client';

import { Metadata } from "next";

// Return a list of `params` to populate the [slug] dynamic segment
export function generateStaticParams() {
    console.log('generateStaticParams CollectionSlug');
    return [1, 2, 3, 4, 5].map(number => ({slug: number + ''}));
}

async function getData(value: string): Promise<string> {
    return new Promise((res) => {
        setTimeout(() => {
            res(`Promise ${value}`);
        }, 3000)
    })
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    return {
        title: 'Collection Test Dynamic ' + params.slug,
        description: 'Collection Test Dynamic Description : ' + params.slug
    }
}

export default async function CollectionSlug({params}: {params: { slug: string }}) {
    const slug = params.slug;
    console.log('Collection slug: ', slug);
    const data = await getData(slug);
    return <h1>CollectionSlug: {data}</h1>;
}