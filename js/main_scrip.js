$(function(){
    $(document).on('touchstart',function(){});
    $('.start').on('click',function(){
        $('.note').hide();
        $('.play').show();
    });
    $('.home').on('click',function(){
        $('.play').hide();
        $('#wrapper').show();
    });
    $(document).on('touchstart',function(){});
    // $('html,body').animate({scrollTop:'3px'},100);
    $('.home').on('click',function(){
        $('.end').hide();
        window.location.href="../index.html";
    });

    let second=10;
    let score=0;
    let timer;
    let randomNum=0; 
    let clickable=true;

    timer=setInterval(randomTarget,900);
    // $('.gugu').on('click',function(){
    //     if(clickable){
    //         score++;
    //         $('.play>.score').text(score);
    //         clickable=false;
    //     }
    // });

    function countdown(){
        second--;
        $('.time').text(second);
        if(second==0){
            clearInterval(counter);
            clearInterval(timer);
            $('.play').hide();
            $('.end').show();
            $('.end').find('.score').text(score*10);
        }
    }
    counter=setInterval(countdown,1000);
    function randomTarget(){
        clickable=true;
        let randomNum=Math.floor(Math.random()*9);
        $('.c'+randomNum).find('img').addClass('active');
        setTimeout(function(){
            $('.c'+randomNum).find('img').removeClass('active'); 
        },1500);
    }
    setInterval(randomTarget,2000);
    $('.play_area>div>div').click(function(){
        if(clickable){
            score++;
            $('.play>.score').text(score);
            clickable=false;
        }
        console.log("box click"); 
    });

    $('.end>.restart').on('click',function(){
        second=10;
        score=0;
        randomNum=0;
        clickable=false;
        clearInterval(randomTarget,900);
        clearInterval(countdown,1000);
        $('.play').show();
        $('.play').find('.score').text(score);
        $('.play').find('.time').text(second);
        $('.end').hide();
    });
});