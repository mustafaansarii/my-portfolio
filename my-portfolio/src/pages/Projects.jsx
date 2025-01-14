import React, { useEffect, useState } from 'react';
import config from '../config';

import { useProjects } from '../Auth/ProjectAuth';  

export default function Project() {
  const { data: projects = [], isFetching, isLoading, error } = useProjects();

  if (isLoading) {
    return <p>Loading projects...</p>; 
  }

  if (error) {
    return <p>Error loading projects.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-400">Projects</h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4 max-w-screen-lg backdrop-blur-sm">
        {projects.map((project) => (
          <div
            key={project.id}
            className="dark:border-gray-500 border-2 border-black rounded-lg shadow dark:hover:bg-gray-700"
          >
            <a href={project.liveLink}>
              <img
                className="rounded-t-lg h-[200px] w-full object-cover"
                src={project.imgSrc}
                alt={project.title}
              />
            </a>
            <div className="p-5">
              <a href={project.liveLink}>
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
                  href={project.liveLink}
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
