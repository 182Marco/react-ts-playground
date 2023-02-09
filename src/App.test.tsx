import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import App from "./App";

test("It's possibile to type a shopping item and then see it on the screen", async () => {

    render(<App />)

    const name = await screen.findByPlaceholderText('*Name')
    const quantity = await screen.findByPlaceholderText('*Quantity')
    const done = await screen.findByText('done')
    
    user.click(name);
    user.keyboard('orange')
    user.click(quantity);
    user.keyboard('41')
    user.click(done)

    const orange = await screen.getByRole('cell', {name: 'orange'})
    const orangeQ = await screen.getByRole('cell', {name: '41'})

    expect(orange).toBeVisible()
    expect(orangeQ).toBeVisible()
})

export default null