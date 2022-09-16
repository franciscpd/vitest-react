import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App Component", () => {
  it("should render component", () => {
    const { getByText, container } = render(<App />);

    expect(getByText("Vite + React")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render correct counter", async () => {
    const { getByText, findByText } = render(<App />);
    const btnCounter = getByText("count is 0");

    userEvent.click(btnCounter);

    const newValue = await findByText("count is 1");
    expect(newValue).toBeInTheDocument();
  });
});