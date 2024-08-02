import { currency } from "./templateProduct.js"

const list = document.querySelector('ul')
const li = document.createElement('li')
const paragraph = document.createElement('p')


const sumAll = (menuOptions) => {
    list.textContent = ""
const totalPrice = menuOptions.reduce((acc, menuOptions) => {
       return acc + menuOptions.price
    }, 0)
 

    paragraph.textContent = `${currency(totalPrice)}`
    li.classList.add('container-price-reduce')
    list.append(li)
    li.append(paragraph)


}

export {sumAll}