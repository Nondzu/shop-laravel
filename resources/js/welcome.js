const { data } = require("jquery");

$(function () {
    $('div.products-count a').click(function (event) {
        event.preventDefault();
        $('a.products-actual-count').text($(this).text());
        getProducts($(this).text());
    });

    $('a#filter-button').click(function (event) {
        event.preventDefault();
        getProducts($('a.products-actual-count').first().text());

    });

    $('button.add-cart-button').click(function (event) {
        event.preventDefault();
        $.ajax({
            method: "POST",
            url: WELCOME_DATA.addToCart + $(this).data('id')
        })
            .done(function (respone) {
                Swal.fire({
                    title: 'Brawo!',
                    text: 'Produkt dodany do koszyka!',
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '<i class="fa-solid fa-cart-plus"></i> Przejdź do koszyka',
                    cancelButtonText: '<i class="fa-solid fa-bag-shopping"></i> Kontynuuj zakupy'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location = WELCOME_DATA.listCart;
                    }
                })
            })
            .fail(function () {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wystąpił błąd'
                })
            })
    });

    function getProducts(paginate) {
        const form = $('form.sidebar-filter').serialize();
        $.ajax({
            method: "GET",
            url: "/",
            data: form + "&" + $.param({ paginate: paginate })
        })
            .done(function (respone) {
                console.log(respone.data);
                $('div#products-wrapper').empty();
                $.each(respone.data, function (index, product) {

                    const html = '      <div class="col-6 col-md-6 col-lg-4 mb-3">' +
                        '                   <div class="card h-100 border-0">' +
                        '                        <div class="card-img-top">' +
                        '                                <img src="' + getImage(product) + '"' +
                        '                                   class="img-fluid mx-auto d-block" alt="Product image">' +
                        '                        </div>' +
                        '                        <div class="card-body text-center">' +
                        '                            <h4 class="card-title">' +
                        '                                <a href="product.html" class=" font-weight-bold text-dark text-uppercase small">' + product.name +
                        '                                </a>' +
                        '                            </h4>' +
                        '                            <h5 class="card-price small">' +
                        '                                <i> PLN ' + product.price + '</i>' +
                        '                            </h5>' +
                        `                            <button class="btn btn-success btn-sm add-cart-button"` + getDisabled() +
                        `                               data-id="product->id " @guest disabled @endguest><i` +
                        `                                   class="fa-solid fa-cart-plus"></i>` +
                        `                                   Dodaj do koszyka` +
                        `                            </button>` +
                        '                        </div>' +
                        '                    </div>' +
                        '                </div>';
                    $('div#products-wrapper').append(html);
                })
            })
    }

    function getImage(product) {
        if (!!product.image_path) {
            return WELCOME_DATA.storagePath + product.image_path;
        }
        return WELCOME_DATA.defaultImagePath
    }

    function getDisabled() {
        if (WELCOME_DATA.isGuest) {
            return 'disabled';
        }
    }
});