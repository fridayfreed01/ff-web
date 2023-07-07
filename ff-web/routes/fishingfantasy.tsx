import { Footer } from "../components/footer";
import { Head } from "../components/head";
import { Header } from "../components/header";
import { ProjectHeader } from "../components/projectheader";

export const FishingFantasy = () => {
  return (
    <div>
      <Head />
      <Header />
      <div className="w-full h-full bg-[#3a3a3a] p-10">
        <ProjectHeader
          title="Fishing Fantasy"
          github="https://github.com/fridayfreed01/fishing-rpg"
          itch="https://fridayfreed.itch.io/fishing-fantasy"
        />
      </div>
      <Footer />
    </div>
  );
};
