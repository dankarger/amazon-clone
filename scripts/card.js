let carousel = document.querySelector('.carousel-card-div')

export function injectCard(card) {
    return carousel.innerHTML += `<div class="card"> <img class="card-img" src="${card.img}" alt="img">
                                \n <h4 class="card-text"><a src="#">${card.text.substr(0, 100)}...</a></h4>\n
                                 <div class="${card.stars}">\n
                                  <div class="card-rating">
                                   <a href="#">${card.rating} </a>
                                   </div>\n
                                    <div class="card-price-div">
                                     <h3>${card.price}</h3>
                                    </div>\n
                                    <div class="${card.prime}" </div>`
}

export function injectRowOfCards(cards) {
    carousel.innerHTML=''
    cards.forEach(card => {
        injectCard(card)
    })

}