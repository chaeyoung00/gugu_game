$(function(){
    $(document).on('touchstart',function(){});
    $('html,body').animate({scrollTop:'3px'},300);
    $('.start').on('click',function(){
        window.location.href="sub/main.html";
    });
});