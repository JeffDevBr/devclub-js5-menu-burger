const currency = (value) => 
    new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)

const templateProduct = (product) => {
    const cardDescription = product.description.length > 50
        ? product.description.slice(0, 40) + "..."
        : product.description;

    let li = document.createElement('li')
    const divContainerCard = document.createElement('div')
    const divContainerContent = document.createElement('div')
    const divContainerCardText = document.createElement('div')
    const titleName = document.createElement('h3')
    const paragraphDescription = document.createElement('p')
    const divPrice = document.createElement('div')
    const paragraphInfo = document.createElement('p')
    const span = document.createElement('span')
    const paragraphPrice = document.createElement('p')
    const divContainerImage = document.createElement('div')
    const image = document.createElement('img')
    const divCardButton = document.createElement('div')
    const button = document.createElement('button')

    li.append(divContainerCard)
    divContainerCard.classList.add('container-card')
    divContainerContent.classList.add('container-card-content')
    divContainerCard.append(divContainerContent, divCardButton)
    divContainerContent.append(divContainerCardText, divContainerImage)
    divContainerCardText.classList.add('container-card-text')
    divContainerCardText.append(titleName, paragraphDescription, divPrice)
    titleName.textContent = `${product.name}`
    paragraphDescription.textContent = `${cardDescription}`
    divPrice.append(paragraphInfo, paragraphPrice)
    paragraphInfo.append(span)
    span.textContent = 'A partir de'
    paragraphPrice.classList.add('burger-price')
    paragraphPrice.textContent = `${currency(product.price)}`

    divContainerImage.classList.add('container-card-image')
    divContainerImage.append(image)
    image.setAttribute('src', `${product.src}`)
    image.setAttribute('alt', `Imagem ${product.name}`)

    button.textContent = 'Personalizar'
    divCardButton.classList.add('card-button-personalize')
    divCardButton.append(button)

    return li
}


export { templateProduct, currency }