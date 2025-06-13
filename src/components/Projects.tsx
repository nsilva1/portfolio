import { ProjectList } from "./ProjectList"

const Projects = () => {
  return (
    <section className='py-24 translate-y-4 transition-all duration-500'>
        <div className='container mx-auto px-4'>
            <h2 className='text-4xl font-bold text-center mb-4'>Projects</h2>
            <p className='text-xl text-center text-gray-600 dark:text-gray-400'>Here are some of my recent projects:</p>
            <ProjectList />
        </div>
    </section>
  )
}

export { Projects }