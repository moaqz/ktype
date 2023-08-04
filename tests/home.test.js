import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page, baseURL }) => {
  // @ts-ignore
  await page.goto(baseURL);
});

test("Focus and controls switch after starting the game", async ({ page }) => {
  const startBtn = page.getByRole("button", { name: "Click to start test" });
  expect(startBtn).toBeDefined();
  await expect(page.getByRole("button", { name: "Restart game" })).toBeHidden();

  // Start the game.
  await startBtn.click();

  await expect(page.getByTestId("input-test")).toBeFocused();
  await expect(
    page.getByRole("button", { name: "Restart game" }),
  ).toBeVisible();
});

test("Game should start by focusing/clicking the input and typing", async ({
  page,
}) => {
  const input = page.getByTestId("input-test");

  await input.click();
  await expect(input).toBeFocused();

  // Start the game.
  await input.type("he", { delay: 100 });

  await expect(
    page.getByRole("button", { name: "Click to start test" }),
  ).toBeHidden();
  await expect(
    page.getByRole("button", { name: "Restart game" }),
  ).toBeVisible();
});

test("Can successfully completed a practice race", async ({ page }) => {
  // Get the sentence that the user should write.
  const wordsWrapper = page.getByTestId("words-wrapper");
  const sentence = await wordsWrapper.textContent();

  expect(sentence).not.toBeNull();

  const input = page.getByTestId("input-test");
  await input.focus();

  // @ts-ignore
  await input.type(sentence, { delay: 10 });

  const testResults = page.getByTestId("test-results");
  expect(testResults).toBeDefined();
  expect(testResults).toBeVisible();

  // After the game ends the input is hidden.
  await expect(page.getByTestId("input-test")).toBeHidden();
});
