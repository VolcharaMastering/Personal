import { Metadata } from "next";
import { getProjects } from "@/api/getProjects";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My projects",
  description: "Page with my projects",
};

async function Projects() {

  const myProjects = await getProjects();
  return (<section>
    <h2>My Projects</h2>
    <ul>
      {myProjects.map((project: object) =>(
        <li key={project.id}>
          <Link href={`/projects/${project.id}`}>{project.fields.name}</Link>
        </li>
      ))}
    </ul>
    </section>);
}

export default Projects;
