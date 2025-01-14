
import { useQuery } from "@tanstack/react-query";
import config from "../config";

// Function to fetch resume link
const fetchResumeLink = async () => {
  const response = await fetch(`${config.Backend_Api}resumes`);
  if (!response.ok) {
    throw new Error("Error fetching resume link");
  }
  const data = await response.json();
  return data;
};


export const useResumeLink = () => {
  return useQuery({
    queryKey: ["resumeLink"],
    queryFn: fetchResumeLink,
    staleTime: Infinity, // Serve stale data always while fetching
    cacheTime: 10 * 60 * 1000, // Retain cache for 10 minutes
    retry: 3, // Retry fetching 3 times on failure
  });
};
