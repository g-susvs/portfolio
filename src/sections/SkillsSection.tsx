import { SkillCard } from '../components/SkillCard'
import { SkillProps } from '../interfaces'

import '../css/skills.css'

const skills: SkillProps[] = [
    {
        title: 'HTML',
        imgPath: '/assets/techs/html.jpg'
    },
    {
        title: 'CSS',
        imgPath: '/assets/techs/css.jpg'
    },
    {
        title: 'Javascript',
        imgPath: '/assets/techs/javascript.jpg'
    },
    {
        title: 'Typescript',
        imgPath: '/assets/techs/typescript.jpg'
    },
    {
        title: 'Sass',
        imgPath: '/assets/techs/sass.png'
    },
    {
        title: 'Git',
        imgPath: '/assets/techs/git.jpg'
    },
    {
        title: 'React JS',
        imgPath: '/assets/techs/react.jpg'
    },
    {
        title: 'Node JS',
        imgPath: '/assets/techs/node.png'
    },
    {
        title: 'MongoDB',
        imgPath: '/assets/techs/mongodb.jpg'
    },
    {
        title: 'MySql',
        imgPath: '/assets/techs/mysql.png'
    },
    {
        title: 'PostgreSQL',
        imgPath: '/assets/techs/postgres.jpg'
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
