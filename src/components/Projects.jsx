import React from "react";

const projects = [
  {
    id: 1,
    name: "Annual Science Fair",
    description: "Showcasing innovative student projects",
  },
  {
    id: 2,
    name: "Community Outreach Program",
    description: "Engaging with local schools to promote STEM",
  },
  {
    id: 3,
    name: "Robotics Workshop",
    description: "Hands-on learning with cutting-edge robotics",
  },
];

function Projects() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold">Our Projects</h1>
      <p className="mb-6">
        Here are some of the exciting projects our club is currently working on:
      </p>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="rounded bg-white p-4 shadow">
            <h2 className="mb-2 text-xl font-semibold">{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
