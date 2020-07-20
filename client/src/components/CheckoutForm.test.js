import React from "react";
import {render, fireEvent, cleanup} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
afterEach(cleanup);

test("form header renders", () => {
  const {getByTestId} = render(<CheckoutForm />);
  let formHeader = getByTestId("formHeader");
  expect(formHeader).toBeTruthy();
});

test("form shows success message on submit with form details", async () => {
  const {getByTestId, getByLabelText} = render(<CheckoutForm />);

  fireEvent.change(getByLabelText("First Name:"), {
    target: {value: "Roberts"},
  });

  fireEvent.change(getByLabelText("Last Name:"), {
    input: {value: "Roberts"},
  });

  fireEvent.change(getByLabelText("Address:"), {
    input: {value: "1895 University Avenue"},
  });

  fireEvent.change(getByLabelText("City:"), {
    input: {value: "Bronx"},
  });

  fireEvent.change(getByLabelText("State:"), {
    input: {value: "NY"},
  });

  fireEvent.change(getByLabelText("Zip:"), {
    input: {value: "10453"},
  });

  fireEvent.click(getByTestId("checkoutBtn"));

  await expect(getByTestId("successMessage")).toBeTruthy();
});
