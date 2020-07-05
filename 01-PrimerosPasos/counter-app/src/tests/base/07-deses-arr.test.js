import '@testing-library/jest-dom';
import { retornaArreglo } from './../../base/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {

    test('Debe de retornar un string y un número', () => {

        const [letras, numeros] = retornaArreglo(); // ['ABC', 123]

        expect(letras).toEqual('ABC');
        expect(typeof letras).toEqual('string');
        expect(numeros).toEqual(123);
        expect(typeof numeros).toEqual('number');

    });

});