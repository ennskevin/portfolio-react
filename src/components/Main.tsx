import Project from "./Project"

export default function Main() {
    const projects = []
    const projectElements = []

    return (
        <>
            <main className="main-section">
                <div className="container">

                    <h2>Web Projects</h2>

                    <section className="projects">
                        <Project />
                    </section>
                    
                </div>
            </main>
        </>
    )
}