$(function () {
    $(".nlink").click(function() {
        var $aaaul = $(this).siblings(".main");
        if ($aaaul.is(":visible")) {
            $(this).parent().attr("class", "collapsed");
            $(this).attr("class", "collapsedLink nlink");
            $aaaul.hide();
        } else {
            $(this).parent().attr("class", "expanded");
            $(this).attr("class", "expandedLink nlink");
            $aaaul.show();
        }
        return false;
    });
});