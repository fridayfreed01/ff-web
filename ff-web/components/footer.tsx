export const Footer = () => {
  return (
    <div className="rounded border border-double border-gray-100 bg-cobalt-blue bg-cover bg-blend-multiply border-b-2 py-[6vh] text-gray-100 text-lg ">
      <div className="mx-4 sm:text-center md:text-justify">
        Seth Freitag, fridayfreed.com, 2023
      </div>
      <div className="py-4 flex flex-row items-center">
        <a href="https://github.com/fridayfreed01/">
          <img className="mx-4 w-8 h-8" src="/github-mark-white.png" />
        </a>
        <a href="https://www.linkedin.com/in/seth-freitag-5b1586235/">
          <img className="w-20 h-20" src="/linkedin.png" />
        </a>
        <a href="https://www.youtube.com/channel/UCkSEs-JTLLZW_z6Ywzz1xVg">
          <img className="w-20 h-20" src="whiteyoutubelogo.png" />
        </a>
      </div>
    </div>
  );
};
