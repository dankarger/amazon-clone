let cartNumber = document.querySelector('.cart-number')
let cartNumberMobile = document.querySelector('.cart-number-mobile')
let qty = document.querySelector('#qty-number')

//functions to add and remove items from the cart number in the navbar,
export  function addCart() {
    let prevValue = parseInt(cartNumber.innerHTML)
    let qtyNumber = parseInt(qty.value)
    let mewNumber = prevValue + qtyNumber
    if(prevValue<99){
        cartNumber.innerHTML = mewNumber.toString()
        cartNumberMobile.innerHTML = mewNumber.toString()
    }
}
export function removeCart() {
    let prevValue = parseInt(cartNumber.innerHTML)
    if(prevValue>0){
        cartNumber.innerHTML--
        cartNumberMobile.innerHTML--

    }
}


