import { render, screen } from "@testing-library/react"
import { CustomButton } from '../../src/components/CustomButton';


describe('Test in <CustomButtom/>', () => {

    test('should render the component', () => {

        render(
            <CustomButton href="#" title="Este es un boton">
                <p>#</p>
            </CustomButton>
        )

        screen.debug()
    })
})