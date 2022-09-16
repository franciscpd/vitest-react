import { getAllByPlaceholderText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import List from "./List";

describe("List Component", () => {
  it("should render list items", () => {
    const { getByText } = render(<List />);

    expect(getByText("Francis")).toBeInTheDocument();
    expect(getByText("João")).toBeInTheDocument();
    expect(getByText("Maria")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, findByText, getByPlaceholderText, debug } = render(<List />);
    const addButton = getByText("Add");

    const inputElement = getByPlaceholderText("new item");
    await userEvent.type(inputElement, "Gama");

    userEvent.click(addButton);

    const newItem = await findByText("Gama");
    // debug();

    expect(newItem).toBeInTheDocument();
  });
});