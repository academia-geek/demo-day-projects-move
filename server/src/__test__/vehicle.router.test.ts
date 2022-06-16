import app from "../index";
import request from "supertest";

describe("POST /vehicle", () => {
    it("Retorna 200 en la ruta raiz", async () => {
        const res = await request(app).get("/vehicles")
        expect(res.statusCode).toEqual(200);
    });
});