import { Given } from "@/fixture";

Given("I navigate to url {string}", async function (url: string) {
  const page = this.page;

  await page.goto(url);
})