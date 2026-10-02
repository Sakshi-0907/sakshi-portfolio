// Header.tsx — the top navigation. Links jump to section ids on the page.
import { profile } from "../data/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="header">
      <a href="#top" className="logo" aria-label={`${profile.name}, back to top`}>SG</a>
      <nav aria-label="Main">
        <ul className="nav-list">
          {/* .map() turns each item in the array into a list element.
              React needs a unique "key" on each one to track it. */}
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
