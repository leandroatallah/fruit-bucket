import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  mockFruits,
  mockUseAppStore,
  removeBucket,
  removeFruitFromBucket,
} from "@/utils/tests/mock-use-app-store";

import BucketList from ".";

describe("BucketList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render "Não há baldes" when there are no buckets', () => {
    render(<BucketList />);
    expect(screen.getByText("Não há baldes")).toBeInTheDocument();
  });

  it("should render three empty buckets", () => {
    mockUseAppStore({
      buckets: [
        { id: 1, fruits: [], capacity: 5 },
        { id: 2, fruits: [], capacity: 5 },
        { id: 3, fruits: [], capacity: 5 },
      ],
    });

    render(<BucketList />);

    const bucketItems = screen.getAllByTestId("bucket-item");
    expect(bucketItems.length).toBe(3);
  });

  it("should sort the buckets by capacity", () => {
    mockUseAppStore({
      buckets: [
        { id: 1, fruits: [], capacity: 5 },
        { id: 2, fruits: [mockFruits[0], mockFruits[1]], capacity: 5 },
        { id: 3, fruits: [mockFruits[1]], capacity: 5 },
      ],
    });

    render(<BucketList />);

    const bucketItems = screen.getAllByTestId("bucket-item");
    expect(bucketItems[0]).toHaveTextContent("Balde 2");
    expect(bucketItems[1]).toHaveTextContent("Balde 3");
    expect(bucketItems[2]).toHaveTextContent("Balde 1");
  });

  it("should not allow to delete non-empty buckets", async () => {
    mockUseAppStore({
      buckets: [{ id: 1, fruits: [mockFruits[0]], capacity: 5 }],
    });

    render(<BucketList />);

    const deleteButtons = screen.getByTestId("delete-bucket");
    await userEvent.click(deleteButtons);

    expect(removeBucket).not.toHaveBeenCalled();
  });

  it("should allow to delete empty buckets", async () => {
    mockUseAppStore({
      buckets: [{ id: 1, fruits: [], capacity: 5 }],
    });

    render(<BucketList />);

    const deleteButtons = screen.getByTestId("delete-bucket");
    await userEvent.click(deleteButtons);

    expect(removeBucket).toHaveBeenCalledWith(1);
  });

  it("should show the total price of the fruits in the bucket", () => {
    mockUseAppStore({
      buckets: [{ id: 1, fruits: mockFruits, capacity: 5 }],
    });

    render(<BucketList />);

    const totalText = screen.getByText("Total: R$ 12,80");
    expect(totalText).toBeInTheDocument();
  });

  it("should show the capacity percentage", () => {
    mockUseAppStore({
      buckets: [{ id: 1, fruits: mockFruits, capacity: 5 }],
    });

    render(<BucketList />);

    const capacityText = screen.getByText("Capacidade: 3 de 5 (60%)");
    expect(capacityText).toBeInTheDocument();
  });

  it("should show the capacity percentage with two decimal places", () => {
    mockUseAppStore({
      buckets: [{ id: 1, fruits: mockFruits, capacity: 7 }],
    });

    render(<BucketList />);

    const capacityText = screen.getByText("Capacidade: 3 de 7 (42.86%)");
    expect(capacityText).toBeInTheDocument();
  });

  it("should show the capacity percentage with one decimal place", () => {
    mockUseAppStore({
      buckets: [{ id: 1, fruits: mockFruits, capacity: 10 }],
    });

    render(<BucketList />);

    const capacityText = screen.getByText("Capacidade: 3 de 10 (30%)");
    expect(capacityText).toBeInTheDocument();
  });

  it("should show the fruit list", () => {
    mockUseAppStore({
      buckets: [{ id: 1, fruits: mockFruits, capacity: 5 }],
    });

    render(<BucketList />);

    const fruitItems = screen.getAllByTestId("bucket-fruit-item");

    expect(fruitItems.length).toBe(3);
  });

  it("should allow to remove fruits from the bucket", async () => {
    mockUseAppStore({
      buckets: [{ id: 1, fruits: mockFruits, capacity: 5 }],
    });

    render(<BucketList />);

    const removeButtons = screen.getAllByTestId("remove-fruit");
    await userEvent.click(removeButtons[0]);

    expect(removeFruitFromBucket).toHaveBeenCalledWith("1", 1);
  });

  it("should allow to move fruits from the bucket to other", async () => {
    // ...
  });
});
