import { Header } from "../components/header";
import { Card } from "../components/card";
import { Footer } from "../components/footer";
import { Head } from "../components/head";

export const DevLogPage = () => {
  return (
    <div>
      <Head />
      <Header />
      <div className="p-4 pb-4 w-full min-h-screen flex flex-grow bg-[#3a3a3a]">
        <div className="p-4 h-full flex justify-center lg:px-8 pb-8 md:flex-row flex-col">
          <Card
            title="Points and Purrs"
            imageUrl="/PointsAndPurrs.png"
            category={{ name: "Game Project", href: "#" }}
            href="/pointsandpurrs"
            description="A 2D game made with Unity for a Game Design project at UW Madison"
            datetime=""
            date="Updated 6/20/2023"
          />
          <Card
            title="Fishing Fantasy"
            imageUrl=""
            category={{ name: "Game Project", href: "#" }}
            href="/fishingfantasy"
            description="A personal 2D game project made with Unity"
            datetime=""
            date="Updated 6/14/2023"
          />
          <Card
            title="Note Taking App"
            imageUrl="/codingphoto.jpg"
            category={{ name: "Project", href: "#" }}
            href="/note-taker"
            description="A self-taught note taking app made with C# and MySQL"
            datetime=""
            date="Updated 6/14/2023"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
