
function extraItemPrice(price, itemId) {
    const configItem = document.getElementById(itemId);
    configItem.innerText = price;
    //total price
    calculateTotal()
}

function convirtToInteger(id) {
    const innerText = document.getElementById(id).innerText;
    const integer = parseInt(innerText);
    return integer;
}

function calculateTotal() {
    const bestPrice = convirtToInteger('best-price');
    const extraMemoryCost = convirtToInteger('extra-memory-cost');
    const extraStorageCost = convirtToInteger('extra-storage-cost');
    const deliveryCharge = convirtToInteger('delivery-charge')
    // calculate total price
    const totalPriceText = document.getElementById('total-price');
    parseInt(totalPriceText.innerText);
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;
    totalPriceText.innerText = totalPrice;
    //total
    const totalText = document.getElementById('payble-amount'); parseInt(totalText.innerText);
    const total = (totalText.innerText = totalPrice);
    //promo code
    const promocodeInput = document.getElementById('promocode-input');
    const promocode = promocodeInput.value;

    if (promocode == 'stevekaku') {
        const discountCalc = total / 100 * 20;
        const discount = total - discountCalc;
        totalText.innerText = discount;

    }

}


document.getElementById('btn-8gb-memory').addEventListener('click', function () {
    extraItemPrice(0, 'extra-memory-cost')
})

document.getElementById('btn-16gb-memory').addEventListener('click', function () {
    extraItemPrice(180, 'extra-memory-cost')
})

document.getElementById('btn-256gb-ssd').addEventListener('click', function () {
    extraItemPrice(0, 'extra-storage-cost')
})

document.getElementById('btn-512gb-ssd').addEventListener('click', function () {
    extraItemPrice(100, 'extra-storage-cost')
})

document.getElementById('btn-1tb-ssd').addEventListener('click', function () {
    extraItemPrice(180, 'extra-storage-cost')
})

document.getElementById('btn-local-delivery').addEventListener('click', function () {
    extraItemPrice(0, 'delivery-charge')
})

document.getElementById('btn-argent-delivery').addEventListener('click', function () {
    extraItemPrice(20, 'delivery-charge')
})

document.getElementById('btn-promocode').addEventListener('click', function () {
    calculateTotal()

})