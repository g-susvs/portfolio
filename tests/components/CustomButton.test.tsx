import { render, screen } from "@testing-library/react"
import { CustomButton } from '../../src/components/CustomButton';


describe('Test in <CustomButtom />', () => {

    test('should render the component', () => {

        const { container } = render(
            <CustomButton href="#" title="Este es un boton" icon={<span>i</span>} />
        )

        expect(container.firstChild?.firstChild === container.firstChild?.lastChild).toBeFalsy()
    })

    test('"icon" props should be optional', () => {

        const buttonName = 'Repository'

        const { container } = render(
            <CustomButton href="#" title={buttonName} />
        )

        expect(screen.getByText(buttonName)).toBeTruthy()
        expect(container.firstChild?.firstChild).toEqual(container.firstChild?.lastChild)
    })
})