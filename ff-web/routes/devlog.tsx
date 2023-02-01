import {Header} from "../components/header";
import {Card} from "../components/card";

export const DevLogPage = () => {
    return (
        <div>
            <Header/>
            <div className="bg-glossy-blue p-4 md:px-8 pb-8">
                <div className="p-4 md:px-8 pb-8">
                    <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        <Card
                            title="Game Design 2 Project"
                            imageUrl=""
                            category={{ name: "Project", href: "#" }}
                            href="/"
                            description=""
                            datetime=""
                            date="2/1/2023"
                        />
                        <Card
                            title="Fishing RPG"
                            imageUrl=""
                            category={{ name: "Project", href: "#" }}
                            href="/"
                            description=""
                            datetime=""
                            date="2/1/2023"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}