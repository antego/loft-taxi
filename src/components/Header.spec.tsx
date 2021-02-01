import { render } from "@testing-library/react";
import React from "react";
import Header from "./Header";

const header = () => (
  <Header onOrder={jest.fn()} onSignOut={jest.fn()} onProfile={jest.fn()} />
);

describe("Header", () => {
  it("renders correctly", () => {
    const { container } = render(header());

    expect(container.innerHTML).toMatch("Карта");
    expect(container.innerHTML).toMatch("Профиль");
    expect(container.innerHTML).toMatch("Выйти");
  });
});
