import { Footer } from "../components/footer";
import { Head } from "../components/head";
import { Header } from "../components/header";
import { ProjectHeader } from "../components/projectheader";

export const NoteTaker = () => {
  return (
    <div>
      <Head />
      <Header />
      <div className="flex flex-grow flex-col  items-center w-full min-h-screen bg-[#3a3a3a] p-10">
        <ProjectHeader title="Note Taker" github="" />
        Article Photo by{" "}
        <a
          className="hover:underline"
          href="https://unsplash.com/@clemhlrdt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Clément Hélardot
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/95YRwf6CNw8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
      <Footer />
    </div>
  );
};
