const WorkPage = () => {
    //static data for now, TODO - move to backend API call
    const pastProjects = [
        {
            title: "Government of Alberta Ministry of Childcare",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "",
            imageAlt: ""
        },
        {
            title: "FortisBC Website",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "",
            imageAlt: ""
        }
    ];

    return (
        <>
            <h1>Past Projects</h1>
            <p>Welcome to my portfolio! Here, you'll find a collection of the projects I've worked on, showcasing my skills, creativity, and dedication to delivering high-quality results. Each project reflects my commitment to solving real-world challenges and creating impactful solutions. Browse through and see how I bring ideas to life through design, development, and innovation.</p>
            <div className="projectsWrapper">
                {pastProjects.map((project, index) => (
                    <div className="project">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <img src={project.image} alt={project.imageAlt} />
                    </div>
                ))}
            </div>
        </>
        
    );
  };
  
  export default WorkPage;