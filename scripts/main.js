import {productsDataBase} from "./data.js";
import {paginator, pageSelector, pageNumber} from "./pages.js";
import {injectRowOfCards} from "./card.js";
import{addCart,removeCart} from "./cart.js";

let mainImage = document.querySelector('.main-image')
const smallImage1 = document.querySelector('.small-img1')
const smallImage2 = document.querySelector('.small-img2')
const smallImage3 = document.querySelector('.small-img3')
const smallImagesArray = [smallImage1, smallImage2, smallImage3]
const addCartButton = document.querySelector('.btn-add')
const buyNowButton = document.querySelector('.btn-buy')
let carouselleftButton = document.querySelector('.chevron-left-big-icon')
let carouselRightButton = document.querySelector('.chevron-right-big-icon')
let currentPage = document.querySelector('.page')
let restOfPages = document.querySelector('.restOfpages')
let pageItems = 1
let width = window.innerWidth
checkWidthAtRefresh(width)

function checkWidthAtRefresh(width) {
    if (width < 600) pageItems = 1
    if (width < 800 && width > 600) pageItems = 2
    if (width < 1100 && width > 800) pageItems = 3
    if (width < 1300 && width > 1100) pageItems = 4
    if (width > 1300) pageItems = 6
}
// checkWidth(width)

smallImage1.addEventListener('mouseover', () => changeImage('../assets/images/91k6YqnolGL._AC_SX679_.jpg', smallImage1))
smallImage2.addEventListener('mouseover', () => changeImage('../assets/images/61LaT97MXJL._AC_SX679_.jpg', smallImage2))
smallImage3.addEventListener('mouseover', () => changeImage('../assets/images/51d3jUFuuoL._AC_SX679_.jpg', smallImage3))
addCartButton.addEventListener('click', () => {addCart()})
buyNowButton.addEventListener('click', () => {removeCart()})
carouselleftButton.addEventListener('click', () => {pageChange('down',pages,pageNumber)})
carouselRightButton.addEventListener('click', () => {pageChange('up',pages,pageNumber)})
window.addEventListener('resize',()=>{checkWidth(width)})

function changeImage(image, imageElement) {
    smallImagesArray.forEach(el => {
        el.style.boxShadow = 'none';
        el.style.borderColor = '1px solid var(--black)'
    })
    imageElement.style.boxShadow = '1px 1px 2px var(--orange)'
    imageElement.style.borderColor = '#f2672c'
    return mainImage.src = image
}


// if(width<1000){pageItems=3}
let pages = paginator(productsDataBase,pageItems)

currentPage.innerHTML=pageNumber+1
restOfPages.innerHTML =  pages.length
function createCarousel(pages,pageNumber) {
     const cards=pages[pageNumber]
      injectRowOfCards(cards)
}

function pageChange(value,pages,pageNumber){
    currentPage.innerHTML=pageNumber
    restOfPages.innerHTML = pages.length
   let newPageNumber= pageSelector(value,pages)
    if(newPageNumber===pageNumber) {
        currentPage.innerHTML=pageNumber+1
        restOfPages.innerHTML = pages.length
        return
    }
    currentPage.innerHTML=newPageNumber+1
    restOfPages.innerHTML = pages.length
    createCarousel(pages, newPageNumber)
}

function checkWidth(width){
     width = window.innerWidth
    if(width<600&&pageItems!==1){
        pageItems= 1
        pages = paginator(productsDataBase,pageItems)
        currentPage.innerHTML=pageNumber+1
        restOfPages.innerHTML = pages.length
        return createCarousel(pages, pageNumber)
    }
    else if (width<800&&width>600&&pageItems!==2){
         pageItems= 2
         pages = paginator(productsDataBase,pageItems)
        currentPage.innerHTML=pageNumber+1
        restOfPages.innerHTML = pages.length
         return createCarousel(pages, pageNumber)
    }
    else if(width>800&&width<1100&&pageItems!==3){
        pageItems= 3
        pages = paginator(productsDataBase,pageItems)
        currentPage.innerHTML=pageNumber+1
        restOfPages.innerHTML = pages.length
        return createCarousel(pages, pageNumber)
    }
    else if(width>1100&&width<1400&&pageItems!==4){
        pageItems= 4
        pages = paginator(productsDataBase,pageItems)
        currentPage.innerHTML=pageNumber+1
        restOfPages.innerHTML = pages.length
        return  createCarousel(pages, pageNumber)
    }
    else if(width>1400 &&pageItems!==6){
        pageItems= 5
        pages = paginator(productsDataBase,pageItems)
        currentPage.innerHTML=pageNumber+1
        restOfPages.innerHTML = pages.length
        return  createCarousel(pages, pageNumber)
    }
}
createCarousel(pages,pageNumber)
