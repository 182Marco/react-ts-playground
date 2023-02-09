import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import AddItemToShop from '.'

test('It shows a btn to submit', async () => {
    render(<AddItemToShop addItem={() => null}/>)

    const btn = await screen.findByText('done')

    expect(btn).toBeVisible()
})

test('It adds an item when the form is submitted', async () => {
    const mock = jest.fn()
    render(<AddItemToShop addItem={mock}/>)

    const name = await screen.findByPlaceholderText('*Name')
    const quantity = await screen.findByPlaceholderText('*Quantity')
    const done = await screen.findByText('done')

    user.click(name)
    user.keyboard('me')
    user.click(quantity)
    user.keyboard('5')
    user.click(done)

    expect(mock).toHaveBeenCalledWith({name: 'me', quantity: '5'})
})

export default {}