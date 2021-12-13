import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="cen">
      <div className="logo">
        {/* <h1>Ninja List</h1> */}
        <Image src="/logo.jfif" width={125} height={95} />
      </div>
      <Link href="/">
        <a>Home </a>
      </Link>
      <Link href="/About">
        <a>About</a>
      </Link>
      <Link href="/ninja">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default NavBar;
