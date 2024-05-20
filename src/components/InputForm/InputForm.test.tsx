import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import InputForm, { InputFormProps } from ".";

function renderInputForm(props?: Partial<InputFormProps>) {
  render(<InputForm label="Test" id="test" type="text" {...props} />);
}

describe("InputForm", () => {
  it("should render correctly", () => {
    renderInputForm();

    expect(screen.getByLabelText("Test")).toBeInTheDocument();
  });

  it("should render with a prefix text", () => {
    renderInputForm({ prefixText: "R$" });

    expect(screen.getByText("R$")).toBeInTheDocument();
  });
});
