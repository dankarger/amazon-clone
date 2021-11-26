import {productsDataBase} from "./data.js";
import {paginator, pageSelector, pageNumber} from "./pages.js";

let mainImage = document.querySelector('.main-image')
const smallImage1 = document.querySelector('.small-img1')
const smallImage2 = document.querySelector('.small-img2')
const smallImage3 = document.querySelector('.small-img3')
const smallImagesArray = [smallImage1, smallImage2, smallImage3]
let cartNumber = document.querySelector('.cart-number')
const addCartButton = document.querySelector('.btn-add')
const buyNowButton = document.querySelector('.btn-buy')
let carousel = document.querySelector('.carousel-card-div')
let carouselleftButton = document.querySelector('.chevron-left-big-icon')
let carouselRightButton = document.querySelector('.chevron-right-big-icon')


smallImage1.addEventListener('mouseover', () => changeImage('../assets/images/91k6YqnolGL._AC_SX679_.jpg', smallImage1))
smallImage2.addEventListener('mouseover', () => changeImage('../assets/images/61LaT97MXJL._AC_SX679_.jpg', smallImage2))
smallImage3.addEventListener('mouseover', () => changeImage('../assets/images/51d3jUFuuoL._AC_SX679_.jpg', smallImage3))
addCartButton.addEventListener('click', () => {addCart()})
buyNowButton.addEventListener('click', () => {removeCart()})
carouselleftButton.addEventListener('click', () => {pageChange('down',pages,pageNumber)})
carouselRightButton.addEventListener('click', () => {pageChange('up',pages,pageNumber)})


function changeImage(image, imageElement) {
    smallImagesArray.forEach(el => {
        el.style.boxShadow = 'none';
        el.style.borderColor = '1px solid var(--black)'
    })
    imageElement.style.boxShadow = '1px 1px 2px var(--orange)'
    imageElement.style.borderColor = '#f2672c'
    return mainImage.src = image

}

function addCart() {
    const qtyNumber = parseInt(document.getElementById('qty-number').value)
    console.log(qtyNumber)
    let prevValue = parseInt(cartNumber.innerHTML)
    let mewNumber = prevValue + qtyNumber
    prevValue < 50 ? cartNumber.innerHTML = mewNumber : cartNumber.innerHTML = prevValue
}
function removeCart() {
    let prevValue = parseInt(cartNumber.innerHTML)
    prevValue > 0 ? cartNumber.innerHTML-- : cartNumber.innerHTML = '0';
}

function injectCard(card) {
    return carousel.innerHTML += `<div class="card"> <img class="card-img" src="${card.img}" alt="img">
                                \n <h4 class="card-text">${card.text.substr(0, 100)}...</h4>\n
                                 <div class="${card.stars}">\n
                                  <div class="cardl-rating">
                                   <a href="#">${card.rating} </a>
                                   </div>\n
                                    <div class="card-price-div">
                                     <h3>${card.price}</h3>
                                    </div>\n
                                    <div class="${card.prime} </div>`
}

function injectRowOfCards(cards) {
    carousel.innerHTML=''
    cards.forEach(card => {
        injectCard(card)
    })

}

let pageItems = 5

let pages = paginator(productsDataBase,pageItems)


function createCarousel(pages,pageNumber) {
     const cards=pages[pageNumber]
      injectRowOfCards(cards)
}


function pageChange(value,pages,pageNumber){
   let newPageNumber= pageSelector(value,pages)

    if(newPageNumber===pageNumber) {
        return
    }
    createCarousel(pages, newPageNumber)
}


console.log(pages)
createCarousel(pages,pageNumber)
