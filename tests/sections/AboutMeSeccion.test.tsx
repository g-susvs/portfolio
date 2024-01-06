import { render } from "@testing-library/react"
import { AboutMeSection } from "../../src/sections/AboutMeSection"

describe('Test in <AboutMeSection/>', () => {

    test('should match snapshot', () => {

        const { container } = render(
            <AboutMeSection />
        )

        expect(container).toMatchSnapshot()
    })
})