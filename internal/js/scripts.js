$(document).ready(function() {
    $(window).bind('resize',function() {
        if($(window).width() > 768) {
            $('.popover').css('height',$('.popover').width()/3.15);
        }
    });
    if($(window).width() > 768) {
        $('.popover').css('height',$('.popover').width()/3.15);
    }
});