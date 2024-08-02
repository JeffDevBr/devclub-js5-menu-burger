import { menuOptions } from './products.js'
import { showAll } from './showAll.js'
import { giveDiscount } from './giveDiscount.js'
import { sumAll } from './sumAll.js'
import { filterVegan } from './filterVegan.js'


const buttonShowAll = document.querySelector('.show-all')
const buttonGiveDiscount = document.querySelector('.give-discount')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilter = document.querySelector('.filter')


const handleShowAll = (productArray) => showAll(productArray)
const handleGiveDiscount = () => giveDiscount(menuOptions)
const handleSumAll = () => sumAll(menuOptions)
const handleFilter = () => filterVegan(menuOptions)



buttonShowAll.addEventListener('click', () => handleShowAll(menuOptions))
buttonGiveDiscount.addEventListener('click', handleGiveDiscount)
buttonSumAll.addEventListener('click', handleSumAll)
buttonFilter.addEventListener('click', handleFilter)






