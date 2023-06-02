import {Header} from "../components/header";
import {Card} from "../components/card";
import { Footer } from "../components/footer";
import { About } from "../components/about";

export const IndexPage = () => {
    return (
        <div>
            <Header/>
            <div className="bg-cobalt-blue md:px-8 pb-8"></div>
            <About/>
            <div className="m-6">
                <div className="flex justify-center text-2xl font-bold">
                    Explore the page
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}