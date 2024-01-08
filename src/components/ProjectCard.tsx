import { FC, Suspense, lazy } from 'react';

import { ProjectProps } from '../interfaces';
import { CustomButton } from './CustomButton';
import { LoaderImage } from './LoaderImage';

const Image = lazy(() => import('./LazyImage'))


export const ProjectCard: FC<ProjectProps> = ({ imgPath, title, description, techs, urlDemo, urlRepository }) => {
    return (
        <div className="projectCard">
            <a className="projectCard__img" target='blank' href={urlDemo}>

                <Suspense fallback={<LoaderImage />}>
                    <Image src={imgPath} alt={title} />
                </Suspense>

            </a>
            <div className="projectCard__body">
                <h3 className="projectCard__title">{title}</h3>
                <p className="projectCard__description">{description}</p>
                <div className="projectCard__techsList">
                    {
                        techs.map(tech => {
                            return (
                                <span key={tech} className="projectCard__tech">{tech}</span>
                            )
                        })
                    }
                </div>
                <div className="projectCard__buttons">
                    < CustomButton
                        customClass={'button--seeDemo'}
                        href={urlDemo}
                        title='Ver proyecto'
                        icon={<span className="icon-link"></span>}
                    />


                    <CustomButton
                        customClass={'button--seeCode'}
                        href={urlRepository}
                        title='Repositorio'
                        icon={<span className="icon-github"></span>}
                    />

                </div>
            </div>
        </div>
    )
}
