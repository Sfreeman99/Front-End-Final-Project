function getInventory(data) {
    return data
        .map(function(phone) {
            return [
                '<p> Product Name: ' + phone.Apple.ProductName + '</p>',
                '<p> Price: ' + phone.Apple.Price + '</p>',
                '<p> Seller: ' + phone.Apple.Seller + '</p>',
                '<p> Description: ' + phone.Apple.description + '</p>'
            ].join('');
        })
        .join('');
}

function main() {
    $('#phones').html(getInventory(Phone_Data));
}

$(main);
