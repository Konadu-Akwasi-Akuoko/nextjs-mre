import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../button";

test("button", () => {
  render(<Button>Hello</Button>);
  expect(screen.getByRole("button", { name: "Hello" })).toBeDefined();
});
