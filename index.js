function getInventory(data) {
    return data
        .map(function(phone) {
            return [
                "<div class='col-sm-6 col-md-4'>",
                "<div class='thumbnail'>",
                "<img src='" + phone.details.Picture + "' alt='...'>",
                "<div class='caption'>",
                '<h3>' +
                    phone.manufacturer +
                    ' ' +
                    phone.details.ProductName +
                    '</h3>',
                '<p>' + phone.details.description + '</p>',
                "<div class='row'>",
                "<div class='col-lg-6 col-sm-6'>",
                Quantity(phone.details.quantity),
                '</div>',
                "<div class='col-lg-6 col-sm-6'>",
                SellerInformation(phone.details.Seller),
                '</div>',
                '</div>',
                addToCart(phone.details.Price),
                '</div>',
                '</div>',
                '</div>'
            ].join('');
        })
        .join('');
}
function Quantity(quantity) {
    return (
        "<p class='quantity-border'>Qty: <span class='quantity'>" +
        quantity +
        '</span></p>'
    );
}
function SellerInformation(seller) {
    return '<p>Seller: ' + seller + '</p>';
}
function addToCart(price) {
    return (
        "<p><a href='#' class='btn btn-primary' role='button'>$" +
        price +
        "&nbsp;<i class='fa fa-cart-plus' aria-hidden'true'></i></a></p>"
    );
}
function main() {
    $('#phones').html(
        "<div class='container'>" + getInventory(Phone_Data) + '</div>'
    );
}

$(main);
