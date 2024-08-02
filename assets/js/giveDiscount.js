import { showAll } from './showAll.js'

const giveDiscount = (menuOptions) => {
    const discount = menuOptions.map(product => {
        return { ...product, price: product.price * 0.9 }
    })

    showAll(discount)
}

export {giveDiscount}