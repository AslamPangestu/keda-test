import { expect, test } from "vitest";

import { sortArray, sumArray, sumEvenNested } from "./utils";

test("sortArray func", () => {
  const input = [1, 2, 4, 3, 5, 3, 2, 1];
  expect(sortArray(input)).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
});

test("sumArray func", () => {
  const inputs = [
    [[100, 200, 300, 400], 2],
    [[1, 4, 2, 10, 23, 3, 1, 0, 20], 4],
    [[-3, 4, 0, -2, 6, -1], 2],
  ];
  const results = [700, 57, 10];
  inputs.forEach((element, index) => {
    expect(sumArray(...element)).toEqual(results[index]);
  });
});

test("sumEvenNested func", () => {
  const inputs = [
    {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    },
    {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    },
  ];
  const results = [6, 12];
  inputs.forEach((element, index) => {
    expect(sumEvenNested(element)).toEqual(results[index]);
  });
});
