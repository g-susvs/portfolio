import { render, screen } from "@testing-library/react"
import { Navbar } from "../../src/sections/Navbar"

describe('Test in <Navbar />', () => {

    test('should render the component', () => {
        render(
            <Navbar />
        )

        expect(screen.getByText('INICIO')).toBeTruthy()
        expect(screen.getByText('SOBRE MI')).toBeTruthy()
        expect(screen.getByText('HABILIDADES')).toBeTruthy()
        expect(screen.getByText('PROYECTOS')).toBeTruthy()
    })

    test('anchor tag should have the correct "href"', () => {

        const hrefList = {
            home: '#home',
            about: '#aboutme',
            skills: '#skills',
            projects: '#projects'
        }

        render(
            <Navbar />
        )

        const linkList = screen.getAllByRole('link')

        expect(linkList[0].getAttribute('href')).toBe(hrefList.home)
        expect(linkList[1].getAttribute('href')).toBe(hrefList.about)
        expect(linkList[2].getAttribute('href')).toBe(hrefList.skills)
        expect(linkList[3].getAttribute('href')).toBe(hrefList.projects)
    })
})