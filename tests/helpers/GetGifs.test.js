import { getGifs } from "../../src/helpers/getGifs"

describe('test in GetGifs', () => {
    test('should return an array with keys', async() => {

        const gifs = await getGifs();
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual( {
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        } );

    });
    
});
