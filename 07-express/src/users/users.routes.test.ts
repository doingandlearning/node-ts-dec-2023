import supertest from "supertest";
import { app } from "../server";

// beforeEach((done) => {
//   mongoose.connect(
//     "mongodb://localhost:27017/companies-house-testing",
//     { useNewUrlParser: true },
//     () => done()
//   );
// });

// afterEach((done) => {
//   mongoose.connection.db.dropDatabase(() => {
//     mongoose.connection.close(() => done());
//   });
// });

// PURE!
test("GET /api/v1/users", async () => {
  // Arrange/Act
  const response = await supertest(app).get("/api/v1/users");

  // Assert
  expect(response.status).toBe(200);
  expect(response.body).toEqual([]);
});

test("POST /api/v1/users", async () => {
  // Arrange/Act
  const response = await supertest(app)
    .post("/api/v1/users")
    .send({ name: "Daisy", location: "Cardiff" });

  expect(response.status).toBe(201);
  expect(response.body).toEqual({
    id: expect.any(Number),
    name: "Daisy",
    location: "Cardiff",
  });

  const getAllUsers = await supertest(app).get("/api/v1/users");
  expect(getAllUsers.body).toEqual([
    {
      id: expect.any(Number),
      name: "Daisy",
      location: "Cardiff",
    },
  ]);
});

test("POST /api/v1/users - missing name and location", async () => {
  const response = await supertest(app).post("/api/v1/users").send({});
  expect(response.status).toBe(400);
  expect(response.body).toEqual({
    message: "You need to provide a name and location.",
  });
});
