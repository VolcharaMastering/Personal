import Link from "next/link"

function ProjectsLayout({children, }: {children: React.ReactNode}) {

  return (
    <section>
        <h2>List of projects</h2>
        <nav>
            <ul>
                <li>
                    <Link href="/projects">мой Проект</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/projects">мой Проект</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/projects">мой Проект</Link>
                </li>
            </ul>
            {children}
        </nav>
    </section>
  )
}

export default ProjectsLayout