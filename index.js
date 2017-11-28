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
function home() {
    $('#root').html(
        "<div class='container'>" + getInventory(Phone_Data) + '</div>'
    );

    $('p > a').on('click', function(event) {
        event.preventDefault();
        Cart.push(Phone_Data[event.target.id]);
        CartNumber();
    });
    $('#cart').click(function() {
        $('#root').html(CartView());
        $('.btn.btn-danger').click(function(event) {
            var num = event.target.id;
            console.log(num);
            Cart.splice(num, 1);
            CartNumber();
            $('#root').html(CartView());
        });
    });
    $('#sell').click(function() {
        $('#root').html("<div class='container'>" + sellItem() + '</div>');
    });

    $('#home').click(function() {
        home();
    });
}

function main() {
    $('#root').html(
        "<div class='container'>" + getInventory(Phone_Data) + '</div>'
    );

    $('p > a').on('click', function(event) {
        event.preventDefault();
        Cart.push(Phone_Data[event.target.id]);
        CartNumber();
    });
    $('#cart').click(function() {
        CartMain();
    });
    $('#sell').click(function() {
        // $('#root').html("<div class='container'>" + sellItem() + '</div>');
        sellItemMain();
    });

    $('#home').click(function() {
        home();
    });
}
$(main);
