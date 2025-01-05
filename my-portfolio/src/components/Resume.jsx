import React from "react";

export default function Resume() {
    const timelineData = [
        {
          year: "2019",
          title: "Secondary Education",
          institution: "SMN High School, Sitamarhi",
          description: "Active member of the Science Club. Won multiple quiz competitions and participated in various extracurricular activities."
        },
        {
          year: "2021",
          title: "Senior Secondary Education",
          institution: "SMN Senior Secondary School, Sitamarhi",
          description: "Represented the school at regional quiz competitions and focused on subjects related to science and mathematics."
        },
        {
          year: "2026",
          title: "Bachelor of Technology (Computer Science)",
          institution: "Maharishi Markandeshwar (Deemed to be University), Mullana-Ambala",
          description: "Specialized in Data Science with a CGPA of 8.5. Completed multiple projects in Machine Learning, Data Analysis, and Spring Boot Development."
        },
        {
          year: "2024",
          title: "Software Engineer Intern (Dec 2024 - Present)",
          institution: "Bluestock™ Fintech, Pune",
          description: "Working on real-time stock market analytics and trading platforms using FastAPI and React. Focused on optimizing system performance and enhancing the user experience."
        }
      ];
      

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-900">
      <h2 className="text-4xl font-bold text-center dark:text-gray-50 mb-8">Resume</h2>
      <div className="relative">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 100 500"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M50 0 C70 100, 30 200, 50 300 C70 400, 30 500, 50 600"
            stroke="#38bdf8"
            strokeWidth="15"
            fill="none"
          />
        </svg>
        <div className="relative z-10 space-y-12 sm:space-y-16">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } items-center transition-all ease-in-out duration-500 transform hover:scale-105`}
            >
              <div className="flex flex-col items-center w-full sm:w-1/2">
                {index % 2 === 0 && (
                  <div className="border-2 border-black dark:border-white p-4 sm:p-6 rounded-xl shadow-xl transition-transform transform hover:translate-x-4 hover:shadow-2xl backdrop-blur-sm">
                    <h3 className="text-sm sm:text-xl font-semibold text-teal-700">{item.title}</h3>
                    <p className="text-xs sm:text-md mt-2 dark:text-gray-50">{item.description}</p>
                    <p className="mt-2 text-xs sm:text-sm text-teal-600">{item.institution}</p>
                  </div>
                )}
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-500 rounded-full flex-shrink-0 mx-6">
                <span className="text-xs sm:text-xl dark:text-white flex justify-center items-center">{item.year}</span>
              </div>
              <div className="flex flex-col items-center w-full sm:w-1/2">
                {index % 2 !== 0 && (
                  <div className="border-2 border-black dark:border-white p-4 sm:p-6 rounded-xl shadow-xl transition-transform transform hover:-translate-x-4 hover:shadow-2xl backdrop-blur-sm">
                    <h3 className="text-sm sm:text-xl font-semibold text-teal-700">{item.title}</h3>
                    <p className="text-xs sm:text-md mt-2 dark:text-gray-50">{item.description}</p>
                    <p className="mt-2 text-xs sm:text-sm text-teal-600">{item.institution}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
