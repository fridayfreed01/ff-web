import { Footer } from "../components/footer";
import { GameCard } from "../components/gamecard";
import { Header } from "../components/header";

export const Games = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="p-4 h-full w-full bg-[#3a3a3a]">
        <div className="p-4 lg:px-8 pb-8 flex lg:flex-row flex-col justify-center">
          <GameCard
            title="Yakuza 6"
            imageUrl="/yakuza6.jpg"
            date="Updated 6/16/23"
          />
          <GameCard
            title="Final Fantasy Type 0 HD"
            imageUrl="/fftype0.jpg"
            date="Updated 6/16/23"
          />
          <GameCard
            title="Final Fantasy XVI"
            imageUrl="/ff16.jpg"
            date="Releases 6/22/23"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
