import logo from '../assets/folder2.png'

export default function Header() {
    return (
        <>
            <header>

                <div className="header-top">
                    <div className="container">

                        <img className="header-logo" src={logo} alt=""></img>
                        <h1>Portfolio</h1>
                    </div>
                </div>

                <div className="header-banner">
                    <span className="programmer-name container">kevin enns</span>
                </div>

            </header>
        </>
    )
}