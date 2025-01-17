import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";

describe('test in GifExpertApp', () => {
    
    test('should render GifExpertApp ', () => {
      
        render(<GifExpertApp />);
        expect( screen.getByText('GifExpertApp') ).toBeTruthy();
    })

    test('should show the amount of categories ', () => {
        
        render( <GifExpertApp /> );
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change(input, { target: { value: 'Dragon Ball' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);

    });

    test('should not allow the same category ', () => {
        
        render( <GifExpertApp /> );
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change(input, { target: { value: 'One Punch' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);

    });

    
})
