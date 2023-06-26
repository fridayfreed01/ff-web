import Link from "next/link";
import { Spotify } from "react-spotify-embed";

export const About = () => {
  return (
    <div className="w-full h-full bg-[#3a3a3a] p-10">
      <div className="rounded flex flex-col">
        <div className="flex justify-center lg:justify-start text-3xl lg:mb-4 font-bold text-gray-300">
          About Me
        </div>
        <div className="flex justify-center flex-col lg:flex-row text-lg lg:mx-20 my-5">
          <div className="rounded border border-double border-gray-100 p-4 bg-gradient-to-r from-blue-800 to-blue-900 text-xl text-gray-300">
            Welcome to my website! My name is Seth Freitag, but on most other
            platforms, I go by FridayFreed. In my free time, I love to play and
            create video games, program, read, and consume coffee daily at an
            alarming amount. If the site&apos;s theme didn&apos;t give it away,
            my favorite game series at the moment is Final Fantasy, and my
            favorite genre, more generally, is RPGs.
            <p className="pt-2">
              I made this site to display my projects, as well as what I&apos;m
              up to in the world of gaming, or just in the regular, physical
              world. Programming is a great passion of mine, as I love all of
              the creative aspects that come with it. Hopefully this site
              provides a deep dive into those passions.
            </p>
          </div>
          <img
            src="/sethpfp5.jpg"
            className="rounded object-contain lg:h-64 lg:w-128 my-2 lg:my-0 lg:ml-4"
          />
        </div>
        <div className="flex justify-center flex-col lg:flex-row text-lg lg:mx-20">
          <img
            src="/sethpfp6.jpg"
            className="rounded object-contain lg:h-64 lg:w-128 my-2 lg:my-0 lg:mr-4 flex"
          />
          <div className="rounded border border-double border-gray-100 p-4 bg-gradient-to-r from-blue-800 to-blue-900 text-xl text-gray-300">
            I am a recent graduate from the University of Wisconsin - Madison
            with a BA degree in Computer Science. Since starting my computer
            science degree, I gained a love for user experience and creative
            development. This love became a passion for front-end and game
            development. In my past, I interned at a small start-up in my
            hometown, Sheboygan Falls, WI, called Rustle Up, where I learned the
            foundation of my skills in React.js. In my own pursuits, I&apos;ve
            taught myself C#, Typescript, and C++, and I&apos;ve been learning
            the ins and outs of Unity Engine and Unreal Engine. In addition,
            I&apos;ve had the opportunity to work with Shopbop (Amazon) through
            a Senior Capstone course at UW Madison where I picked up on many
            common agile development methodologies such as Scrum, Kanban, and
            DevOps. You can see more about the projects and games I&apos;ve made
            below.
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Link href="/devlog">
            <button className="lg:my-0 my-4 lg:mt-4 w-1/2 lg:w-1/4 border border-double border-gray-100 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 rounded text-gray-100 text-2xl shadow">
              Dev Log
            </button>
          </Link>
        </div>
        <div className="flex lg:justify-start justify-center text-3xl lg:my-4 lg:mt-8 font-bold text-gray-300">
          Fun Facts
        </div>
        <div className="flex justify-start text-lg lg:mx-20 my-5">
          <div className="rounded w-full grid lg:grid-cols-2 border border-double border-gray-100 p-4 bg-gradient-to-r from-blue-800 to-blue-900 text-xl text-gray-300">
            <ul className="col-span-1 list-disc px-4">
              <li>My favorite band is Cage the Elephant</li>
              <li>My favorite book is 1984 by George Orwell</li>
              <li>My favorite game is Final Fantasy X</li>
              <li>I like to longboard when the weather is nice</li>
            </ul>
            <ul className="col-span-1 list-disc px-4">
              <li>I have 2 dogs named Tucker and Bandit</li>
              <li>
                My favorite movie is Maquia: When the Promised Flower Blooms
              </li>
              <li>I am an avid Magic the Gathering player</li>
              <li>I love curry of any variety</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row text-lg md:mx-20 my-5">
          <div className="rounded my-2 md:mx-20 lg:mx-4 flex justify-center border border-double border-gray-100 p-4 bg-gradient-to-r from-blue-800 to-blue-900 text-xl text-gray-300">
            <img
              src="sethpfp.jpg"
              className="rounded object-contain md:h-64 md:w-64"
            />
          </div>
          <div className="rounded my-2 md:mx-20 lg:mx-4 flex justify-center border border-double border-gray-100 p-4 bg-gradient-to-r from-blue-800 to-blue-900 text-xl text-gray-300">
            <img
              src="tucker.jpg"
              className="rounded object-contain md:h-64 md:w-64"
            />
          </div>
          <div className="rounded my-2 md:mx-20 lg:mx-4 flex justify-center border border-double border-gray-100 p-4 bg-gradient-to-r from-blue-800 to-blue-900 text-xl text-gray-300">
            <img
              src="sethpfp4.jpg"
              className="rounded object-contain  md:h-64 md:w-64"
            />
          </div>
        </div>
        <div className="flex lg:justify-start justify-center text-3xl lg:my-4 my-2 lg:mt-8 font-bold text-gray-300">
          Playlists
        </div>
        <div className="flex xl:flex-row justify-center flex-col gap-x-4 gap-y-4 lg:grid lg:grid-cols-2">
          <Spotify
            link="https://open.spotify.com/playlist/3iu0lkxAthnZA4WRjEIkLx?si=2bbcfb98018f4088"
            className="md:mx-4 xl:my-0 my-2 w-full lg:col-span-1 "
          />
          <Spotify
            link="https://open.spotify.com/playlist/3hJdcFgZsBQCiWGg0yhGOx?si=d1c40a2155bf4c19"
            className="md:mx-4 xl:my-0 my-2 w-full lg:col-span-1"
          />
          <Spotify
            link="https://open.spotify.com/playlist/3mjKT8rVD01lfqDEb0gRu5?si=c20492ce5f114755"
            className="md:mx-4 xl:my-0 my-2 w-full lg:col-span-1"
          />
          <Spotify
            link="https://open.spotify.com/playlist/4CWxWWv3jaUYextGHo5syX?si=67571c82c7b94e48"
            className="md:mx-4 xl:my-0 my-2 w-full col-span-1"
          />
        </div>
      </div>
    </div>
  );
};
