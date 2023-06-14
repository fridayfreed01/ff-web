import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ProjectHeader } from "../components/projectheader";

export const NoteTaker = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-full bg-[#3a3a3a] p-10">
        <ProjectHeader title="Note Taker" github="" />
      </div>
      <Footer />
    </div>
  );
};
