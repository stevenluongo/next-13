import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products/Chips">Chips</Link>
        </li>
        <li>
          <Link href="/artist">Artist</Link>
        </li>
      </ul>
    </nav>
  );
}
