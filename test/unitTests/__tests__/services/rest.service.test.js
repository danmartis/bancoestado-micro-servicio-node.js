import subs from "../../../../src/app/services/v1/subs.service";

test("subs 5 - 2  equals to 3", () => {
  expect(subs(5, 2)).toBe(3);
});
