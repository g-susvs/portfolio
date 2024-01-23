import { render, screen, waitFor } from "@testing-library/react"
import { ProjectCard } from "../../src/components/ProjectCard"

describe('Test in <ProjectCard />', () => {

    const projectProps = {
        title: 'Notas Markdown App',
        imgPath: '/assets/projects/app-markdown.jpg',
        description: 'Aplicación diseñada para la toma de apuntes con formato Markdown, tomando inspiración de la versatilidad de Notion.',
        techs: ['React JS', 'Material UI', 'Node JS', 'Typescript'],
        urlDemo: 'https://notas-markdown.vercel.app/',
        urlRepository: 'https://github.com/g-susvs/notas-markdown',
    }

    test('should render the component', async () => {


        render(
            <ProjectCard {...projectProps} />
        )

        await waitFor(() => {
            expect(screen.getByRole("img").getAttribute('alt')).toBe(projectProps.title)
            expect(screen.getByText(projectProps.title)).toBeTruthy()
            expect(screen.getByText('Demo')).toBeTruthy()
            expect(screen.getByText('Repositorio')).toBeTruthy()
        })
    })

    test('should show the list of technologies', async () => {

        render(
            <ProjectCard {...projectProps} />
        )

        await waitFor(() => {
            projectProps.techs.forEach(tech => {
                expect(screen.getByText(tech)).toBeTruthy()
            })
        })
    })
})