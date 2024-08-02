import { showAll } from './showAll.js'

const filterVegan = (product) => {
  const productVegan = product.filter(item => item.vegan)

  showAll(productVegan)

}

export { filterVegan }