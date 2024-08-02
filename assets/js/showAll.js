import { templateProduct } from './templateProduct.js'

const list = document.querySelector('ul')

const showAll = (productArray) => {
    list.innerHTML = ""
    productArray.forEach(product => {
        list.append(templateProduct(product))
    })

    return list
}

export { showAll }