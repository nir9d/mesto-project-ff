const placesList = document.querySelector('.places__list')
const templateCard = document.querySelector('#card-template').content
function renderCard({name , link}) {
    
    const cardElement = templateCard.querySelector('.places__item').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = name
    cardElement.querySelector('.card__image').src = link 
    cardElement.querySelector('.card__image').alt = name
    const deleteButton = cardElement.querySelector('.card__delete-button')
    deleteButton.addEventListener('click', deleteCard)
    return cardElement
}
function deleteCard(evt){
   evt.target.parentElement.remove()
}
initialCards.forEach(function(card){
    const cardElement = renderCard(card)
    placesList.append(cardElement)
})
