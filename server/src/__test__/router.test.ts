import app from "../index";
import request from "supertest";
import { vehicle, user, raiz } from "./datos";

describe("Test de respuestas", () => {
    jest.setTimeout(15000);
    it("Retorna 200 en la ruta de los vehiculos", async () => {
        const res = await request(app).get("/vehicles")
        expect(res.statusCode).toEqual(200);
    });
    it("Retorna 401 en la ruta de los usuarios", async () => {
        const res = await request(app).get("/auth/users")
        expect(res.statusCode).toEqual(401);
    })
    it("Retorna un vehiculo en especifico en los vehiculos", async () => {
        jest.setTimeout(30000);
        const res = await request(app).get("/vehicles")
        expect(res.body[0]).toEqual(vehicle);
    })
    it("En los headers debe ser application/json", async () => {
        const res = await request(app).get("/auth/users")
        expect(res.headers['content-type']).toEqual('application/json; charset=utf-8');
    })
    it("El post debe ser rechazado con un status 400", async () => {
        const getToken = await request(app).post("/auth/login").send({
            email: "example@example.com",
            password: "12345678"
        })
        const token = getToken.body.data.stsTokenManager.accessToken;
        const res = await request(app).post("/vehicles").set("Authorization", `Bearer ${token}`).send(vehicle)
        expect(res.statusCode).toEqual(400);
    })
    it("Traer un vehiculo por la gama", async () => {
        const gama = "alta"
        const res = await request(app).get(`/vehicles/filter/${gama}`)
        expect(res.body[0]).toEqual(vehicle);
    })
    it("Traer un vehiculo por el id", async () => {
        const id = "62a5109391219b7514026744"
        const res = await request(app).get(`/vehicles/${id}`)
        expect(res.body).toEqual(vehicle);
    })
    it("Traer un usuario prestador", async () => {
        const getToken = await request(app).post("/auth/login").send({
            email: "example@example.com",
            password: "12345678"
        })
        const token = getToken.body.data.stsTokenManager.accessToken;
        const res = await request(app).get("/admin/lender").set("Authorization", `Bearer ${token}`)
        expect(res.body[0]).toEqual(user);
    })
    it("En la ruta raiz, mostrar la informacion de bienvenida", async () => {
        const res = await request(app).get("/")
        expect(res.body).toEqual(raiz);
    })
    it("Retornar 201 en la ruta login", async () => {
        const res = await request(app).post("/auth/login").send({
            email: "example@example.com",
            password: "12345678"
        })
        expect(res.statusCode).toEqual(201);
    })
});