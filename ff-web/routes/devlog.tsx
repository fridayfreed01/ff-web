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
                            title="Points and Purrs"
                            imageUrl=""
                            category={{ name: "Game Project", href: "#" }}
                            href="/pointsandpurrs"
                            description="A 2D game made with Unity for a Game Design project at UW Madison"
                            datetime=""
                            date="2/1/2023"
                        />
                        <Card
                            title="Fishing RPG (Name TBD)"
                            imageUrl=""
                            category={{ name: "Game Project", href: "#" }}
                            href="/fishingrpg"
                            description="A personal 2D game project made with Unity"
                            datetime=""
                            date="2/1/2023"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}