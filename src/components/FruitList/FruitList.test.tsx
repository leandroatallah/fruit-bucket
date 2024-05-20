import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import * as allUtils from "@/utils";
import { mockFruits, mockUseAppStore } from "@/utils/tests/mock-use-app-store";

import FruitList from ".";
import { beforeEach } from "node:test";

const EMPTY_LIST_MESSAGE = "Não há frutas não alocadas.";

describe("FruitList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it(`should render "${EMPTY_LIST_MESSAGE}" when there are no fruits`, () => {
    mockUseAppStore({ fruits: [] });

    render(<FruitList />);

    expect(screen.getByText(EMPTY_LIST_MESSAGE)).toBeInTheDocument();
  });

  it("should render a list of fruits", () => {
    mockUseAppStore({
      fruits: [...mockFruits],
    });

    render(<FruitList />);

    expect(screen.getAllByTestId("fruit-list-item").length).toBe(
      mockFruits.length
    );
  });

  it("should render the correct fruit name and price", () => {
    mockUseAppStore({
      fruits: [...mockFruits],
    });

    render(<FruitList />);

    expect(screen.getByText(mockFruits[0].name)).toBeInTheDocument();
    expect(screen.getByText("R$ 2,50")).toBeInTheDocument();
  });

  it("should call convertToCurrency with the correct price", () => {
    const spy = vi.spyOn(allUtils, "convertToCurrency");

    mockUseAppStore({
      fruits: [...mockFruits],
    });

    render(<FruitList />);

    expect(spy).toHaveBeenCalledWith(mockFruits[0].price);
  });

  it("should call add fruit action when clicking on the add button", () => {
    // ...
  });
});
