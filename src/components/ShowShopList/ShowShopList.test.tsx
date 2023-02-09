import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import ShowShopList from ".";
import { initialShopList } from "../../utils/mockData";

test("render a number of rows equal to numer of items", async () => {

  const {container} = render(<ShowShopList shopList={initialShopList} />);

  screen.logTestingPlaygroundURL()

  const rows = container.querySelectorAll('tbody tr')

  expect(rows).toHaveLength(initialShopList.length)
});

test("Shows a row forEach item passed", async () => {
  render(<ShowShopList shopList={initialShopList} />);

  initialShopList.forEach(async(obj) => {
    const name = await screen.findByRole('row', {name: obj.name})
    const quantity = await screen.findByRole('row', {name: obj.quantity})

    expect(name).toBeVisible()
    expect(quantity).toBeVisible()

  })
});

export default {};

