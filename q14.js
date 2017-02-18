function startListHeight($tag) {

    function setHeight(s) {
        var max = 0;
        s.each(function() {
            var h = $(this).height();
            max = Math.max(max, h);
        }).height('').height(max);
    }

    $(window).on('ready load resize', setHeight($tag));
}

jQuery(function($) {
    $('#list-lines').each(function() {
        startListHeight($('li', this));
    });
});
