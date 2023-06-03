import { Header } from "../components/header";
import { Card } from "../components/card";
import { Footer } from "../components/footer";

export const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className="p-6 w-full h-full bg-[#3a3a3a]">
        <div className="flex justify-center text-2xl font-bold text-gray-300">
          Recent Posts
        </div>
      </div>
      <Footer />
    </div>
  );
};
