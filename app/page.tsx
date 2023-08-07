import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <>
  <h1>Home</h1>
  <Link href="/posts">Posts &nbsp;</Link>
  <Link href="/blogs">Blogs &nbsp;</Link>
  <Link href="/collection">Collection &nbsp;</Link>
  <Link href="/blogs/1">Blogs Slug 1 &nbsp;</Link>
  <Link href="/blogs/123">Blogs Slug 123 &nbsp;</Link>
  <Link href="/collection/123">Collection Slug &nbsp;</Link>
  <Link href="/collection/123">Collection Slug 1 &nbsp;</Link>
  <Link href="/collection/123">Collection Slug 123 &nbsp;</Link>
  <Link href="/client">Client &nbsp;</Link>
  </>
}
