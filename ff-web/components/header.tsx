import Link from "next/link"

export const Header = () => {
    return(
        <div className="bg-cobalt-blue">
            <nav
                className="relative max-w-7xl flex flex-row"
                aria-label="Top"
                >
                <img src="./fridayfreed.jpg" className="grid justify-right w-20 m-2 border border-black"/>
            <div className="flex items-center">
                <div className="hidden ml-10 space-x-8 lg:block">
                    <Link href="#">
                        <a className="text-base font-medium text-white hover:text-indigo-50">
                            Games I'm Playing
                        </a>
                    </Link>

                    <Link href="/devlog">
                        <a className="text-base font-medium text-white hover:text-indigo-50">
                            Dev Log
                        </a>
                    </Link>

                    <a href="#" className="text-base font-medium text-white hover:text-indigo-50">
                        Links
                    </a>
                </div>
            </div>
            </nav>
        </div>
    )
}