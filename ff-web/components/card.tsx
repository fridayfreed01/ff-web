export const Card = (props: any) => {
  return (
    <div
      key={props.title}
      className="flex flex-col flex-shrink-1 flex-wrap m-5 md:w-1/4 rounded-lg shadow-lg shadow-gray-800 overflow-hidden bg-gradient-to-r from-blue-800 to-blue-900 border border-double border-gray-100"
    >
      <div className="p-6 flex flex-col">
        <div className="">
          <p className="text-sm font-medium text-gray-300">
            <a href={props.category.href} className="hover:underline">
              {props.category.name}
            </a>
          </p>
          <a href={props.href} className="block mt-2">
            <p className="text-xl font-semibold text-gray-300">{props.title}</p>
            <p className="my-3 text-base text-gray-300">{props.description}</p>
            <img className="rounded" src={props.imageUrl} />
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="ml-3">
            <div className="flex space-x-1 text-sm text-gray-300">
              <time dateTime={props.datetime}>{props.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>fridayfreed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
