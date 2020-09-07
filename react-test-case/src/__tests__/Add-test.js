import React from "react";
import { render, fireEvent } from "react-testing-library";
import Add from "../containers/Add";

it("submits", () => {
  const onSubmit = jest.fn();
  const { getByText } = render(<Add onSubmit={onSubmit} />);
  fireEvent.click(getByText("Add"));
  expect(onSubmit).toHaveBeenCalled();
})