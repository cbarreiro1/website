// my-website/src/Header.tsx

import headshot from '/headshot.jpeg';
import banner from '../assets/vt-banner.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    
    const links = [
        { label: "About Me", path: "/" },
        { label: "Experience", path: "/experience" },
        { label: "Projects", path: "/projects" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <div 
            className="flex flex-col bg-cover bg-center relative md:sticky md:top-0 z-50 shadow-lg"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-8 py-6 px-6 sm:px-10 md:px-12 bg-gradient-to-r from-slate-900/90 to-slate-800/90">
                <img
                    className="h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 rounded-full object-cover border-4 border-white shadow-lg transition-all duration-500 flex-shrink-0"
                    src={headshot}
                    alt="CJ Barreiro"
                />
                <div className="flex flex-col items-start justify-center gap-1">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">CJ Barreiro</h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-200">Software Engineering Graduate Student</p>
                </div>
            </div>
            <nav className="flex flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 py-4 px-6 sm:px-10 md:px-12 bg-slate-900/95 border-t border-slate-700">
                {links.map(link => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`text-sm sm:text-base md:text-lg font-medium transition-all duration-100 pb-1 ${
                            location.pathname === link.path
                                ? 'text-white border-b-2 border-blue-500'
                                : 'text-gray-100 hover:text-white hover:border-b-2 hover:border-blue-500'
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default Header;
