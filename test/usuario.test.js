import { expect } from "chai";
import generador from './generador/usuario.js';

describe('*** Test del Generador de Usuario ***', () => {
    it('El usuario debe tener username, email, password y provincia', () => {
        const u = generador.get();
        expect(u).to.include.keys('username', 'email', 'password', 'provincia');
    });

    it('Los usuarios generados deberian ser aleatorios', () => {
        const u1 = generador.get();
        const u2 = generador.get();
        expect(u1.username).not.to.eql(u2.username);
        expect(u1.email).not.to.eql(u2.email);
        expect(u1.password).not.to.eql(u2.password);

    });

});