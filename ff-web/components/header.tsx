import Link from "next/link";

export const Header = () => {
  return (
    <div className="rounded bg-cobalt-blue border border-double shadow-xl border-gray-100 md:sticky top-0">
      <nav
        className="md:relative max-w-7xl flex md:flex-row flex-col"
        aria-label="Top"
      >
        <div className="flex justify-center md:justify-start mx-4 my-2 md:my-4">
          <Link href="/">
            <a>
              <img
                src="/fridayfreed.jpg"
                className="rounded w-32 border border-gray-100"
              />
            </a>
          </Link>
        </div>
        <div className="flex items-center md:justify-start justify-center">
          <div className="lg:block flex flex-col md:flex-row text-center">
            <Link href="/aboutme">
              <a className="text-base font-medium text-white hover:text-indigo-50 mx-4 my-2">
                About Me
              </a>
            </Link>
            <Link href="/games">
              <a className="text-base font-medium text-white hover:text-indigo-50 mx-4 my-2">
                Games I&apos;m Playing
              </a>
            </Link>
            <Link href="/devlog">
              <a className="text-base font-medium text-white hover:text-indigo-50 mx-4 my-2">
                Dev Log
              </a>
            </Link>
            <Link href="/resume">
              <a className="text-base font-medium text-white hover:text-indigo-50 mx-4 my-2">
                Resume
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
