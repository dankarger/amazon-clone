import {productsDataBase} from "./data.js";

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
addCartButton.addEventListener('click', () => {
    addCart()
})
buyNowButton.addEventListener('click', () => {
    removeCart()
})
carouselleftButton.addEventListener('click', () => {pageSelector('down')})
carouselRightButton.addEventListener('click', () => {pageSelector('up')})


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

// class Card {
//     constructor(img,text,stars,rating,price,prime) {
//         this.img=` <img class="card-img" src="${img}" alt="img">`
//         this.text = `<h4 class="card-text">${text}</h4>`
//         this.stars =`<div class="${stars}">`
//         this.rating= `<div class="cardl-rating">
//                               <a href="#">${rating} </a>
//                           </div>`
//         this.price = `<div class="card-price-div">
//                        <h3>${price}</h3>
//                        </div>`
//         this.prime=`<div class="${prime}">`
//
//     }
// }

// const productsDataBase = [
//     {
//         img: "../assets/images/41lRhUCEBOL._AC_SR160,160_.jpg",
//         text: 'hi D Z Strad Carbon Fiber Cello Bow with Traditional Frog made from Polished Premium Ebony 4/4 Full Size\n' +
//             'D Z Strad Carbon Fiber Cello Bow with Traditional Frog made from Polished…\n',
//         stars: 'stars',
//         rating: '16',
//         price: '$129.00',
//         prime: 'prime'
//     },
//     {
//         img: "../assets/images/61K1RfassZS._AC_UL160_SR160,160_.jpg",
//         text: 'hi2 Aileen 4/4 Full Size Burgundy Wooden Cello Box Stand, Black Premium Velvet Plush Interior Including Bow Holder with Anti-Slip Mat\n' +
//             'Aileen 4/4 Full Size Burgundy Wooden Cello Box Stand, Black Premium Velvet Plush…\n',
//         stars: 'stars',
//         rating: '51',
//         price: '$145.99',
//         prime: 'prime'
//     }, {
//         img: "../assets/images/41j7-wCYxnL._AC_SR160,160_.jpg",
//         text: 'hi3 Cello Stand Adjustable, Folding Cello Support Stand, A-Frame Folding Cello Holder Compatible for Violin 1/8-4/4 Cellos Guitars Electric Bass Electric Guitar Stand Acoustic, Black\n' +
//             'Cello Stand Adjustable, Folding Cello Support Stand, A-Frame Folding Cello Holder C...\n',
//         stars: 'stars',
//         rating: '10',
//         price: '$30.99',
//         prime: 'prime'
//     },
//     {
//         img: "../assets/images/41VQomgeOIL._AC_SR160,160_.jpg",
//         text: 'Cello Strings 1 Full Set A-D-G-C Steel Core Nickel Chromium Wound for Size 1/4 1/2 3/4 4/4\n' +
//             'Cello Strings 1 Full Set A-D-G-C Steel Core Nickel Chromium Wound for Size 1/4 1/2 ...\n',
//         stars: 'stars',
//         rating: '110',
//         price: '$13.99',
//         prime: 'prime'
//     }, {
//         img: "../assets/images/51k7rvaYVcL._AC_SR160,160_ (1).jpg",
//         text: 'Touch of Class Ayden Music Stand Windsor Oak One Size\n' +
//             'Touch of Class Ayden Music Stand Windsor Oak One Size\n',
//         stars: 'stars2',
//         rating: '2',
//         price: '$169.00',
//         prime: 'prime'
//     },
//     {
//         img: "../assets/images/51k7rvaYVcL._AC_SR160,160_ (1).jpg",
//         text: 'Hiiiii Touch of Class Ayden Music Stand Windsor Oak One Size\n' +
//             'Touch of Class Ayden Music Stand Windsor Oak One Size\n',
//         stars: 'stars2',
//         rating: '2',
//         price: '$169.00',
//         prime: 'prime'
//     },{
//         img: "../assets/images/41lRhUCEBOL._AC_SR160,160_.jpg",
//         text: 'D Z Strad Carbon Fiber Cello Bow with Traditional Frog made from Polished Premium Ebony 4/4 Full Size\n' +
//             'D Z Strad Carbon Fiber Cello Bow with Traditional Frog made from Polished…\n',
//         stars: 'stars',
//         rating: '16',
//         price: '$129.00',
//         prime: 'prime'
//     },{
//         img: "../assets/images/51-ZytUJP2L._AC_UL160_SR160,160_.jpg",
//         text: 'Vio Music Cello Wooden Stand Burgundy Velvet Plush Cushions\n',
//         stars: 'stars',
//         rating: '121',
//         price: '$169.00',
//         prime: 'prime'
//     }
// ]


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
let pageNumber = 0;
let pages = paginator(productsDataBase)

function pageSelector(value) {
    if (value === 'up') {
       if(pageNumber<pages.length-1) {
           pageNumber++
           return createCarousel(pages, pageNumber)
       }else{
           return
       }
    }
    if (value === 'down') {
        if(pageNumber>0) {
            pageNumber--
            return createCarousel(pages, pageNumber)
        }else{
            return
        }
    }
}

function createCarousel(pages,pageNumber) {
     const cards=pages[pageNumber]
    console.log('createcarousel',cards)
      injectRowOfCards(cards)
}


function paginator(data) {
    let numberOfPages = Math.floor(data.length / pageItems)
    let pages = []
    for (let i = 0; i <data.length; i+=pageItems) {
        let page = data.slice(i,i+pageItems)
        pages.push(page)
    }
    console.log('pages', pages)
    return pages

}

paginator(productsDataBase)
console.log(pages)
// injectRowOfCards(productsDataBase)
// console.log(productsDataBase.length)
createCarousel(pages,pageNumber)
