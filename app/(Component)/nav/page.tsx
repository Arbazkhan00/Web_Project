import Link from "next/link";

export default function Nav() {
  return (
    <nav className="mt-4 px-4 sm:px-8 lg:px-36 sticky top-0 bg-none">
      <div className="flex justify-between items-center">
        <div className="text-2xl -mt-1">LOGO</div>
        <ul className="flex space-x-7">
          <NavItem href="/">HOME</NavItem>
          <NavItem href="/about">ABOUT</NavItem>
          <NavItem href="/page">PAGE</NavItem>
          <NavItem href="/services">SERVICES</NavItem>
          <NavItem href="/portfolio">PORTFOLIO</NavItem>
          <NavItem href="/blog">BLOG</NavItem>
          <NavItem href="/contact">CONTACT</NavItem>
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

function NavItem({ href, children }) {
  return (
    <li className="hover:underline">
      <Link href={href}>
        {children}
      </Link>
    </li>
  );
}
