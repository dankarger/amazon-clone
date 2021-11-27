let cartNumber = document.querySelector('.cart-number')


export  function addCart() {
    const qtyNumber = parseInt(document.getElementById('qty-number').value)
    let prevValue = parseInt(cartNumber.innerHTML)
    let mewNumber = prevValue + qtyNumber
    prevValue < 99 ? cartNumber.innerHTML = mewNumber : cartNumber.innerHTML = prevValue
}
export function removeCart() {
    let prevValue = parseInt(cartNumber.innerHTML)
    prevValue > 0 ? cartNumber.innerHTML-- : cartNumber.innerHTML = '0';
}
