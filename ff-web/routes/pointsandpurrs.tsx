import Link from "next/link";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const PointsAndPurrs = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-full bg-[#3a3a3a] p-10">
        <div className="flex justify-center lg:justify-start text-3xl lg:mb-4 font-bold text-gray-300">
          Points and Purrs
        </div>
        <div className="flex justify-center flex-col lg:flex-row text-lg lg:mx-20 my-5">
          <div className="rounded border border-double border-gray-100 p-4 bg-gradient-to-r from-blue-800 to-blue-900 text-xl text-gray-300">
            <p>
              Points and Purrs was a project created by "Table 6," my group in
              the Game Design 2 class at UW Madison. Our group was a team of 4
              people, a programmer (myself), a game designer (
              <Link href="https://www.linkedin.com/in/sage-fritz-4ab826207/">
                Sage Fritz
              </Link>
              ), an artist (
              <Link href="https://www.linkedin.com/in/yue-shi-mo-60009b222/">
                Yue Shi Mo
              </Link>
              ), and a project manager (
              <Link href="https://www.linkedin.com/in/briannajeanlove/">
                Brianna Love
              </Link>
              ). This project was "completed" within a semester, however there
              are still things that we as a team hope to return to later in the
              future.
            </p>
          </div>
          <div className="">
            <img src="/pointsandpurrsgif.gif" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
