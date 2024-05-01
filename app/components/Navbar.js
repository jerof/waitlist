import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-[10vh] flex lg:mt-2 mx-10 lg:items-center justify-center mt-5">
      <Link href="/" className="font-extrabold lg:text-2xl text-5xl">
        Wait<span className="font-extralight">list</span>
      </Link>
    </nav>
  );
}
