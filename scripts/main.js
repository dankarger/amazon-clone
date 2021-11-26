
let mainImage = document.querySelector('.main-image')
const smallImage1 = document.querySelector('.small-img1')
const smallImage2 = document.querySelector('.small-img2')
const smallImage3 = document.querySelector('.small-img3')
const smallImagesArray = [smallImage1, smallImage2, smallImage3]
let cartNumber = document.querySelector('.cart-number')
const addCartButton = document.querySelector('.btn-add')
const buyNowButton = document.querySelector('.btn-buy')

smallImage1.addEventListener('mouseover',()=>changeImage('../assets/images/91k6YqnolGL._AC_SX679_.jpg', smallImage1))
smallImage2.addEventListener('mouseover',()=>changeImage('../assets/images/61LaT97MXJL._AC_SX679_.jpg',smallImage2))
smallImage3.addEventListener('mouseover',()=>changeImage('../assets/images/51d3jUFuuoL._AC_SX679_.jpg',smallImage3))
addCartButton.addEventListener('click',()=>{addCart()})
buyNowButton.addEventListener('click', ()=>{removeCart()})

function changeImage(image,imageElement){
    smallImagesArray.forEach(el=>{
        el.style.boxShadow='none';
        el.style.borderColor='1px solid var(--black)'
    })
    imageElement.style.boxShadow='1px 1px 2px var(--orange)'
    imageElement.style.borderColor='#f2672c'
    return mainImage.src=image

}

function addCart() {
    const qtyNumber = parseInt(document.getElementById('qty-number').value)
    console.log(qtyNumber)
    let prevValue = parseInt(cartNumber.innerHTML)
    let mewNumber  =prevValue + qtyNumber
    prevValue<50?cartNumber.innerHTML=mewNumber:cartNumber.innerHTML=prevValue

}

function removeCart() {
    let prevValue = parseInt(cartNumber.innerHTML)

    prevValue>0?cartNumber.innerHTML--:cartNumber.innerHTML = '0';
}

class Card {
    constructor(img,text,stars,rating,price,prime) {
        this.img=` <img class="card-img" src="${img}" alt="img">`
        this.text = `<h4 class="card-text">${text}</h4>`
        this.stars =`<div class="${stars}">`
        this.rating= `<div class="cardl-rating">
                              <a href="#">${rating} </a>
                          </div>`
        this.price = `<div class="card-price-div">
                       <h3>${price}</h3>
                       </div>`
        this.prime=`<div class="${prime}">`

    }
}

const productsDataBase =
    {
        img:"../assets/images/41lRhUCEBOL._AC_SR160,160_.jpg",
        text:'D Z Strad Carbon Fiber Cello Bow with Traditional Frog made from Polished Premium Ebony 4/4 Full Size\n' +
            'D Z Strad Carbon Fiber Cello Bow with Traditional Frog made from Polished…\n',
        stars:'stars',
        rating:'16',
        price:'$129.00 ',
        prime:'prime'
    }


// let newCard = new Card(productsDataBase[0]['img'],productsDataBase[0]['text'],productsDataBase[0]['stars'],productsDataBase[0]['rating'],productsDataBase[0]['price'],productsDataBase[0]['prime'])
// console.log(newCard)
let newCard = new Card(productsDataBase['img'],productsDataBase['text'],productsDataBase['stars'],productsDataBase['rating'],productsDataBase['price'],productsDataBase['prime'])

let carousel = document.querySelector('.carousel-card-div')

function injectCard(card) {
   return carousel.innerHTML = `<div class="card"> ${card.img} \n ${card.text}\n ${card.stars}\n ${card.rating}\n ${card.price}\n ${card.prime} </div>`
}

injectCard(newCard)

function injectRowOfCards(cards) {



}