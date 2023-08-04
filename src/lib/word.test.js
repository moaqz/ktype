import { test, expect } from "vitest";
import { getRandomWords } from "./words";

test("getRandomWords should select the specified number of words from a given array", () => {
  const testCases = [
    { input: ["apple", "banana", "orange", "grape", "melon"], count: 3 },
    { input: ["A", "B", "C", "D", "E"], count: 5 },
    { input: ["A"], count: 1 },
    { input: [], count: 0 },
  ];

  for (const { input, count } of testCases) {
    const words = getRandomWords(input, count);

    expect(words).toHaveLength(count);
  }
});
