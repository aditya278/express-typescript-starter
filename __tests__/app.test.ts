import request from 'supertest';

import app from "../src/app";

describe("Test app.ts", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get("/health-check");
    expect(res.body).toEqual({ message: 'I am healthy. Thankyou!' });
  });
});