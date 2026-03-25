// my-website/src/pages/Projects.tsx
// Projects page

import ProjectCard from '../components/ProjectCard';
import data from '../data/db.json' with { type: 'json' };

function Projects() {

    return (
        <div className="flex flex-col px-6 sm:px-10 md:px-20 py-10 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
                Projects
            </h1>

            <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    GitHub
                </h2>
                <a
                    href={data.contact.github}
                    className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
                >
                    GitHub Profile
                </a>
            </div>
            
            <div className="space-y-6">
                {data.projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        date={project.date}
                        link={project.link || undefined}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;