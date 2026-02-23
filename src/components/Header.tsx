import logo from '../assets/folder2.png'

export default function Header() {
    return (
        <>
            <header className="site-header">

                <div className="header-top">

                    <div className="header-top-content">
                        <img className="header-logo" src={logo} alt=""></img>
                        <h1>Portfolio</h1>
                    </div>
                    
                </div>

                <div className="header-banner">
                    <span className="header-banner-content">kevin enns</span>
                </div>

            </header>
        </>
    )
}