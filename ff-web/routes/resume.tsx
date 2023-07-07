import { Footer } from "../components/footer";
import { Head } from "../components/head";
import { Header } from "../components/header";
import { ResumeBody } from "../components/resumebody";

export const Resume = () => {
  return (
    <div>
      <Head />
      <Header />
      <ResumeBody />
      <Footer />
    </div>
  );
};
