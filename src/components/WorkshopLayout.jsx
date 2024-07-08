const posts = [
    
    {
        id: 1,
        title: 'Workshop 01',
        href: '#',
        description:
          'Workshop will be conducted as online session. ',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        time: '9:00 AM - 11:00 AM',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: ' Dr. Asara Senaratne',
          role: 'College of Science and Engineering,Flinders University,South Australia.',
          href: '#',
          imageUrl:
            'img/speakers/Asara.jpeg',
        },
      },
     
    
    // More posts...
  ]
  
  export default function WorkshopLayout() {
    return (
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-20">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-blue-primary sm:text-4xl">Available Workshops</h2>
            
          </div>
          {/* hr */}
      <div
        className="mx-auto h-0.5 bg-gradient-to-r from-blue-300 to-pink-300 mb-8 mt-5"
        style={{ width: "80%" }}
      ></div>
      {/* hr */}
          <div className="mx-auto mt-10 grid justify-center max-w-6xl gap-8 pt-10 sm:mt-16 sm:pt-16 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <p className="text-xl font-semibold text-gray-900 mt-5">{post.title}</p>
                <div className="flex-shrink-0 mt-5">
                  <img className="h-50 w-full object-cover" src={post.author.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-600">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                      {post.author.role.split(',').map((role, index) => (
                      <p key={index} className="text-gray-600">{role.trim()}</p>
                    ))}
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center justify-center">
                    <div className="flex space-x-2 text-sm text-gray-700">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                  
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  