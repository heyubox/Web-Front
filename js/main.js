$(document).ready(function () {
    //当家乡风貌页面ready时
    check = $("#pictures");
    if (!check.length) return;
    new WOW().init();
    $('#head-background').css({
        "display": "none"
    })
    $('#head-background').fadeIn(2000);
    for (var i = 1, l = $(".col-sm-6.col-md-4").length; i <= l; i++) {
        var x = ".caption.intro" + i;
        var y = ".col-sm-6.col-md-4.pic" + i;
        appendeffect(x, y)

    }
    if (!$('#pictures').length) return;
    var wrap = document.querySelector(".wrap");
    var next = document.querySelector(".arrow_right");
    var prev = document.querySelector(".arrow_left");

    next.onclick = function () {
        next_pic();
    }
    prev.onclick = function () {
        prev_pic();
    }

    function next_pic() {
        index++;
        if (index > 4) {
            index = 0;
        }
        showCurrentDot();
        var newLeft;
        if (wrap.style.left === "-3600px") {
            newLeft = -1200;
        } else {
            newLeft = parseInt(wrap.style.left) - 600;
        }
        wrap.style.left = newLeft + "px";
    }

    function prev_pic() {
        index--;
        if (index < 0) {
            index = 4;
        }
        showCurrentDot();
        var newLeft;
        if (wrap.style.left === "0px") {
            newLeft = -2400;
        } else {
            newLeft = parseInt(wrap.style.left) + 600;
        }
        wrap.style.left = newLeft + "px";
    }

    var timer = null;

    function autoPlay() {
        timer = setInterval(function () {
            next_pic();
        }, 2000);
    }
    autoPlay();

    var container = document.querySelector(".img-container");
    container.onmouseenter = function () {
        clearInterval(timer);
    }
    container.onmouseleave = function () {
        autoPlay();
    }

    var index = 0;
    var dots = document.getElementsByTagName("span");

    function showCurrentDot() {
        for (var i = 0, len = dots.length; i < len; i++) {
            dots[i].className = "";
        }
        dots[index].className = "on";
    }

    for (var i = 0, len = dots.length; i < len; i++) {
        (function (i) {
            dots[i].onclick = function () {
                var dis = index - i;
                if (index == 4 && parseInt(wrap.style.left) !== -3000) {
                    dis = dis - 5;
                }
                //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
                if (index == 0 && parseInt(wrap.style.left) !== -600) {
                    dis = 5 + dis;
                }
                wrap.style.left = (parseInt(wrap.style.left) + dis * 600) + "px";
                index = i;
                showCurrentDot();
            }
        })(i);
    }
})

$(document).ready(function () {
    //土特产页面
    $('.main-content2').css({
        "display": "none"
    })
    $('.main-content2').fadeIn(2000);
    check = $("#products");
    if (!check.length) return;
    new WOW().init();

    $(".main-content2 a").imgbox();
    var likes = document.getElementsByClassName("like-count");
    $("#like-button").click(function () {
        likes[0].innerHTML = parseInt(likes[0].innerHTML) + 1;
    })
});

function appendeffect(x, y) {
    $(y).mouseenter(function () {
        $(x).slideDown("normal");
    });

    $(y).mouseleave(function () {
        $(x).slideUp("normal");
    });
    $(x).css({
        "display": "none",
        "background-color": "rgba(0, 0, 0, 0.7)",
        "color": "white",
        "font-weight": "bolder",
        "position": "absolute",
        "z-indent": "10",
        "width": "433px"
    });
}

$(document).ready(function () {

    //首页index
    check = $("#index");
    if (!check.length) return;

    new WOW().init();

    $('#myCarousel').css({
        "display": "none"
    })
    $(".col-md-6.left-opacity.nonreverse").css({
        "position": "relative",
        "left": "-50%"
    })
    $(".col-md-6.right-text.nonreverse").css({
        "positioin": "relative",
        "right": "-50%"
    })

    $(".col-md-6.left-opacity.reverse").css({
        "positioin": "relative",
        "right": "-50%"
    })
    $(".col-md-6.right-text.reverse").css({
        "positioin": "relative",
        "left": "-50%"
    })
    $('.carousel-caption.prehide').animate({
        top: "200px",

    }, 1000);
    $('.carousel-caption.prehide h1').animate({
        fontSize: "5em"
    }, 2000)
    $('#myCarousel').fadeIn(2000);
    var x = 0;

    $(document).scroll(function () {
        $("div#test span").text(x += 1);
    });


    $('#overturn').animate({
        left: "70px",

    }, 1000);
    var likes = document.getElementsByClassName("like-count");
    $("#like-button").click(function () {
        likes[0].innerHTML = parseInt(likes[0].innerHTML) + 1;
    })
    /*scrollTop测试 
    $("#test button").click(function () {
        alert($(window).scrollTop() + " px");
    });
    */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 300) {
            $(".col-md-6.left-opacity.nonreverse").animate({
                left: "0"
            }, 1000)
            $(".col-md-6.right-text.nonreverse").animate({
                right: "0"
            }, 1000)
        }
        if ($(window).scrollTop() >= 1000) {
            $(".col-md-6.left-opacity.reverse").animate({
                right: "0px"
            }, 1000)
            $(".col-md-6.right-text.reverse").animate({
                left: "0px"
            }, 1000)
        }
    });


})

$(document).ready(function () {
    //文化传承
    check = $("#culinherit");
    if (!check.length) return;
    new WOW().init();
    $('#head-background2').css({
        "display": "none"
    })
    $('#head-background2').fadeIn(2000);
    $("a.appendimgbox").imgbox();
})

$(document).ready(function () {
    //人文风俗

    check = $("#customs");
    if (!check.length) return;

    new WOW().init();
    $('#header').css({
        "display": "none"
    })
    $('#header').fadeIn(2000);
})

$(document).ready(function () {
    check = $("#economic")
    if (!check.length) return;
    new WOW().init();
    setInterval(function () {
        var screenWeight = document.documentElement.clientWidth;
        var screenHeight = document.documentElement.clientHeight;
        $("#head-background3").css("width", screenWeight).css("height", screenHeight);
    }, 100)
    setInterval(function () {
        var videodisplay=$("#myModal");
        if(videodisplay.css("display")=="none"){
            var ev=document.getElementById("economicVideo");
            ev.pause();
        }
    }, 100)

})

$(document).ready(function () {
    check = $("#edu")
    if (!check.length) return;
    new WOW().init();
    setInterval(function () {
        var screenWeight = document.documentElement.clientWidth;
        var screenHeight = document.documentElement.clientHeight;
        $("#head-background3").css("width", screenWeight).css("height", screenHeight);
    }, 100)
    setInterval(function () {
        var imgwidth=$(".col-md-2").css("width");
        $(".col-md-2 img").css("width",imgwidth).css("padding","5px 7px 10px 7px").css("border-radius","10px");
        $(".col-md-2 .university-text").css("width",imgwidth);
    }, 100)


})

$(document).ready(function(){
    check=$("#celebrity");
    if(!check.length)return;
    new WOW().init();
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
})

$(document).ready(function(){
    check=$("#sites");
    if(!check.length) return;
    new WOW().init();
    var Hover = $(".accordion .box")
    Hover.each(function () {
        $(this).mouseenter(function () {
            Hover.removeClass("Hover")
            $(this).addClass("Hover")
        })
    })
})