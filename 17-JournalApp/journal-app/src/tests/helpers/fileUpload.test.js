import '@testing-library/jest-dom';
import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({ 
    cloud_name: 'emasesosos', 
    api_key: '833338685891197', 
    api_secret: 'ZG1jMP_IkA7c6YdivC4zUZ_Od2U' 
});

describe('Pruebas en fileUpload', () => {

    test('Debe de cargar un archivo y retornar el URL ', async(done) => {

        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();
        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);

        // console.log(url); 

        expect(typeof(url)).toBe('string');

        // Borrar la imagen por ID
        const segments = url.split('/');
        // console.log(segments);
        const imageId = segments[ segments.length - 1 ].replace('.png', '');
        console.log(imageId); 

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        }); 
        
    }); 

    test('Debe de retornar un error', async() => {

        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        // console.log(url); 

        expect(url).toBe(null);
        
    }); 
    
});