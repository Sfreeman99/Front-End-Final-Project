function sellItem() {
    return [
        "<div class='container'>",
        '<form>',
        "<div class='form-group'>",
        "<label for='First-Name'>First Name</label>",
        "<input type='text' class='form-control' id='First-Name' placeholder='First Name'>",
        '</div>',
        "<div class='form-group'>",
        "<label for='Manufacturer'>Product Manufacturer</label>",
        "<input type='text' class='form-control' id='Manufacturer' placeholder='Ex: Apple, Samsung'>",
        '</div>',
        "<div class='form-group'>",
        "<label for='Product-Name'>Product Name</label>",
        "<input type='text' class='form-control' id='Product-Name' placeholder='Ex: Iphone 6 Plus'>",
        '</div>',
        "<div class='form-group'>",
        "<label for='description'> Description </label>",
        "<textarea id='description' class='form-control' rows='3' placeholder='Product Description'></textarea>",
        '</div>',
        "<div class='form-group'>",
        "<label class='sr-only' for='exampleInputAmount'>Amount (in dollars)</label>",
        "<div class='input-group'>",
        "<div class='input-group-addon'>$</div>",
        "<input type='text' class='form-control' id='Price' placeholder='Price to be sold for'>",
        '</div>',
        '</div>',
        "<button id='submit' type='submit' class='btn btn-default'>Submit</button>",
        '</form>',
        '</div>'
    ].join('');
}
function sellItemMain() {
    $('#root').html(sellItem());
    $('#submit').click(function() {
        var name = $('#First-Name').val();
        var manufacturer = $('#Manufacturer').val();
        var productName = $('#Product-Name').val();
        var Price = $('#Price').val();
        var description = $('#description').val();
        var Picture = './assets/Screenshot from 2017-11-17 13-43-05.png';
        Phone_Data.push({
            manufacturer: manufacturer,
            details: {
                ProductName: productName,
                Price: Price,
                description: description,
                Picture: Picture,
                Seller: name,
                quantity: 1
            }
        });
        home();
    });
}
