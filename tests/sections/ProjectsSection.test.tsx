import { render, waitFor } from "@testing-library/react"
import { ProjectsSection } from "../../src/sections/ProjectsSection"

describe('Test in <ProjectsSection/>', () => {

    const projectsDescription = {
        p1: 'Aplicación diseñada para la toma de apuntes con formato Markdown, tomando inspiración de la versatilidad de Notion.',
        p2: 'Proyecto académico, funcionalidad de un chatbot. Conexión a servidor con toda la lógica para manejar el input del usuario.',
        p3: 'Listar tareas pendientes y completadas.'
    }

    test('each project should have the correct description', async () => {

        const { container } = render(
            <ProjectsSection />
        )

        await waitFor(() => {

            const desc = container.getElementsByClassName('projectCard__description')

            expect(desc[0].textContent).toBe(projectsDescription.p1)
            expect(desc[1].textContent).toBe(projectsDescription.p2)
            expect(desc[2].textContent).toBe(projectsDescription.p3)
        })
    })
})