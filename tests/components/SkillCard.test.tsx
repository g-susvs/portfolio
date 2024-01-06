import { render, screen, waitFor } from "@testing-library/react"
import { SkillCard } from "../../src/components/SkillCard"

describe('Test in <CustomButtom />', () => {

    test('should render the component', async () => {

        const skillName = 'HTML'

        render(
            <SkillCard
                imgPath="path.jpg"
                title={skillName}
            />
        )
        await waitFor(() => {

            expect(screen.getByRole("img").getAttribute('loading')).toBe('lazy')
            expect(screen.getByRole("img").getAttribute('alt')).toBe(skillName)
            expect(screen.getByText(skillName)).toBeTruthy()
        })

    })

    test('<Image /> should have "width" and "height" attributes', async () => {

        const sizeImg = "60"
        render(
            <SkillCard
                imgPath="path.jpg"
                title="HTML"
            />
        )
        await waitFor(() => {

            expect(screen.getByRole("img").getAttribute('width')).toBe(sizeImg)
            expect(screen.getByRole("img").getAttribute('height')).toBe(sizeImg)
        })
    })
    test('<Image /> should have "alt" attribute', async () => {

        const skillName = 'HTML'

        render(
            <SkillCard
                imgPath="path.jpg"
                title={skillName}
            />
        )
        await waitFor(() => {

            expect(screen.getByRole("img").getAttribute('alt')).toBe(skillName)
        })
    })
})