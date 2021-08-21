// extra memory cost event handler
document.getElementById('memory-input-button-1').addEventListener('click', function () {
    const memoryCostInput = document.getElementById('memory-cost-input');
    const memoryCostInputText = memoryCostInput.innerText = 0;
    const newMemoryCost = parseFloat(memoryCostInputText);


    // update total price 

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseFloat(totalPriceText);
    const newTotalPrice = previousTotalPrice + newMemoryCost;
    totalPrice.innerText = newTotalPrice;

    // update total price footer

    const totalPrice2 = document.getElementById('total-price-2');
    const totalPriceText2 = totalPrice2.innerText;
    const previousTotalPrice2 = parseFloat(totalPriceText2);
    const newTotalPrice2 = previousTotalPrice2 + newMemoryCost;
    totalPrice2.innerText = newTotalPrice2;



});

document.getElementById('memory-input-button-2').addEventListener('click', function () {
    const memoryCostInput = document.getElementById('memory-cost-input');
    const memoryCostInputText = memoryCostInput.innerText = 180;
    const newMemoryCost = parseFloat(memoryCostInputText);

    // update total price 
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseFloat(totalPriceText);
    const newTotalPrice = previousTotalPrice + newMemoryCost;
    totalPrice.innerText = newTotalPrice;

    // update total price footer

    const totalPrice2 = document.getElementById('total-price-2');
    const totalPriceText2 = totalPrice2.innerText;
    const previousTotalPrice2 = parseFloat(totalPriceText2);
    const newTotalPrice2 = previousTotalPrice2 + newMemoryCost;
    totalPrice2.innerText = newTotalPrice2;





});

// extra storage cost event  handler

document.getElementById('storage-input-button-1').addEventListener('click', function () {
    const storageCostInput = document.getElementById('storage-cost-input');
    const storageCostInputText = storageCostInput.innerText = 0;
    const newStorageCost = parseFloat(storageCostInputText);

    // update total  price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseFloat(totalPriceText);
    const newTotalPrice = previousTotalPrice + newStorageCost;
    totalPrice.innerText = newTotalPrice;

    // update total price footer

    const totalPrice2 = document.getElementById('total-price-2');
    const totalPriceText2 = totalPrice2.innerText;
    const previousTotalPrice2 = parseFloat(totalPriceText2);
    const newTotalPrice2 = previousTotalPrice2 + newStorageCost;
    totalPrice2.innerText = newTotalPrice2;

});
document.getElementById('storage-input-button-2').addEventListener('click', function () {
    const storageCostInput = document.getElementById('storage-cost-input');
    const storageCostInputText = storageCostInput.innerText = 100;
    const newStorageCost = parseFloat(storageCostInputText);

    // update total  price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseFloat(totalPriceText);
    const newTotalPrice = previousTotalPrice + newStorageCost;
    totalPrice.innerText = newTotalPrice;

    // update total price footer
    const totalPrice2 = document.getElementById('total-price-2');
    const totalPriceText2 = totalPrice2.innerText;
    const previousTotalPrice2 = parseFloat(totalPriceText2);
    const newTotalPrice2 = previousTotalPrice2 + newStorageCost;
    totalPrice2.innerText = newTotalPrice2;


});
document.getElementById('storage-input-button-3').addEventListener('click', function () {
    const storageCostInput = document.getElementById('storage-cost-input');
    const storageCostInputText = storageCostInput.innerText = 180;
    const newStorageCost = parseFloat(storageCostInputText);

    // update total  price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseFloat(totalPriceText);
    const newTotalPrice = previousTotalPrice + newStorageCost;
    totalPrice.innerText = newTotalPrice;

    // update total price footer
    const totalPrice2 = document.getElementById('total-price-2');
    const totalPriceText2 = totalPrice2.innerText;
    const previousTotalPrice2 = parseFloat(totalPriceText2);
    const newTotalPrice2 = previousTotalPrice2 + newStorageCost;
    totalPrice2.innerText = newTotalPrice2;


});

// delivery cost event handler
document.getElementById('delivery-input-button-1').addEventListener('click', function () {
    const deliveryCostInput = document.getElementById('delivery-cost-input');
    const deliveryCostInputText = deliveryCostInput.innerText = 0;
    const newDeliveryCost = parseFloat(deliveryCostInputText);
});

document.getElementById('delivery-input-button-2').addEventListener('click', function () {
    const deliveryCostInput = document.getElementById('delivery-cost-input');
    const deliveryCostInputText = deliveryCostInput.innerText = 20;
    const newDeliveryCost = parseFloat(deliveryCostInputText);

    // update total price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseFloat(totalPriceText);
    const newTotalPrice = previousTotalPrice + newDeliveryCost;
    totalPrice.innerText = newTotalPrice;


    // update total price footer
    const totalPrice2 = document.getElementById('total-price-2');
    const totalPriceText2 = totalPrice2.innerText;
    const previousTotalPrice2 = parseFloat(totalPriceText2);
    const newTotalPrice2 = previousTotalPrice2 + newDeliveryCost;
    totalPrice2.innerText = newTotalPrice2;
});

