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
                "<p><a href='#' class='btn btn-primary' role='button'>Button</a> <a href='#' class='btn btn-default' role='button'>Button</a></p>",
                '</div>',
                '</div>',
                '</div>'
            ].join('');
        })
        .join('');
}
function makeRow(data) {}
function main() {
    $('#phones').html(getInventory(Phone_Data));
}

$(main);
