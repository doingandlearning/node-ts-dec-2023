import supertest from "supertest";
import { app } from "../server";

test("GET /api/v1/users", async () => {
  const response = await supertest(app).get("/api/v1/users");
  expect(response.status).toBe(200);
  expect(response.body).toEqual([]);
});

test("POST /api/v1/users", async () => {
  const response = await supertest(app)
    .post("/api/v1/users")
    .send({ name: "John Doe", location: "Cardiff" });

  expect(response.status).toBe(201);
  expect(response.body).toEqual({
    id: expect.any(Number),
    name: "John Doe",
    location: "Cardiff",
  });

  const getAllUsersResponse = await supertest(app).get("/api/v1/users");
  expect(getAllUsersResponse.body).toEqual([
    {
      id: expect.any(Number),
      name: "John Doe",
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

test("GET /api/v1/users/:id", async () => {
  const postResponse = await supertest(app)
    .post("/api/v1/users")
    .send({ name: "John Doe", location: "Cardiff" });

  const response = await supertest(app).get(
    `/api/v1/users/${postResponse.body.id}`
  );

  expect(response.status).toBe(200);
  expect(response.body).toEqual({
    id: expect.any(Number),
    name: "John Doe",
    location: "Cardiff",
  });
});

test("GET /api/v1/users/:id - not found", async () => {
  const response = await supertest(app).get("/api/v1/users/999");

  expect(response.status).toBe(404);
  expect(response.body).toEqual({
    message: "User not found",
  });
});

test("PATCH /api/v1/users/:id", async () => {
  const postResponse = await supertest(app)
    .post("/api/v1/users")
    .send({ name: "John Doe", location: "Cardiff" });

  const response = await supertest(app)
    .patch(`/api/v1/users/${postResponse.body.id}`)
    .send({ location: "London" });

  expect(response.status).toBe(200);
  expect(response.body).toEqual({
    id: expect.any(Number),
    name: "John Doe",
    location: "London",
  });
});

test("PATCH /api/v1/users/:id - not found", async () => {
  const response = await supertest(app)
    .patch("/api/v1/users/999")
    .send({ location: "London" });

  expect(response.status).toBe(404);
  expect(response.body).toEqual({
    message: "User not found",
  });
});

test("DELETE /api/v1/users/:id", async () => {
  const postResponse = await supertest(app)
    .post("/api/v1/users")
    .send({ name: "John Doe", location: "Cardiff" });

  const response = await supertest(app).delete(
    `/api/v1/users/${postResponse.body.id}`
  );

  expect(response.status).toBe(204);
  expect(response.body).toEqual({});
});

test("DELETE /api/v1/users/:id - not found", async () => {
  const response = await supertest(app).delete("/api/v1/users/999");

  expect(response.status).toBe(404);
  expect(response.body).toEqual({
    message: "User not found",
  });
});
