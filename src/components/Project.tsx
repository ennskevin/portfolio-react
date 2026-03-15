export default function Project({ name, imgUrl, href }: any) {
    function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault()

        const container = (e.currentTarget.closest(
            '.project'
        ) as HTMLElement)

        if (!container) return

        container.style.transform = 'scaleY(0.1)'

        setTimeout(() => {
            container.style.transform = 'scaleY(0.15) scaleX(0)'
        }, 100)

        setTimeout(() => {
            container.style.opacity = '0'
            window.open(href, '_blank')
            setTimeout(() => {
                container.style.transform = ''
                container.style.opacity = ''
                container.style.transition = ''
            }, 50)
        }, 200)

    }


    return (
        <section className="project">
            <div className="project-wrapper">
                <a 
                    className="project-link" 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={handleClick}
                >
                    <img src={imgUrl} alt={name}></img>
                </a>
            </div>

        </section>
    )
}