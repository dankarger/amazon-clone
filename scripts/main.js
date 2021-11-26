
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