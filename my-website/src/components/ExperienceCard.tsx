
interface ExperienceCardProps {
    title: string;
    organization: string;
    date: string;
    description: string;
    details?: string;
}

function ExperienceCard({ title, organization, date, description, details }: ExperienceCardProps) {
    return (
        <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <p className="text-lg font-bold text-gray-900">{title}</p>
                <p className="text-gray-600 font-semibold whitespace-nowrap">{date}</p>
            </div>
            <p className="text-gray-600 text-sm mb-2">{organization}</p>
            <p className="text-gray-700 leading-relaxed">{description}</p>
            {details && (
                <p className="text-gray-600 text-sm mt-2 italic">{details}</p>
            )}
        </div>
    );
}

export default ExperienceCard;
