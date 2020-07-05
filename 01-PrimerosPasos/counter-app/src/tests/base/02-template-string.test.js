import '@testing-library/jest-dom';

import { getSaludo } from './../../base/02-template-string';

describe('Pruebas 02-template-string', () => {

    test('Prueba en el método getSaludo: retornar Hola Emmanuel!', () => {

        const nombre = 'Emmanuel';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');

    });

    // getSaludo debe de retornar Hola Carlos! si no hay argumento nombre
    test('Prueba en el método getSaludo: retornar Hola Carlos!', () => {

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');

    });

});