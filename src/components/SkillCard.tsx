import { FC, Suspense, lazy } from 'react';
import { SkillProps } from '../interfaces';
import { LoaderImage } from './LoaderImage';

const Image = lazy(() => import('./LazyImage'))

export const SkillCard: FC<SkillProps> = ({ imgPath, title }) => {

    return (
        <div className='skillCard'>

            <Suspense fallback={<LoaderImage />}>
                <Image className='skillCard__img' width="60" height="60" src={imgPath} alt={title} />
            </Suspense>

            <p className='skillCard__title'>{title}</p>
        </div>
    )
}
