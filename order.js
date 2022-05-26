function viewOrderStatus(orderStatusCard) {
    var orderCancelButton = getCancelButtonElement(orderStatusCard);
    var orderNo = parseInt(orderStatusCard.find('.card-title').text().substring(orderNumberOffset));
    var status = getCurrentOrderStatus(orderNo); //Enum Status
    
    reflectOrderCardActive(orderNo); // Changes the state of order card to show the customer
                                     // the card for which the status is being displayed.

    if (isOrderStatusFinal(status)) { // If Delivered (or) Cancelled
        changeCardBody(orderStatusCard, status);
    } else {
        if (isOrderNonCancellable(status)) {        // If preparation of this order has started, 
            removeCancelButton(orderCancelButton);  // access for the customer to cancel the order will be removed.
        }
        refreshOrderNumberText(orderNo);
        displayOrderStatusTable();
        blinkCurrentOrderStatus(status);
    }
    
    showCurrentOrderList(orderNo, status); // Displays current order in side bar, if order not Cancelled

}
