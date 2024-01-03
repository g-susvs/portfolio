import { SkillCard } from '../components/SkillCard'
import { SkillProps } from '../interfaces'

import '../css/skills.css'

const skills: SkillProps[] = [
    {
        title: 'HTML',
        imgPath: '/assets/techs/html.svg'
    },
    {
        title: 'CSS',
        imgPath: '/assets/techs/css.svg'
    },
    {
        title: 'Javascript',
        imgPath: '/assets/techs/javascript.svg'
    },
    {
        title: 'Typescript',
        imgPath: '/assets/techs/typescript.svg'
    },
    {
        title: 'Sass',
        imgPath: '/assets/techs/sass.svg'
    },
    {
        title: 'Git',
        imgPath: '/assets/techs/git.svg'
    },
    {
        title: 'React JS',
        imgPath: '/assets/techs/react.svg'
    },
    {
        title: 'Node JS',
        imgPath: '/assets/techs/node.svg'
    },
    {
        title: 'MongoDB',
        imgPath: '/assets/techs/mongodb.svg'
    },
    {
        title: 'MySql',
        imgPath: '/assets/techs/mysql.svg'
    },
    {
        title: 'PostgreSQL',
        imgPath: '/assets/techs/postgres.svg'
    },
]

export const SkillsSection = () => {


    return (
        <section id="skills" className="skills-section">
            <h3 className="skills__title subtitle">HABILIDADES</h3>

            <div className="skills__list">
                {
                    skills.map(skill =>
                        <SkillCard
                            key={skill.title}
                            title={skill.title}
                            imgPath={skill.imgPath}
                        />)
                }
            </div>
        </section>
    )
}
