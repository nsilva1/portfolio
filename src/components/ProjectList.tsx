import { useState, useCallback, useEffect } from 'react';
import { IGithubRepository } from '../lib/interfaces';
import { Loader } from './Loader';

const ProjectList = () => {
  const [projects, setProjects] = useState<IGithubRepository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://api.github.com/users/nsilva1/repos'
      );
      const data: IGithubRepository[] = await response.json();
      // Filter out repositories that don't have a homepage
      const filteredData = data.filter((repo) => {
        return (
          repo.homepage && repo.name !== 'portfolio' && repo.name !== 'nsilva1'
        );
      });
      setProjects(filteredData);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : projects.length === 0 ? (
        <div className='text-center text-gray-500 dark:text-gray-400'>
          No projects found.
        </div>
      ) : (
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 cursor-pointer'
            >
              <h3 className='text-xl font-semibold mb-2'>{project.name}</h3>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                {project.description || 'No description available.'}
              </p>
              <div className='flex justify-between items-center'>
                <a
                  href={project.homepage}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline flex items-center gap-2'
                >
                  <span>View Live Project</span>
                </a>
                <a
                  href={project.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline flex items-center gap-2'
                >
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { ProjectList };
