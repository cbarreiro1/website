
interface EducationCardProps {
    school: string;
    degree: string;
    concentration?: string;
    date: string;
}

function EducationCard({ school, degree, concentration, date }: EducationCardProps) {
    return (
        <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                    <p className="text-xl font-bold text-gray-900">{school}</p>
                    <p className="text-gray-700 font-semibold">{degree}</p>
                    {concentration && (
                        <p className="text-gray-600 text-sm">{concentration}</p>
                    )}
                </div>
                <p className="text-gray-600 font-semibold whitespace-nowrap">{date}</p>
            </div>
        </div>
    );
}

export default EducationCard;
