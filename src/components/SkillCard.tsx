import { FC } from 'react';
import { SkillProps } from '../interfaces';

export const SkillCard: FC<SkillProps> = ({ imgPath, title }) => {

    return (
        <div className='skillCard'>
            <img className='skillCard__img' width="60" height={60} src={imgPath} alt="html" />
            <p className='skillCard__title'>{title}</p>
        </div>
    )
}
