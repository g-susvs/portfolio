import { FC, useState } from 'react';

export const Navbar: FC = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleClink = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className='navbar'>
            <nav className='navbar__container'>
                <h5 className='navbar__title'>Portafolio</h5>
                <div className={`navbarMenu ${(!showMenu) && 'navbarMenu--hidden'}`}>
                    <a href="#home" className='navbarMenu__item text-center' onClick={handleClink}>INICIO</a>
                    <a href="#aboutme" className='navbarMenu__item text-center' onClick={handleClink}>SOBRE MI</a>
                    <a href="#skills" className='navbarMenu__item text-center' onClick={handleClink}>HABILIDADES</a>
                    <a href="#projects" className='navbarMenu__item text-center' onClick={handleClink}>PROYECTOS</a>
                </div>
                <button className='buttonMenu' onClick={handleClink}>
                    <span className="icon-menu"></span>
                </button>
            </nav>

        </header>
    )
}
