import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import AddItemToShop from ".";

const mock = jest.fn();
const renderComp = () => render(<AddItemToShop addItem={mock} />);

test("It shows a btn to submit", async () => {
  renderComp();

  const btn = await screen.findByText("done");

  expect(btn).toBeVisible();
});

test("It adds an item when the form is submitted", async () => {
  renderComp();

  const name = await screen.findByPlaceholderText("*Name");
  const quantity = await screen.findByPlaceholderText("*Quantity");
  const done = await screen.findByText("done");

  user.click(name);
  user.keyboard("me");
  user.click(quantity);
  user.keyboard("5");
  user.click(done);

  expect(mock).toHaveBeenCalledWith({ name: "me", quantity: "5" });
});

test("Empties the 2 inputs when form is submitted", async () => {
  renderComp();

  const name = await screen.findByPlaceholderText("*Name");
  const quantity = await screen.findByPlaceholderText("*Quantity");
  const done = await screen.findByText("done");

  user.click(name);
  user.keyboard("me");
  user.click(quantity);
  user.keyboard("5");
  user.click(done);

  expect(name).toHaveValue('');
  expect(quantity).toHaveValue(null);
});

export default {};
