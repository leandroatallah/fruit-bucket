import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as useAppStore from "@/store/appStore";

import CreateBucketAndFruit from ".";

const removeBucket = vi.fn();
const removeFruitFromBucket = vi.fn();
const createBucket = vi.fn();

function mockUseAppStore(data?: Partial<useAppStore.AppState>) {
  vi.spyOn(useAppStore, "default").mockImplementation(() => ({
    createBucket,
    removeBucket,
    removeFruitFromBucket,
    ...data,
  }));
}

describe("CreateBucketAndFruit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call create bucket when form is submitted", async () => {
    mockUseAppStore();

    render(<CreateBucketAndFruit />);

    const capacityInput = screen.getByLabelText("Capacidade");

    fireEvent.change(capacityInput, { target: { value: "5" } });

    expect(capacityInput).toHaveValue(5);

    await userEvent.click(
      screen.getAllByRole("button", {
        name: "Salvar",
      })[0]
    );

    // expect form to be submitted
    expect(createBucket).toHaveBeenCalledWith(5);
  });
});
