import Link from "next/link";

export default function Links() {
    console.log('Links')
    return <>
        <Link href="/posts" prefetch={false}>Posts &nbsp;</Link>
        <Link href="/blogs" prefetch={false}>Blogs &nbsp;</Link>
        <Link href="/collection" prefetch={false}>Collection &nbsp;</Link>
        <Link href="/blogs/1" prefetch={false}>Blogs Slug 1 &nbsp;</Link>
        <Link href="/blogs/123" prefetch={false}>Blogs Slug 123 &nbsp;</Link>
        <Link href="/collection/1">Collection Slug 1&nbsp;</Link>
        <Link href="/collection/123" prefetch={false}>Collection Slug 123 &nbsp;</Link>
        <Link href="/client" prefetch={false}>Client &nbsp;</Link>
    </>
}
