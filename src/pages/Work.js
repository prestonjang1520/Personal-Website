const WorkPage = () => {
    //static data for now, TODO - move to backend API call
    const pastProjects = [
        {
            title: "",
            description: ""

        }
    ];

    return (
        <>
            <h1>Past Projects</h1>
            <p>Welcome to my portfolio! Here, you'll find a collection of the projects I've worked on, showcasing my skills, creativity, and dedication to delivering high-quality results. Each project reflects my commitment to solving real-world challenges and creating impactful solutions. Browse through and see how I bring ideas to life through design, development, and innovation.</p>
            <div className="portfolio">

            </div>
        </>
        
    );
  };
  
  export default WorkPage;