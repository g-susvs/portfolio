import { ProjectCard } from '../components/ProjectCard'
import { ProjectProps } from '../interfaces'

import '../css/projects.css'

const projects: ProjectProps[] = [
    {
        title: 'Notas Markdown App',
        imgPath: '/assets/projects/app-markdown.jpg',
        description: 'Aplicación diseñada para la toma de apuntes con formato Markdown, tomando inspiración de la versatilidad de Notion.',
        techs: ['React JS', 'Material UI', 'Node JS', 'Typescript'],
        urlDemo: 'https://notas-markdown.vercel.app/',
        urlRepository: 'https://github.com/g-susvs/notas-markdown',
    },
    {
        title: 'Chatbot Web',
        imgPath: '/assets/projects/chatbot.jpg',
        description: 'Proyecto académico, funcionalidad de un chatbot. Conexión a servidor con toda la lógica para manejar el input del usuario.',
        techs: ['React JS', 'CSS', 'Python'],
        urlDemo: 'https://chatbot-ui-g-susvs.vercel.app/',
        urlRepository: 'https://github.com/g-susvs/chatbot-ui',
    },
    {
        title: 'Todo App',
        imgPath: '/assets/projects/todoapp.jpg',
        description: 'Listar tareas pendientes y completadas.',
        techs: ['React JS', 'SASS'],
        urlDemo: 'https://todo-app-gsusvs.netlify.app/',
        urlRepository: 'https://github.com/g-susvs/To-Do-App',
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="projects-section">

            <h3 className="projects__title subtitle">PROYECTOS</h3>
            <div className="projects__list">
                {
                    projects.map(project =>
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            imgPath={project.imgPath}
                            description={project.description}
                            techs={project.techs}
                            urlDemo={project.urlDemo}
                            urlRepository={project.urlRepository}
                        />)
                }
            </div>
        </section>
    )
}
