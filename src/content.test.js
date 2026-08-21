import fs from "fs";
import path from "path";
import { publications } from "./data";

const resumePath = path.join(process.cwd(), "resume", "junfeng.tex");
const expectedVenue =
  "IEEE Transactions on Robotics (T-RO), conditionally accepted.";

describe("public profile content", () => {
  test("does not disclose the personal phone number", () => {
    const resume = fs.readFileSync(resumePath, "utf8");

    expect(resume).not.toContain("17683881879");
    expect(resume).not.toContain("tel:+8617683881879");
  });

  test("lists FlowVLA as conditionally accepted by T-RO", () => {
    const resume = fs.readFileSync(resumePath, "utf8");
    const flowVla = publications.find((publication) =>
      publication.title.startsWith("FlowVLA:"),
    );

    expect(flowVla.venue).toBe(expectedVenue);
    expect(resume).toContain(expectedVenue);
  });
});
