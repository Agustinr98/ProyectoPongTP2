import { expect } from "chai";
import supertest from "supertest";
import generador from "./generador/usuario.js";
import Server from "../server.js"

let id;

describe('*** Test del servicio APIRESTful (interno) ***', () => {
    describe('GET', () => {
        it('Debería retornar un status 200', async () => {
            const server = new Server(8081, 'DB');
            const app = await server.start();

            const req = supertest(app);
            const res = await req.get('/api/usuarios');
            expect(res.status).to.eql(200);
            await server.stop();
        });
    });

    describe('POST', () => {
        it('Debería incorporar un producto', async () => {
            const server = new Server(8081, 'DB');
            const app = await server.start();

            const user = generador.get();
            const req = supertest(app);
            const res = await req.post('/api/usuarios').send(user);
            expect(res.status).to.eql(200);
            const userGuardado = res.body;
            expect(userGuardado).to.have.property('_id');
            expect(userGuardado.username).to.eql(user.username);
            expect(userGuardado.email).to.eql(user.email);
            expect(userGuardado.password).to.eql(user.password);
            expect(userGuardado.provincia).to.eql(user.provincia);
            id = userGuardado._id;
            await server.stop();
        });
    });

    describe('GET by ID', () => {
        it('Debería retornar un status 200 y el usuario buscado', async () => {
            const server = new Server(8081, 'DB');
            const app = await server.start();

            const req = supertest(app);
            const res = await req.get(`/api/usuarios/${id}`);
            const user = res.body;
            expect(res.status).to.eql(200);
            expect(user).to.have.property('_id');
            expect(user._id).to.eql(id);
            expect(user).to.have.property('username');
            expect(user).to.have.property('email');
            expect(user).to.have.property('password');

            await server.stop();
        });
    });

    describe('PUT', () => {
        it('Deberia actualizar un usuario', async () => {
            const server = new Server(8081, 'DB');
            const app = await server.start();

            const usuario = generador.get();
            const req = supertest(app);
            const res = await req.put(`/api/usuarios/${id}`).send(usuario);
            const userActualizado = res.body;
            expect(res.status).to.eql(200);
            expect(userActualizado).to.have.property('_id');
            expect(userActualizado._id).to.eql(id);
            // Puedes ajustar estas aserciones según el comportamiento esperado
            expect(userActualizado.username).to.eql(usuario.username);
            expect(userActualizado.email).to.eql(usuario.email);
            await server.stop();
        });
    });

    describe('DELETE', () => {
        it('Debería eliminar un usuario', async () => {
            const server = new Server(8081, 'DB');
            const app = await server.start();

            const req = supertest(app);
            const res = await req.delete(`/api/usuarios/${id}`);
            const userEliminado = res.body;
            expect(res.status).to.eql(200);
            expect(userEliminado).to.have.property('_id');
            expect(userEliminado._id).to.eql(id);
            await server.stop();
        });
    });
});
