import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="navbar">
      <div className="logo">
        <Link href="/">
          Logo
        </Link>
      </div>
      <div className="menu">
        <Link href="/praxis">
          About
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/services">
          Services
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </div>
    </nav>
    </main>
  );
}
