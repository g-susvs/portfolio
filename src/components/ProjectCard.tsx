import { FC } from 'react';

import { ProjectProps } from '../interfaces';
import { CustomButton } from './CustomButton';

export const ProjectCard: FC<ProjectProps> = ({ imgPath, title, description, techs, urlDemo, urlRepository }) => {
    return (
        <div className="projectCard">
            <div className="projectCard__img">
                <img src={imgPath} alt={title} />
            </div>
            <div className="projectCard__body">
                <p className="projectCard__title">{title}</p>
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
                    <CustomButton customClass={'button--seeDemo'} href={urlDemo} title='Ver proyecto'>
                        <span className="icon-link"></span>
                    </CustomButton>
                    <CustomButton customClass={'button--seeCode'} href={urlRepository} title='Repositorio'>
                        <span className="icon-github"></span>
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}
