import React from 'react';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: 'Online Python compiler',
      description: 'Write and run your Python code using our online compiler. Enjoy additional features like code sharing, dark mode.',
      imgSrc: 'https://mustafaansarii.web.app/assets/images/projects/pyonline.png',
      GitHubLink: 'https://github.com/mustafaansarii/Python-Online-Compiler',
      LiveLink: '#',
    },
    {
      id: 2,
      title: 'Latest advancements in AI technology',
      description: 'Exploring the cutting-edge developments in artificial intelligence and machine learning.',
      imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      GitHubLink: '#',
      LiveLink: '#',
    },
    {
      id: 3,
      title: 'Blockchain technology: A revolution',
      description: 'How blockchain is transforming industries and driving new innovations.',
      imgSrc: 'https://mustafaansarii.web.app/assets/images/projects/remove%20background.png',
      GitHubLink: 'https://github.com/mustafaansarii/Remove-Background-of-images',
      LiveLink: '#',
    },
    {
      id: 4,
      title: 'Quantum Computing Breakthroughs',
      description: 'A look into the recent advancements in quantum computing and its potential applications.',
      imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      GitHubLink: '#',
      LiveLink: '#',
    },
    {
      id: 5,
      title: 'Sustainable Tech Innovations',
      description: 'Innovations in technology that are helping to create a more sustainable future.',
      imgSrc: 'https://mustafaansarii.web.app/assets/images/projects/weather.webp',
      GitHubLink: 'https://github.com/mustafaansarii/driveprice--machine-learning-for-car-valuation',
      LiveLink: '#',
    },
    {
      id: 6,
      title: 'Cybersecurity Trends 2021',
      description: 'How organizations are adapting to the latest cybersecurity threats and challenges.',
      imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      GitHubLink: '#',
      LiveLink: '#',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-400">Projects</h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4 max-w-screen-lg backdrop-blur-sm ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="dark:border-gray-500 border-2 border-black rounded-lg shadow dark:hover:bg-gray-700"
          >
            <a href={project.LiveLink}>
              <img
                className="rounded-t-lg h-[200px] w-full object-cover"
                src={project.imgSrc}
                alt={project.title}
              />
            </a>
            <div className="p-5">
              <a href={project.LiveLink}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
                  {project.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex space-x-4">
                {/* GitHub Button */}
                <a
                  href={project.GitHubLink}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-900"
                >
                  GitHub
                </a>
                
                {/* Live Demo Button */}
                <a
                  href={project.LiveLink}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
