$(function () {
    $('a#filter-button').click(function () {
        //    alert('TEST');
        const form = $('form.sidebar-filter').serialize();
        console.log(decodeURI(form));

        $.ajax({
            method: "GET",
            url: "/",
            data: form
        })
            .done(function (data) {
                // window.location.reload();
                alert('SUCCESS');
            })
            .fail(function (data) {
                alert('ERROR');

            });

    });
});