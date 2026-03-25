
interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    date?: string;
}

function ProjectCard({ title, description, technologies, link, date }: ProjectCardProps) {
    return (
        <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <p className="text-lg font-bold text-gray-900">{title}</p>
                {date && <p className="text-gray-600 font-semibold whitespace-nowrap">{date}</p>}
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            {link && link.trim() !== "" ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                    View Project →
                </a>
            ) : (
                <p className="text-gray-400 font-medium">Link not available</p>
            )}
        </div>
    );
}

export default ProjectCard;
