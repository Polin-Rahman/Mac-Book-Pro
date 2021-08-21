/* extra memory cost 8GB button */
document.getElementById('memory-8gb').addEventListener('click', function () {
    document.getElementById('extra-memory-cost').innerText = 0;
    updateExtraCost(0);
    totalUpdatePrice();
});

/* extra memory cost 16GB button */
document.getElementById('memory-16gb').addEventListener('click', function () {
    document.getElementById('extra-memory-cost').innerText = 180;
    updateExtraCost(180);
    totalUpdatePrice();
});

/* extra storage cost 256GB button */
document.getElementById('storage-256GB').addEventListener('click', function () {
    document.getElementById('extra-storage-cost').innerText = 0;
    updateExtraCost(0);
    totalUpdatePrice();
});

/* extra storage cost 512GB button */
document.getElementById('storage-512GB').addEventListener('click', function () {
    document.getElementById('extra-storage-cost').innerText = 100;
    updateExtraCost(100);
    totalUpdatePrice();
});

/* extra storage cost 1TB button */
document.getElementById('storage-1TB').addEventListener('click', function () {
    document.getElementById('extra-storage-cost').innerText = 180;
    updateExtraCost(180);
    totalUpdatePrice();
});

/* Delovery option Aug-25 button */
document.getElementById('delivery-no').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 0;
    updateExtraCost(0);
    totalUpdatePrice();
});

/* Delovery option Aug-21 button */
document.getElementById('delivery-yes').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 20;
    updateExtraCost(20);
    totalUpdatePrice();
});

/* update extra cost */
function updateExtraCost(cost) {
    if (cost == 0) {
        document.getElementById('total-price').innerText = 1299;
    }
    else if (cost == 20) {
        document.getElementById('total-price').innerText = 1319;
    }
    else if (cost == 100) {
        document.getElementById('total-price').innerText = 1399;
    }
    else if (cost == 180) {
        document.getElementById('total-price').innerText = 1479;
    }
}
/* update total price */
function totalUpdatePrice() {
    const extraMemortCostText = document.getElementById('extra-memory-cost').innerText;
    const extraMemortCost = parseFloat(extraMemortCostText);

    const extraStorageCostText = document.getElementById('extra-storage-cost').innerText;
    const extraStorageCost = parseFloat(extraStorageCostText);

    const deliveryChargeText = document.getElementById('delivery-cost').innerText;
    const deliveryCharge = parseFloat(deliveryChargeText);

    const totalUpdatePrice = 1299 + extraMemortCost + extraStorageCost + deliveryCharge;

    document.getElementById('total-price').innerText = totalUpdatePrice;
    document.getElementById('promo-total').innerText = totalUpdatePrice;

    return totalUpdatePrice;
}

/* apply promo code */

document.getElementById('apply-btn').addEventListener('click', function () {
    const getPromoCodeInput = document.getElementById('promo-code');
    const getPromoCode = getPromoCodeInput.value;
    if (getPromoCode == 'stevekaku') {
        const promoTotal = totalUpdatePrice();
        const promoTotalFinal = promoTotal - (promoTotal * 20 / 100);
        document.getElementById('promo-total').innerText = promoTotalFinal;
    }
    getPromoCodeInput.value = '';
});




