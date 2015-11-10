/*
var mn = $("#main-nav");
    hdr = $("#header").height();
$(window).scroll(function(){
    if($(this).scrollTop()>hdr){
        mn.addClass("navbar-fixed-top");
    }
    else{
        mn.removeClass(".main-nav-scrolled");
    }
})*/

$(function(){
   var headerHeight = $("#header").height();
    $('#sidebar').affix({
        offset: {
            top: headerHeight
        }
    });
    /!* activate scrollspy menu *!/
    var $body   = $(document.body);

    $body.scrollspy({
        target: '#leftCol',
        offset: 1100
    });
    $("#scroll").click(function(){
        $("html,body").animate({scrollTop:$("#main").offset().top-5},"500");
        return false;
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>$("#header").height()){
            $("#main-nav").addClass("navbar-fixed-top animated fadeIn");
        }else{
            $("#main-nav").removeClass("navbar-fixed-top animated fadeIn");
        }
    });
    $('.change-sections>div a').click(function(){
        $('.change-sections>div a').removeClass('active'); // remove any active class
        $(this).addClass('active');
        }
    );
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    new WOW().init();
});

/*
 parend 父级id
 pin 元素id
 *!/
function waterfall(parent,pin){
    var $aPin = $( "#main-content>div" );
    var iPinW = $aPin.eq( 0 ).width();// 一个块框pin的宽
    var num = Math.floor( $( "#main-content").width() / iPinW );//每行中能容纳的pin个数【窗口宽度除以一个块框宽度】
    //oParent.style.cssText='width:'+iPinW*num+'px;ma rgin:0 auto;';//设置父级居中样式：定宽+自动水平外边距
    $( "#main-content" ).css({
        'width:' : iPinW * num,
        'margin': '0 auto'
    });

    var pinHArr=[];//用于存储 每列中的所有块框相加的高度。

    $aPin.each( function( index, value ){
        var pinH = $aPin.eq( index ).height();
        if( index < num ){
            pinHArr[ index ] = pinH; //第一行中的num个块框pin 先添加进数组pinHArr
        }else{
            var minH = Math.min.apply( null, pinHArr );//数组pinHArr中的最小值minH
            var minHIndex = $.inArray( minH, pinHArr );
            $( value ).css({
                'position': 'absolute',
                'top': minH + 15,
                'left': $aPin.eq( minHIndex ).position().left
            });
            //数组 最小高元素的高 + 添加上的aPin[i]块框高
            pinHArr[ minHIndex ] += $aPin.eq( index ).height() + 15;//更新添加了块框后的列高
        }
    });
    console.log("yunxing");
}*/