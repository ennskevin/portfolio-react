export default function Project({ name, imgUrl, href }: any) {
    return (
        <section className="project">
            
            <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={imgUrl} alt={name}></img>
            </a>

        </section>
    )
}