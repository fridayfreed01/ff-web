import Link from "next/link";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ProjectHeader } from "../components/projectheader";
import { Head } from "../components/head";

export const PointsAndPurrs = () => {
  return (
    <div>
      <Head />
      <Header />
      <div className="w-full h-full bg-[#3a3a3a] p-10">
        <ProjectHeader
          title="Points and Purrs"
          github="https://github.com/fridayfreed01/cat-fencing"
          itch="https://bjlove2.itch.io/points-and-purrs"
        />
        <div className="flex justify-center flex-col text-lg lg:mx-20 my-5">
          <div className="rounded border border-double border-gray-100 p-4 bg-gradient-to-r from-blue-800 to-blue-900 text-xl text-gray-300 my-4">
            <p>
              Points and Purrs was a project created by "Table 6," my group in
              the Game Design 2 class at UW Madison. Our group was a team of 4
              people, a programmer (myself), a game designer (
              <Link href="https://www.linkedin.com/in/sage-fritz-4ab826207/">
                <a className="hover:underline">Sage Fritz</a>
              </Link>
              ), an artist (
              <Link href="https://www.linkedin.com/in/yue-shi-mo-60009b222/">
                <a className="hover:underline">Yue Shi Mo</a>
              </Link>
              ), and a project manager and sound designer (
              <Link href="https://www.linkedin.com/in/briannajeanlove/">
                <a className="hover:underline">Brianna Love</a>
              </Link>
              ). This project was "completed" within a semester, however there
              are still things that we as a team hope to return to later in the
              future.
            </p>
            <div className="w-full flex justify-center">
              <img
                src="/pointsandpurrs/pointsandpurrsgif.gif"
                className="w-full rounded border border-double border-gray-100 my-2"
              />
            </div>
          </div>
          <div className="rounded border border-double border-gray-100 p-4 bg-gradient-to-r from-blue-800 to-blue-900 text-xl text-gray-300 my-4">
            <p>
              Points and Purrs is a turn based game that uses preconstructed
              decks of cards for strategic gameplay. The player must use the
              cards they are dealt to counter the opponent CPU&apos;s strategy
              and deal enough damage to win battles and ultimately finish the
              game. These mechanics are expressed through 5 different cards;
              Lunge, Pounce, Parry, Sneak, and Feint.
            </p>
            <div className="flex my-4 flex-col lg:flex-row object-contain justify-center">
              <div className="object-contain h-64 w-64 flex justify-center">
                <img src="/pointsandpurrs/Lungev2.png" />
              </div>
              <div className="object-contain h-64 w-64 flex justify-center">
                <img src="/pointsandpurrs/Pouncev2.png" />
              </div>
              <div className="object-contain h-64 w-64 flex justify-center">
                <img src="/pointsandpurrs/Parryv2.png" />
              </div>
              <div className="object-contain h-64 w-64 flex justify-center">
                <img src="/pointsandpurrs/Sneakv2.png" />
              </div>
              <div className="object-contain h-64 w-64 flex justify-center">
                <img src="/pointsandpurrs/Feintv2.png" />
              </div>
            </div>
            <p>
              Each card has weaknesses and strengths against other cards, and as
              we continue to work on the game we hope to add in more cards that
              contribute to the strategic nature of the game. Further, a
              deckbuilding aspect was another facet we wanted to include, but
              due to the time constraint of the game design course, we were only
              able to accomplish the foundational gameplay.
            </p>
          </div>
          <div className="rounded border border-double border-gray-100 p-4 bg-gradient-to-r from-blue-800 to-blue-900 text-xl text-gray-300 my-4">
            <p>
              My role, in more depth, was to make sure that the game was
              playable according to the game designer&apos;s vision, as well as
              managing the GitHub for the project (Sage handled the UI
              programming). The game was built in the Unity 2D engine and
              scripted with C#. While I had made very simple games before using
              Unity, this was one of the first times I had ever been required to
              "complete" a project.
            </p>
            <div className="p-4 flex justify-center">
              <img src="/pointsandpurrs/levelselect.png" />
            </div>
            <p className="my-4">
              The core of the game is centered around a finite state machine
              that I created to direct the flow of combat. The states are as
              such: Start, Prebattle, Player, Battle, Cleanup, Win, Lose, and
              Epilogue. Right as the battle starts, the game enters the "Start"
              state, where basic level setup occurs, then it moves to
              "Prebattle," where the character you&apos;re fighting against
              makes a quip or remark before battling. Then it switches to the
              "Player" state, where it remains locked until the player plays a
              card. Once the player plays a card, the enemy AI makes it&apos;s
              choice (more on that later) and the cards are compared. Based on
              the image above, certain cards have certain outcomes when they are
              played against each other. For example, Pounce deals 3 damage to
              Lunge. This all occurs in the "Battle" state. Once the cards have
              been played, the "Cleanup" state is entered, where the game checks
              for any state based actions like winning or losing the game. A
              "Win" state is entered from Cleanup when the enemy has 0 HP
              remaining. Likewise, the "Loss" state is entered if the player has
              0 HP or if the player runs out of cards in their deck. The
              "Epilogue" state is only entered if the player wins, and similar
              to the "Prebattle," the enemy character will make some closing
              remark.
            </p>
            <div className="p-4 flex justify-center">
              <img src="/pointsandpurrs/prebattle.png" />
            </div>
            <div className="p-4 flex justify-center">
              <img src="/pointsandpurrs/battle.png" />
            </div>
            <div className="p-4 flex justify-center">
              <img src="/pointsandpurrs/win.png" />
            </div>
            <div className="p-4 flex justify-center">
              <img src="/pointsandpurrs/epilogue.png" />
            </div>
          </div>
          <div className="rounded border border-double border-gray-100 p-4 bg-gradient-to-r from-blue-800 to-blue-900 text-xl text-gray-300 my-4">
            <p>
              The AI in the game is very simple, as time limited a lot of what I
              could learn in that regard. Each enemy in the game has a set of
              pre-made patterns that are based off of the turn count. For
              example, the enemy Peanut will Lunge 3 times in a row and then
              parry on the 4th turn, then it will reset. I tried to work with
              Sage on making a reasonable balance of difficulty as you moved
              forward through the game, but in most cases things can be adjusted
              in later iterations.
            </p>
          </div>
          <div className="rounded border border-double border-gray-100 p-4 bg-gradient-to-r from-blue-800 to-blue-900 text-xl text-gray-300 my-4">
            <p>
              Overall, I think what I learned the most from the semester was the
              beauty of iterative development and being able to work on a team.
              It felt pretty unreal how much progress game development could
              make while working with a team. I expect to update this page more
              after more development, and it will be noted on the{" "}
              <a href="/" className="hover:underline">
                main page
              </a>{" "}
              if I do!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
