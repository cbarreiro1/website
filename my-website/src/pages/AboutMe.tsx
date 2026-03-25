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
                    Hi! I'm CJ Barreiro, a Virginia Tech graduate student in the final stages of completing my Master of Engineering in Computer Science with a concentration in Software Engineering. I'm passionate about building scalable, robust software solutions and am actively seeking a software engineering position to launch my career. Throughout my academic journey, I've developed a strong foundation in full-stack development, software architecture, and modern development practices.
                </p>
                <p className="text-base md:text-lg">
                    My technical expertise spans across multiple tech stacks including Spring Boot, React, FastAPI, and Java. I have hands-on experience developing full-stack web applications, from designing intuitive user interfaces to architecting scalable backend services. Currently, I'm working on my capstone project—a retail inventory system for Marine Corps Community Services that leverages Spring Boot, React, and machine learning for automated detection. I'm also developing a budgeting application and recently completed a comprehensive bookstore management system, each showcasing different aspects of modern software development.
                </p>
                <p className="text-base md:text-lg">
                    Beyond academics, I'm deeply involved in my campus community. As an active member of Sigma Phi Epsilon (ΣΦΕ), my fraternity, I've developed strong leadership and teamwork skills. I've served as an Undergraduate Teaching Assistant for CS 3114 (Data Structures and Algorithms) and worked as an Undergraduate Research Assistant in Virginia Tech's Human-Computer Interaction lab, where I led a team of students in developing a mobile application for Appalachian Trail hikers. Additionally, I interned at the Republican National Committee as a Technology Intern, where I contributed to developing an internal full-stack web application using Django.
                </p>
                <p className="text-base md:text-lg">
                    I'm committed to writing clean, maintainable code and staying current with industry best practices. I thrive in collaborative environments and am eager to contribute my skills and passion for software engineering to a forward-thinking organization.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;