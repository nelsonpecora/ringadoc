$(document).ready(function() {
    $(window).bind('resize',function() {
        if($(window).width() > 768) {
            $('.popover').css('height',$('.popover').width()/3.15);
        }
        $('#VideoPopup').css('height',$('#VideoPopup').width()/1.78);
    });
    if($(window).width() > 768) {
        $('.popover').css('height',$('.popover').width()/3.15);
    }
    $('#VideoPopup').css('height',$('#VideoPopup').width()/1.78);
});