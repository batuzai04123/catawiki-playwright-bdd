import { Given } from "@/fixture";

Given("I navigate to url {string}", async function (url: string) {
  await this.page.goto(url);
  // Dismiss Usercentrics cookie consent dialog if present — wait for it to inject into the DOM
  const cookieBtn = await this.page.waitForSelector('button[id*="accept"]', { timeout: 8000 }).catch(() => null);
  if (cookieBtn) {
    await cookieBtn.click();
    await this.page.waitForTimeout(300);
  }
});
