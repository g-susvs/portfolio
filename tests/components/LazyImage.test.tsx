import { render, screen } from "@testing-library/react"
import LazyImage from "../../src/components/LazyImage"

describe('Test in <LazeImage />', () => {

    test('should have the "alt" attribute', () => {

        const altProp = 'CSS'

        render(
            <LazyImage src="imagePath.jpg" alt={altProp} />
        )

        const alt = screen.getByAltText(altProp)
        expect(alt).toBeTruthy()
    })

    test('should have the "loading" attribute', () => {

        render(
            <LazyImage src="imagePath.jpg" alt="HTML" />
        )

        expect(screen.getByRole("img").getAttribute('loading')).toBe('lazy')
    })

})