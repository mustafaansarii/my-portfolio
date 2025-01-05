import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa"; // Import trash icon for deletion
import { AiOutlineClose } from "react-icons/ai"; // Close icon for popup
import config from "../config.js";
const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [socials, setSocials] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [newData, setNewData] = useState({}); // Holds form data
  const [section, setSection] = useState(""); // Tracks which section is being added to
  const [error, setError] = useState(""); // State for error handling

  // Fetch data on component mount
  useEffect(() => {
    fetchData("projects", setProjects);
    fetchData("resumes", setResumes);
    fetchData("socials", setSocials);
  }, []);

  const fetchData = async (endpoint, setter) => {
    try {
      const response = await axios.get(`${config.Backend_Api}${endpoint}`);
      setter(response.data);
    } catch (error) {
      setError(`Error fetching ${endpoint}: ${error.message}`);
      console.error(`Error fetching ${endpoint}:`, error);
    }
  };

  const handleAddClick = (sectionName) => {
    setSection(sectionName);
    setFormVisible(true);
    setNewData({}); // Reset form data
    setError(""); // Reset error message
  };

  const handleFormSubmit = async () => {
    try {
      await axios.post(`${config.Backend_Api}${section}`, newData);
      alert("Data added successfully!");
      fetchData(section, getSetter(section)); // Refresh data
      setFormVisible(false);
    } catch (error) {
      setError(`Error adding data: ${error.message}`);
      console.error("Error adding data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${config.Backend_Api}${section}/${id}`);
      alert("Data deleted successfully!");
      fetchData(section, getSetter(section)); // Refresh data
    } catch (error) {
      setError(`Error deleting data: ${error.message}`);
      console.error("Error deleting data:", error);
    }
  };

  const getSetter = (sectionName) => {
    switch (sectionName) {
      case "projects":
        return setProjects;
      case "resumes":
        return setResumes;
      case "socials":
        return setSocials;
      default:
        return () => {};
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 dark:bg-gray-900">
      <h1 className="text-4xl font-semibold text-center text-black dark:text-white mb-10 mt-28">Admin Pannel</h1>

      <div className="container max-w-4xl mx-auto p-6 shadow-lg rounded-lg space-y-8 bg-white dark:bg-gray-800">
        {/* Projects Table */}
        <div className="section">
          <h2 className="text-2xl font-bold text-black dark:text-white">Projects</h2>
          <button
            onClick={() => handleAddClick("projects")}
            className="mt-2 px-4 py-2 bg-blue-600 dark:text-white rounded-md hover:bg-blue-700"
          >
            Add Project
          </button>
          <table className="min-w-full mt-4 border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left text-black dark:text-white">Sr. No.</th>
                <th className="py-2 px-4 border-b text-left text-black dark:text-white">Title</th>
                <th className="py-2 px-4 border-b text-left text-black dark:text-white">Description</th>
                <th className="py-2 px-4 border-b text-left text-black dark:text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project.id}>
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{project.title}</td>
                  <td className="py-2 px-4 border-b">{project.description}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Resumes Table */}
        <div className="section">
          <h2 className="text-2xl font-bold text-black dark:text-white">Resumes</h2>
          <button
            onClick={() => handleAddClick("resumes")}
            className="mt-2 px-4 py-2 bg-green-600 dark:text-white rounded-md hover:bg-green-700"
          >
            Add Resume
          </button>
          <table className="min-w-full mt-4 border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left text-black dark:text-white">Sr. No.</th>
                <th className="py-2 px-4 border-b text-left text-black dark:text-white">Resume Link</th>
                <th className="py-2 px-4 border-b text-left text-black dark:text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {resumes.map((resume, index) => (
                <tr key={resume.id}>
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">
                    <a
                      href={resume.resumeLink}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resume.resumeLink}
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleDelete(resume.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Socials Table */}
        <div className="section">
          <h2 className="text-2xl font-bold text-black dark:text-white">Socials</h2>
          <button
            onClick={() => handleAddClick("socials")}
            className="mt-2 px-4 py-2 bg-indigo-600 dark:text-white rounded-md hover:bg-indigo-700"
          >
            Add Social
          </button>
          <table className="min-w-full mt-4 border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left text-black dark:text-white">Sr. No.</th>
                <th className="py-2 px-4 border-b text-left text-black dark:text-white">Link</th>
                <th className="py-2 px-4 border-b text-left text-black dark:text-white">Image Source</th>
                <th className="py-2 px-4 border-b text-left text-black dark:text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {socials.map((social, index) => (
                <tr key={social.id}>
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">
                    <a
                      href={social.link}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.link}
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b">{social.imgSrc}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleDelete(social.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {formVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full dark:bg-gray-700">
            <button
              onClick={() => setFormVisible(false)}
              className="absolute top-2 right-2 text-gray-700 dark:text-white text-xl"
            >
              <AiOutlineClose />
            </button>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Add New {section}</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {/* Dynamically render form fields based on the section */}
              {section === "projects" && (
                <>
                  <input
                    type="text"
                    placeholder="Title"
                    value={newData.title || ""}
                    onChange={(e) =>
                      setNewData({ ...newData, title: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  />
                  <textarea
                    placeholder="Description"
                    value={newData.description || ""}
                    onChange={(e) =>
                      setNewData({ ...newData, description: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="URL"
                    value={newData.url || ""}
                    onChange={(e) =>
                      setNewData({ ...newData, url: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  />
                </>
              )}
              {section === "resumes" && (
                <>
                  <input
                    type="text"
                    placeholder="Resume Link"
                    value={newData.resumeLink || ""}
                    onChange={(e) =>
                      setNewData({ ...newData, resumeLink: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  />
                </>
              )}
              {section === "socials" && (
                <>
                  <input
                    type="text"
                    placeholder="Social Link"
                    value={newData.link || ""}
                    onChange={(e) =>
                      setNewData({ ...newData, link: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Image Source"
                    value={newData.imgSrc || ""}
                    onChange={(e) =>
                      setNewData({ ...newData, imgSrc: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  />
                </>
              )}

              {error && <p className="text-red-600">{error}</p>}
              <button
                onClick={handleFormSubmit}
                className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
