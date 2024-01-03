import { FC } from 'react'

export const Footer: FC = () => {
    return (
        <footer className='footer'>
            <div className='footer__body'>
                <p>
                    2024 - Creado con ❤️ por <strong>Jesús Valencia</strong>
                </p>
                <div className='buttons-group'>
                    <a target="blank" className="button button--linkedIn" href="https://www.linkedin.com/in/jesus-guillermo-valencia-salvador/">
                        <span className="icon-linkedin2"></span>

                    </a>
                    <a target="blank" className="button button--github" href="https://github.com/g-susvs">
                        <span className="icon-github"></span>

                    </a>
                </div>
            </div>
        </footer>
    )
}
