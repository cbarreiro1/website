
 // my-website/src/pages/AboutMe.tsx
// About me/home page

function AboutMe() {
    return (
        <div className="flex flex-col px-6 sm:px-10 md:px-20 py-10 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                About Me
            </h1>

            <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                    Hi! I'm CJ Barreiro, a Software Developer II at LMI,
                    where I focus primarily on backend development for RAPTR
                    using Python. I'm passionate about building reliable,
                    maintainable software and solving complex technical
                    problems. I enjoy continuously expanding my technical
                    skills and contributing to software solutions that address
                    real-world challenges.
                </p>

                <p className="text-base md:text-lg">
                    My experience spans backend and full-stack development,
                    including API development, database design, and building
                    web applications. I've worked with technologies such as
                    Python, Django, FastAPI, Java, Spring Boot, React, and
                    TypeScript. I'm particularly interested in software
                    engineering practices that promote clean code,
                    maintainability, and long-term scalability.
                </p>

                <p className="text-base md:text-lg">
                    I earned my Master of Engineering in Computer Science
                    Applications, with a concentration in Software Engineering,
                    and my Bachelor of Science in Computer Science, with a
                    minor in Music Technology, from Virginia Tech. During my
                    time there, I contributed to a retail inventory system
                    for Marine Corps Community Services, developed a full-stack
                    budgeting application, and worked on a mobile application
                    for Appalachian Trail hikers as an Undergraduate Research
                    Assistant in the Human-Computer Interaction lab.
                </p>

                <p className="text-base md:text-lg">
                    Before joining LMI, I worked as a Technology Intern at the
                    Republican National Committee, where I helped develop and
                    maintain full-stack web applications using Python and
                    Django. I also served as a Teaching Assistant for Data
                    Structures and Algorithms, helping students strengthen
                    their programming and problem-solving skills. Through
                    these experiences and my involvement with Sigma Phi
                    Epsilon, I've developed a strong appreciation for
                    collaboration, communication, and continuous learning.
                </p>

                <p className="text-base md:text-lg">
                    I'm excited to continue growing as a software engineer,
                    take on new technical challenges, and build impactful
                    software alongside talented teams.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
