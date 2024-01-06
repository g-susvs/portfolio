import { render, screen } from "@testing-library/react"
import { Footer } from "../../src/sections/Footer"

describe('Test in <Footer />', () => {

    test('should have the links of my LinkedIn and Github', () => {

        const socialLinks = {
            linkedIn: 'https://www.linkedin.com/in/jesus-guillermo-valencia-salvador/',
            github: 'https://github.com/g-susvs'
        }

        render(
            <Footer />
        )

        const links = screen.getAllByRole('link')

        expect(links[0].getAttribute('href')).toBe(socialLinks.linkedIn)
        expect(links[1].getAttribute('href')).toBe(socialLinks.github)
    })
})