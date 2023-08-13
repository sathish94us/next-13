function getData(): Promise<string> {
    return new Promise((res, _) => {
        setTimeout(() => {
            console.log('Promise resolve')
            res(`Promise getData`);
        }, 3000)
    });
}

export default async function PromiseRsc() {
    console.log('Promise');
    const data = await getData();
    return <h1>Promise: {data}</h1>;
}