import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('test in GifGridItem', () => {
    
    const title = 'soy un título';
    const url = 'https://hola.com'

    test('should match the snapShot', () => {

        const { container } = render( <GifGridItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();


    });

    test('should show the image with the URL and ALT given', () => {
        
        render( <GifGridItem title={ title } url={ url } /> );
        // expect ( screen.getByRole( 'img' ).src ).toContain( url );
        // expect ( screen.getByRole( 'img' ).alt ).toContain( title );
        const { src, alt } = screen.getByRole( 'img' );
        expect( src ).toContain( url );
        expect( alt ).toContain( title );

    });

    test('should show the component title', () => {
        render( <GifGridItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();

    })
    


    

})
