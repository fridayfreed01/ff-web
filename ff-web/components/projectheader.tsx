import Link from "next/link";

export const ProjectHeader = (props: any) => {
  return (
    <div>
      <div
        key={props.title}
        className="flex justify-center lg:justify-start text-3xl lg:mb-4 font-bold text-gray-300"
      >
        {props.title}
      </div>
      <div className="flex flex-row lg:justify-start justify-center text-gray-300">
        <div className="lg:mr-4 hover:underline">
          <Link href={props.github}>Github</Link>
        </div>
        {!!props.itch && (
          <div className="mx-4 hover:underline">
            <Link href={props.itch}>Itch.io</Link>
          </div>
        )}
      </div>
    </div>
  );
};
