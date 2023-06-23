import Link from "next/link";

export const Header = () => {
  return (
    <div className="rounded bg-cobalt-blue border border-double shadow-xl border-gray-100 sticky top-0">
      <nav className="relative max-w-7xl flex flex-row" aria-label="Top">
        <Link href="/">
          <a>
            <img
              src="/fridayfreed.jpg"
              className="rounded grid justify-right w-32 m-2 border border-gray-100"
            />
          </a>
        </Link>
        <div className="flex items-center">
          <div className="ml-10 space-x-8 lg:block">
            <Link href="/aboutme">
              <a className="text-base font-medium text-white hover:text-indigo-50">
                About Me
              </a>
            </Link>
            <Link href="/games">
              <a className="text-base font-medium text-white hover:text-indigo-50">
                Games I&apos;m Playing
              </a>
            </Link>

            <Link href="/devlog">
              <a className="text-base font-medium text-white hover:text-indigo-50">
                Dev Log
              </a>
            </Link>

            <Link href="/resume">
              <a className="text-base font-medium text-white hover:text-indigo-50">
                Resume
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
