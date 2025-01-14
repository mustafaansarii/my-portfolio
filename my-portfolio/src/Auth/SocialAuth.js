
import { useQuery } from "@tanstack/react-query";
import config from "../config";

const fetchSocialIcons = async () => {
  const response = await fetch(`${config.Backend_Api}socials`);
  if (!response.ok) {
    throw new Error("Error fetching social icons");
  }
  return response.json();
};

export const useSocialIcons = () => {
  return useQuery({
    queryKey: ["socialIcons"],
    queryFn: fetchSocialIcons,
    staleTime: Infinity, // Serve stale data always while fetching
    cacheTime: 10 * 60 * 1000, // Retain cache for 10 minutes
    retry: 3, // Retry fetching 3 times on failure
  });
};
