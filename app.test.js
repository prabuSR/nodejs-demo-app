const request = require("supertest");
const app = require("./app");

describe("Node.js Demo App", () => {
    test("GET / should return welcome message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello from Node.js CI/CD Pipeline!");
    });

    test("GET /health should return UP status", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("UP");
    });
});
