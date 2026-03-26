// my-website/src/pages/Contact.tsx
// Contact page

import { useCallback } from 'react';
import data from '../data/db.json' with { type: 'json' };
import { useAnalytics } from '../hooks/useAnalytics';

function Contact() {
    const { trackPDFInteraction, trackExternalLink } = useAnalytics();

    const handlePDFPreview = useCallback(() => {
        trackPDFInteraction('preview');
    }, [trackPDFInteraction]);

    const handlePDFDownload = useCallback(() => {
        trackPDFInteraction('download');
    }, [trackPDFInteraction]);

    const handleEmailClick = useCallback(() => {
        trackExternalLink('email');
    }, [trackExternalLink]);

    const handleLinkedInClick = useCallback(() => {
        trackExternalLink('linkedin');
    }, [trackExternalLink]);

    return (
        <div className="flex flex-col px-6 sm:px-10 md:px-20 py-10 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
                Contact Information
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Email
                    </h2>
                    <a 
                        href={`mailto:${data.contact.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleEmailClick}
                        className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
                    >
                        {data.contact.email}
                    </a>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        LinkedIn
                    </h2>
                    <a 
                        href={data.contact.linkedin}
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={handleLinkedInClick}
                        className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
                    >
                        LinkedIn Profile
                    </a>
                </div>
            </div>
            
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Resume
                </h2>
                
                {/* Mobile: Show button instead of iframe */}
                <div className="md:hidden flex flex-col gap-4">
                    <p className="text-gray-700 text-lg mb-2">
                        Click the button below to preview or download my resume:
                    </p>
                    <div className="flex flex-col gap-3">
                        <a
                            href={data.contact.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handlePDFPreview}
                            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                        >
                            Preview PDF
                        </a>
                        <a
                            href={data.contact.resume}
                            download="CJ_Barreiro_Resume.pdf"
                            onClick={handlePDFDownload}
                            className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors text-center"
                        >
                            Download
                        </a>
                    </div>
                </div>
                
                {/* Desktop: Show iframe */}
                <div className="hidden md:block">
                    <div>
                        <a
                            href={data.contact.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            download="CJ_Barreiro_Resume.pdf"
                            onClick={handlePDFDownload}
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                            Download Resume
                        </a>
                    </div>
                    <iframe
                        src={data.contact.resume}
                        className="w-full h-screen border border-gray-300 rounded-lg mt-6"
                        title="Resume"
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;