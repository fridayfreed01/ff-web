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
                    <a href="#" className="text-base font-medium text-white hover:text-indigo-50"> Solutions </a>

                    <a href="#" className="text-base font-medium text-white hover:text-indigo-50"> Pricing </a>

                    <a href="#" className="text-base font-medium text-white hover:text-indigo-50"> Docs </a>

                    <a href="#" className="text-base font-medium text-white hover:text-indigo-50"> Company </a>
                </div>
            </div>
            </nav>
        </div>
    )
}