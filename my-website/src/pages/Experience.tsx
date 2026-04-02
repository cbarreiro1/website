// my-website/src/pages/Experience.tsx
// Experience page

import EducationCard from '../components/EducationCard';
import ExperienceCard from '../components/ExperienceCard';
import data from '../data/db.json' with { type: 'json' };

function Experience() {

    return (
        <div className="flex flex-col px-6 sm:px-10 md:px-20 py-10 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
                Experience
            </h1>
            
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-500">
                    Education
                </h2>
                <div className="space-y-6">
                    {data.education.map(edu => (
                        <EducationCard
                            key={edu.id}
                            school={edu.school}
                            degree={edu.degree}
                            concentration={edu.concentration}
                            date={edu.date}
                        />
                    ))}
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-500">
                    Experience
                </h2>
                <div className="space-y-6">
                    {data.experience.map(exp => (
                        <ExperienceCard
                            key={exp.id}
                            title={exp.title}
                            organization={exp.organization}
                            date={exp.date}
                            description={exp.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;