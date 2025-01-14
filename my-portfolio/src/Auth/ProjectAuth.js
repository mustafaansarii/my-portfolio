import { useQuery } from '@tanstack/react-query';
import config from '../config';

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetch(`${config.Backend_Api}projects`);
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      return response.json();
    },
    staleTime: Infinity, 
    cacheTime: 10 * 60 * 1000, 
    retry: 3, 
  });
};
