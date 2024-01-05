import { getProjects } from "@/api/getProjects";
import Link from "next/link";

async function ProjectsLayout({ children }: { children: React.ReactNode }) {
  const myProjects = await getProjects();
  return (
    <section>
      <h2>List of projects</h2>
      <nav>
        <ul>
          {myProjects.map((project: object) => (
            <li key={project.id}>
              <Link href={`/projects/${project.id}`}>
                {project.fields.name}
              </Link>
            </li>
          ))}
        </ul>
        {children}
      </nav>
    </section>
  );
}

export default ProjectsLayout;
