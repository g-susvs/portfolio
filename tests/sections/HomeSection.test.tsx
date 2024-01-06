import { render, screen, waitFor } from "@testing-library/react"
import { HomeSection } from "../../src/sections/HomeSection"

describe('Test in <HomeSection />', () => {

    const socialLinks = {
        linkedIn: 'https://www.linkedin.com/in/jesus-guillermo-valencia-salvador/',
        github: 'https://github.com/g-susvs'
    }

    test('should render the component', async () => {

        render(
            <HomeSection />
        )

        await waitFor(() => {
            expect(screen.getByText('Jesús Valencia')).toBeTruthy()
            expect(screen.getByText('<Desarrollador Web />')).toBeTruthy()
            expect(screen.getByText('Github')).toBeTruthy()
            expect(screen.getByText('LinkedIn')).toBeTruthy()
        })
    })


    test('should have the links of my LinkedIn and Github', async () => {

        render(
            <HomeSection />
        )

        await waitFor(() => {
            const links = screen.getAllByRole('link')

            expect(links[0].getAttribute('href')).toBe(socialLinks.linkedIn)
            expect(links[1].getAttribute('href')).toBe(socialLinks.github)
        })
    })

    test('<Image> should have width and height', async () => {

        const size = "220"

        render(
            <HomeSection />
        )

        await waitFor(() => {

            const img = screen.getByRole('img')
            expect(img.getAttribute('width')).toBe(size)
            expect(img.getAttribute('height')).toBe(size)
        })
    })
})