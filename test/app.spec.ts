import { expect } from "chai";
import request from "supertest";
import app from "../src/app";
import { describe, it } from "mocha";

describe("App", () => {
  it("should return a welcome message", async () => {
    const res = await request(app).get("/api/v1");
    expect(res.status).to.equal(200);
    expect(res.text).to.include("Welcome to my API");
  });
});
