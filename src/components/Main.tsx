import Project from "./Project"
import { projectData } from "../projectData"
import { nanoid } from "nanoid"

export default function Main() {
    const projectElements = projectData.map(project => {
        return <Project 
                    key={nanoid()}
                    imgUrl={project.imgUrl}
                    href={project.href}
                />
    })

    return (
        <>
            <main className="main-section">
                <div className="container">


                    <section className="projects">
                        <div className="container projects-flex">
                            {projectElements}
                        </div>
                    </section>
                    
                </div>
            </main>
        </>
    )
}