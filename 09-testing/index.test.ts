import { greet } from "./index";

test("greet will correctly say hello", () => {
  // Arrange    :: Given
  const name = "Kevin";
  // Act        :: When
  // Assert     :: Then
  expect(greet(name)).toBe(`Hello ${name}`);
});

test("greet will throw if we pass a non-string", () => {
  expect(() => greet(true)).toThrow();
  expect(() => greet(123)).toThrow();
  expect(() => greet([])).toThrow();
});
