import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image"; // Import the Image component
import Button from "./button";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <Link href="/" className="block" aria-label="Cruip">
            <div className="shrink-0 mr-4 flex gap-2 items-center">
              {/* Logo */}
              <Image
                src="/images/Logo.png"
                alt="Logo"
                width={90}
                height={90}
                className="rounded-full"
              />{" "}
              {/* Adjust width and height according to your logo size */}
              <span className="text-2xl font-bold mt-2">CODE CONNECT</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <Button>Sign up</Button>
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
