import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


jest.mock('../../src/hooks/useFetchGifs');

describe('tests in GifGrid', () => {
    
    const category = 'One Punch';

    test('should show the loading message', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);
        expect( screen.getByText( 'cargando...' ) ).toBeTruthy();
        expect (screen.getByText( category )).toBeTruthy();

    });

    test('should show items whe the images are loaded from useFetch', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://saitama.jpg'
            },
            {
                id: '123',
                title: 'Gohan',
                url: 'https://gohan.jpg' 
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category }/>);
        expect( screen.getAllByRole( 'img' ).length ).toBe( 2 );
    });
    
});


