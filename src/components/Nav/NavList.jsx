import { Link } from "react-router-dom";

export const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Gallery", url: "/gallery" },
  { name: "Schedule", url: "/schedule" },
  { name: "Blog", url: "/blog" },
  { name: "Pricing", url: "/pricing" },
  { name: "Classes", url: "/classes" },
  { name: "Contact", url: "/contact" },
]

export function NavItem({ name, url, isMobile, className }) {
  return (
    <li style={!isMobile ? { transition: "all 0.3s" } : {}}
      className={!isMobile ? "cursor-pointer hover:text-[#ff0336]" : className}>
      <Link to={url}>{name}</Link>
    </li>
  )
}

function NavList() {
  return (
    <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
      {links.map(({ name, url }, index) => (
        <NavItem key={index} name={name} url={url} />
      ))}
    </ul>
  );
}

export default NavList;
