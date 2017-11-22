function getInventory(data) {
    return data
        .map(function(phone, int) {
            return [
                '<div class="col-sm-6 col-md-4">',
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
                Quantity(phone.details.quantity, int),
                '</div>',
                "<div class='col-lg-6 col-sm-6'>",
                SellerInformation(phone.details.Seller, int),
                '</div>',
                '</div>',
                CartButton(phone.details.Price, int),
                '</div>',
                '</div>',
                '</div>'
            ].join('');
        })
        .join('');
}

function Quantity(quantity, ClassNumber) {
    return (
        "<p class='quantity-border " +
        ClassNumber +
        "'>Qty: <span class='quantity'>" +
        quantity +
        '</span></p>'
    );
}
function SellerInformation(seller, ClassNumber) {
    return '<p class="' + ClassNumber + '">Seller: ' + seller + '</p>';
}
function CartButton(price, idNumber) {
    return (
        "<p><a href='#' id='" +
        idNumber +
        "' class='btn btn-primary' role='button'>$" +
        price +
        "&nbsp;<i class='fa fa-cart-plus' aria-hidden'true'></i></a></p>"
    );
}
function CartNumber() {
    return $('.badge').html(Cart.length);
}
function main() {
    console.log(Phone_Data[0]);
    $('#phones').html(
        "<div class='container'>" + getInventory(Phone_Data) + '</div>'
    );
    $('a').on('click', function(event) {
        Cart.push(Phone_Data[event.target.id]);
        CartNumber();
    });
}
$(main);
