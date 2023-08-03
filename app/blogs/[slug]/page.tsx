// Return a list of `params` to populate the [slug] dynamic segment
export function generateStaticParams() {
    console.log('generateStaticParams Blog Slug');
    return [1, 2, 3, 4, 5].map(number => ({slug: number + ''}));
}

export async function getData(value: string): Promise<string> {
    return new Promise((res) => {
        setTimeout(() => {
            res(`Promise ${value}`);
        }, 3000)
    })
}

export default async function BlogSlug({params}: {params: { slug: string }}) {
    const slug = params.slug;
    console.log('slug: ', slug);
    const data = await getData(slug);
    return <h1>BlogSlug: {data}</h1>;
}