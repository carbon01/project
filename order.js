function reefreshOrderStatus(orderStatusCard) {
    var orderCancelButton = getCancelButton(orderStatusCard);
    var orderNo = parseInt(orderStatusCard.find('.card-title').text().substring(orderNumberOffset))
    var status = arrayCounter[orderNo]["currentStatus"]
    
    showCurrentOrderList(orderNo); // Displays current order is side bar
    reflectOrderCardActive(orderNo); // Changes the state of order card to show the customer
                                     // the card for which the status is being displayed.
    
    if (isStatusNonCancellable(status)) { // If preparation of this order has started, 
                                          // access for the customer to cancel the order will be removed.
        removeCancelButton(orderCancelButton);
    }

    if (hasOrderStatusReachedFinal(status)) { // If Delivered (or) Cancelled
        changeCardBody(orderStatusCard, status);
        removeTableBody();
    } else {
        refreshOrderNumber(orderNo);
        refreshTableBody();
        blinkOrderStatus(status); // Blinks the current order status
    }

}
