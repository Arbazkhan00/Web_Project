import Link from "next/link";

export default function Nav() {
  return (
    <nav className="mt-4 px-4 sm:px-8 lg:px-36 sticky top-0 bg-none">
      <div className="flex justify-between items-center">
        <div className="text-2xl -mt-1">LOGO</div>
        <ul className="flex space-x-7">
         <li> <Link href="/">HOME</Link></li>
         <li><Link href="/about">ABOUT</Link></li>
         <li>  <Link href="/page">PAGE</Link></li>
         <li><Link href="/services">SERVICES</Link></li>
          <li><Link href="/portfolio">PORTFOLIO</Link></li>
          <li> <Link href="/blog">BLOG</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
        </ul>
        <div>
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="text-black rounded-2xl p-1 -mt-10"
          />
        </div>
      </div>
    </nav>
  );
}


