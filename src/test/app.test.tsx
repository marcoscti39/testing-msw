import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { rest } from "msw";
import { handler } from "./mocking/handler";
import { setupServer } from "msw/node";
import "whatwg-fetch";
import "@testing-library/jest-dom";

export const server = setupServer(handler);

describe("testing app", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("testing msw", async () => {
    render(<App />);
    const userFromMSW = screen.findByText("this is from msw");
    expect(await userFromMSW).toBeInTheDocument();
  });
});
