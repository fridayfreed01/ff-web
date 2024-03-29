import { Header } from "../components/header";
import { Card } from "../components/card";
import { Footer } from "../components/footer";
import { Head } from "../components/head";

export const IndexPage = () => {
  return (
    <div>
      <Head />
      <Header />
      <div className="p-6 w-full min-h-screen flex flex-grow flex-col bg-[#3a3a3a]">
        <div className="flex justify-start items-start text-2xl font-bold text-gray-300">
          Recent Posts
        </div>
        <div className="flex md:flex-row flex-col justify-center">
          <Card
            title="Points and Purrs"
            imageUrl="/PointsAndPurrs.png"
            category={{ name: "Game Project", href: "#" }}
            href="/pointsandpurrs"
            description="A 2D game made with Unity for a Game Design project at UW Madison"
            datetime=""
            date="Updated 6/20/2023"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
