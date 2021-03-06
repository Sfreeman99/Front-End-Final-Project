function CheckoutInformation(data) {
    return data
        .map(function(checkout, int) {
            return [
                "<div class='container col-lg-12 well'>",
                "<div class='col-lg-4'>",
                "<img class='cart-pic img-responsive' src='" +
                    checkout.details.Picture +
                    "' />",
                '</div>',
                "<div class='col-lg-6 col-lg-offset-2'>",
                "<div id='title' class='row col-lg-12'>" +
                    checkout.manufacturer +
                    ' ' +
                    checkout.details.ProductName +
                    '</div>',
                "<div id='seller' class='row col-lg-12'>Seller: " +
                    checkout.details.Seller +
                    '</div>',
                "<div id='cost' class='row col-lg-12'>Price: " +
                    totalOfOne(checkout) +
                    '</div>',
                "<button id='" +
                    int +
                    "' type='button' class='btn btn-danger'>Remove Item</button>",
                '</div>',
                '</div>'
            ].join('');
        })
        .join('');
}
function totalOfOne(item) {
    var total = item.details.Price * 0.07 + item.details.Price;
    return total.toFixed(2);
}
function tax(checkout) {
    var salesTax = 0;
    checkout.map(function(tax) {
        salesTax += tax.details.Price * 0.07;
    });
    return salesTax;
}
function total(checkout) {
    var total = 0;
    checkout.map(function(tax) {
        total += tax.details.Price;
    });
    return total;
}
function CheckoutTotal(checkout) {
    return [
        "<div class='row col-lg-12'><span> Sales Tax: </span>" +
            tax(checkout).toFixed(2) +
            '</div>',
        "<div class='row col-lg-12'><span> Total: </span>" +
            (tax(checkout) + total(checkout)).toFixed(2) +
            '</div>'
    ].join('');
}
function CartView() {
    return [
        "<div class='container'><span id='checkout-title'>Checkout </span><i class='fa fa-shopping-cart fa-2x' aria-hidden='true'></i><hr/>" +
            CheckoutInformation(Cart) +
            '</div>',
        "<div class='container well'>" + CheckoutTotal(Cart) + '</div>'
    ].join('');
}
function CartMain() {
    $('#root').html(CartView());
    $('.btn.btn-danger').click(function(event) {
        var num = event.currentTarget.id;
        for (var i = 0; i < Phone_Data.length; i++) {
            if (Cart[num].id === Phone_Data[i].id) {
                Phone_Data[i].details.quantity += 1;
                break;
            }
        }
        Cart.splice(num, 1);
        CartNumber();
        CartMain();
    });
}
