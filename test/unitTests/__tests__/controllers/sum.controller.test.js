import suma from "../../../../src/app/controller/v1/sum.controller"

test("sum 1 + 2  equals to 3", () => {
  expect(suma(1, 2)).toBe(3);
});
