const placesList = document.querySelector('.places__list')
function renderCard({name , link}) {
    const templateCard = document.querySelector('#card-template').content
    const cardElement = templateCard.querySelector('.places__item').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = name
    cardElement.querySelector('.card__image').src = link 
    const deleteButton = cardElement.querySelector('.card__delete-button')
    deleteButton.addEventListener('click', deleteCard)
    return cardElement
}
function deleteCard(){
    const card = document.querySelector('.card')
    card.remove()
}
initialCards.forEach(function(card){
    const cardElement = renderCard(card)
    placesList.append(cardElement)
})
