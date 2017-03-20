function showHideEllipses(){
    if ($(".breadcrumb a:hidden").length && !$(".breadcrumb > li > span").length ) {
        $(".breadcrumb > li:first-child").after("<li><span>...</span></li>");
        $(".breadcrumb > li:nth-child(2)").css('display','inline-block');
    }
    else if (!$(".breadcrumb a:hidden").length) {
        $(".breadcrumb > li > span").parent().hide();
    }
}

$(document).ready(function() {

    showHideEllipses();
    $(window).resize(function() {
        showHideEllipses();
    });

});
