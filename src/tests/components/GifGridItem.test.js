import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../components/GifGridItem"

describe('Probando GifGridItem', () =>{

    it('Se despliega una imágen', () => {
        render(<GifGridItem />)
        expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('Se despliega el título enviado', () => {
        render(<GifGridItem id="123" title="prueba" />)
        expect(screen.getByText('prueba')).toBeInTheDocument()
    })

})