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
                "<p><a href='#' class='btn btn-primary' role='button'><i class='fa fa-cart-plus' aria-hidden'true'></i></a></p>",
                '</div>',
                '</div>',
                '</div>'
            ].join('');
        })
        .join('');
}
function main() {
    $('#phones').html(
        "<div class='container'>" + getInventory(Phone_Data) + '</div>'
    );
}

$(main);
