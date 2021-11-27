let cartNumber = document.querySelector('.cart-number')
let cartNumberMobile = document.querySelector('.cart-number-mobile')


export  function addCart() {
    const qtyNumber = parseInt(document.getElementById('qty-number').value)
    let prevValue = parseInt(cartNumber.innerHTML)
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


