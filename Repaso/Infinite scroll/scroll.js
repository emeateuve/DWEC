$(document).ready(function() {
    var win = $(window);
    win.scroll(function() {
        if ($(document).height() - win.height() <= (win.scrollTop() +50 ) ) {
            $.ajax({
                url: 'textoAintroducir',
                dataType: 'html',
                success: function(html) {
                    $('#posts').append(html);
                }
            });
        }
    });
});