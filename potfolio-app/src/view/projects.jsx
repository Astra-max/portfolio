import "../../src/styles/projects.css";

export default function Projects() {
  const projects = [
    { id: 1, image: "bluewebsite.jpg", message: "ecommerce" },
    { id: 2, image: "black2.jpg", message: "ecommerce" },
    { id: 3, image: "blackecomm.jpg", message: "ecommerce" },
    { id: 4, image: "movie.jpg", message: "movie-app" },
    { id: 5, image: "ux.jpg", message: "ecommerce" },
  ];
  return (
    <>
      <div className="container">
        <div className="persuade-client">
          <span className="linethru">
            <p className="add-size">My amazing projects</p>
          </span>
        </div>
        <div className="card-display">
          <div className="project-images">
            {projects.map((project) => (
              <img
                key={project.id}
                className="size-image"
                src={project.image}
                alt={project.message}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
