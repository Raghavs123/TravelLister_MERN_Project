jest.mock("../cloudConfig.js", () => ({
  storage: {}
}));

const request = require("supertest");
const app = require("../app");

describe("API Test", () => {

  // Test Case 1
  // test("GET / should return status 200", async () => {
  //   const res = await request(app).get("/listings");
  //   expect(res.statusCode).toBe(200);
  // });

  // Test Case 2
  test("POST /listings should create listing", async () => {
     const res = await request(app)
    .post("/listings")
    .send({
        title: "Mountain House",
        price: 1500
    });

    expect(res.statusCode).toBe(302);
  });  

});

afterAll(() => {
  const mongoose = require("mongoose");
  mongoose.connection.close();
});
