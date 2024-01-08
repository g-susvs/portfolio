import { FC, useState } from 'react';

export const Navbar: FC = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleClink = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className='navbar'>
            <nav className='navbar__container'>
                <div className='navbar__title' >
                    <span>Portafolio</span>
                    <span>.</span>
                </div>
                <div className={`navbarMenu ${(showMenu) && 'navbarMenu--show'}`}>
                    <a href="#home" className='navbarMenu__item text-center' onClick={handleClink}>INICIO</a>
                    <a href="#aboutme" className='navbarMenu__item text-center' onClick={handleClink}>SOBRE MI</a>
                    <a href="#skills" className='navbarMenu__item text-center' onClick={handleClink}>HABILIDADES</a>
                    <a href="#projects" className='navbarMenu__item text-center' onClick={handleClink}>PROYECTOS</a>
                </div>
                <button
                    className={`buttonMenu hamburger hamburger--collapse ${showMenu && 'is-active'}`}
                    type="button"
                    aria-label="Menu"
                    onClick={handleClink}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>

            </nav>

        </header>
    )
}
