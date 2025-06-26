import { faker } from "@faker-js/faker/locale/en";

const get = _ => ({
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    provincia: faker.location.state(),
    puntajeMaximo: faker.number.int({ min: 0, max: 10 })
});

export default {
    get
}
