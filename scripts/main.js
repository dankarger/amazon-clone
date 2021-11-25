
let mainImage = document.querySelector('.main-image')
const smallImage1 = document.querySelector('.small-img1')
const smallImage2 = document.querySelector('.small-img2')
const smallImage3 = document.querySelector('.small-img3')
const smallImagesArray = [smallImage1, smallImage2, smallImage3]




smallImage1.addEventListener('mouseover',()=>changeImage('../assets/images/91k6YqnolGL._AC_SX679_.jpg', smallImage1))
smallImage2.addEventListener('mouseover',()=>changeImage('../assets/images/61LaT97MXJL._AC_SX679_.jpg',smallImage2))

smallImage3.addEventListener('mouseover',()=>changeImage('../assets/images/51d3jUFuuoL._AC_SX679_.jpg',smallImage3))


function changeImage(image,imageElement){
    smallImagesArray.forEach(el=>{
        el.style.boxShadow='none';
        el.style.borderColor='1px solid var(--black)'
    })
    imageElement.style.boxShadow='1px 1px 2px var(--orange)'
    imageElement.style.borderColor='#f2672c'
    return mainImage.src=image


}