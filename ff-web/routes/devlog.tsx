import { Header } from "../components/header";
import { Card } from "../components/card";
import { Footer } from "../components/footer";

export const DevLogPage = () => {
  return (
    <div>
      <Header />
      <div className="p-4 md:px-8 pb-8 w-full h-full bg-[#3a3a3a]">
        <div className="p-4 md:px-8 pb-8">
          <Card
            title="Points and Purrs"
            imageUrl="/sethpfp.jpg"
            category={{ name: "Game Project", href: "#" }}
            href="/pointsandpurrs"
            description="A 2D game made with Unity for a Game Design project at UW Madison"
            datetime=""
            date="2/1/2023"
          />
          <Card
            title="Fishing Fantasy"
            imageUrl=""
            category={{ name: "Game Project", href: "#" }}
            href="/fishingfantasy"
            description="A personal 2D game project made with Unity"
            datetime=""
            date="2/1/2023"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
