import { getProjects } from "@/api/getProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My projects",
  description: "Page with my projects",
};

function Projects() {
  const myProjects = getProjects();
  console.log("Projects", myProjects);
  return <div>My Projects</div>;
}

export default Projects;
