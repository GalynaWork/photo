$(function() {

    $('.close').click(function () {
        $('.search_box input').val('');
        $('.search_box input').focus();
    });
    $('.details').click(function () {
        $( ".user_info .info_user_detail" ).slideToggle( "slow", function() {
        });
        $(".user_info .left_side i").toggleClass("fa-angle-up fa-angle-down");

    });
    $('.mob_filter.sort').click(function () {
        console.log("fs");
        $(".right_menu.image").toggleClass("mob_view");
        $(".images_page .mob_filter.sort .filter i").toggleClass("fa-angle-up fa-angle-down");


    });
    $(document).ready(function(){
        $('#nav-icon1').click(function(){
        //    $(this).toggleClass('open');
           // $("nav").toggleClass('open');
        });

    });
});