import { FaCalendar, FaCalendarAlt } from "react-icons/fa";

function Timeline() {
  const timeLine = [
    {
      date: "31th October",
      title: "Full Paper Submission",
      description: "",
    },
    {
      date: "20th November",
      title: "Notification of Acceptance of Full Papers",
      description: "",
    },
    {
      date: "20th November",
      title: "Registration Open",
      description: "",
    },
    {
      date: "25th November",
      title: "Camera Ready Submission",
      description: "",
    },
    {
      date: "25th November",
      title: "Registration Close",
      description: "",
    },
    {
      date: "5th December",
      title: "Pre-conference Workshop",
      description: "",
    },
  ];
  return (
    <div className="w-full bg-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex-col justify-center">
          <h2 className="flex justify-center text-3xl font-bold tracking-tight text-center text-blue-primary sm:text-4xl">
            Conference Timeline
          </h2>
          <p className="flex justify-center mt-2 text-lg leading-8 text-center text-gray-primary">
            Pathway to the success with the most awaited research conferece
          </p>
        </div>
        <ol className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {timeLine.map((item, index) => (
            <li className="relative mb-6 sm:mb-0" key={index}>
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                  <FaCalendar className="text-blue-800" />
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-300"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-md font-semibold text-gray-primary">
                  {item.date}
                </h3>
                <time className="block mb-2 text-xl font-bold leading-none text-black-primary mt-2">
                  {item.title}
                </time>
                <p className="text-base font-normal text-gray-500">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="flex justify-center mt-12 items-center">
          <div className="w-80 sm:w-96 h-28 bg-gray-200 rounded-3xl justify-center items-center flex px-2 sm:px-4">
            <div className=" flex items-center justify-center w-16 h-16 rounded-full bg-blue-primary">
              <FaCalendarAlt className="text-white text-3xl" />
            </div>
            <div className="flex flex-col justify-center px-4">
              <h3 className="text-md font-semibold text-gray-primary">
                6th December
              </h3>
              <time className="block mb-2 text-xl font-bold leading-none text-black-primary mt-2">
                Conference Date
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
