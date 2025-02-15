import { projects } from "../data";

const Projects = () => {
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((p) => (
          <a href={p.url} target="_blank" rel="noreferrer" className="project">
            <img src={p.image} alt={p.title} className="img" />
            <h5>{p.title}</h5>
          </a>
        ))}
      </div>
    </section>
  );
};
export default Projects;
