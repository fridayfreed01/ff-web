import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ResumeBody } from "../components/resumebody";

export const Resume = () => {
  return (
    <div className="flex flex-col h-screen bg-[#3a3a3a]">
      <Header />
      <div className="p-4">
        <ResumeBody />
      </div>
      <Footer />
    </div>
  );
};
