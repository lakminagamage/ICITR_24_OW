const posts = [
  {
    id: 1,
    title: "Workshop 01",
    href: "#",
    description: "Workshop will be conducted as online session. ",
    date: "Dec 05, 2024",
    datetime: "2020-03-16",
    time: "9:00 AM - 11:00 AM",
    category: { title: "Marketing", href: "#" },
    author: {
      name: " Dr. Asara Senaratne",
      role: "College of Science and Engineering,Flinders University,South Australia.",
      href: "#",
      imageUrl: "img/speakers/Asara.jpeg",
    },
  },
  {
    id: 2,
    title: "Context-Aware Computing and IoT",
    href: "#",
    description: "Workshop will be conducted as online session. ",
    date: "Dec 05, 2024",
    datetime: "2020-03-16",
    time: "13:00 PM - 14:30 PM",
    category: { title: "Marketing", href: "#" },
    author: {
      name: " Dr. Shakthi Weerasinghe",
      role: "Researcher,Swinburne University of Technology, Australia",
      href: "#",
      imageUrl: "img/speakers/shak.jpg",
    },
  },
];

export default function WorkshopLayout() {
  return (
    <div className="relative isolate bg-white px-6 pb-24 sm:pb-32 lg:px-20 pt-8">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-blue-primary sm:text-4xl">
            Upcoming Workshops
          </h2>
        </div>
        {/* hr */}
        <div
          className="mx-auto h-0.5 bg-gradient-to-r from-blue-300 to-pink-300 mb-8 mt-5"
          style={{ width: "80%" }}
        ></div>
        {/* hr */}
        <div className="mt-10 flex flex-wrap justify-center w-full pt-4 sm:pt-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="w-[350px] flex flex-col overflow-hidden rounded-lg shadow-lg mx-4 my-4"
            >
              <p className="text-lg font-semibold text-gray-900 mt-5 mx-1">
                {post.title}
              </p>
              <div className="w-full mt-5">
                <img
                  className="h-50 w-full object-cover"
                  src={post.author.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    <a
                      href={post.author.href}
                      className="hover:underline text-xl"
                    >
                      {post.author.name}
                    </a>
                    {post.author.role.split(",").map((role, index) => (
                      <p key={index} className="text-gray-600">
                        {role.trim()}
                      </p>
                    ))}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-center">
                  <div className="flex space-x-2 text-sm text-black">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.time}</span>
                  </div>
                </div>

                <a href={post.href} className="block mt-2">
                  <p className="mt-3 text-gray-500 text-sm">
                    {post.description}
                  </p>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
