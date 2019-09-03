$(function () {
    function  size(){
        $("#bcbody").css(
            "height",$(window).height()
        )
        $("#bcbody").css(
            "width",$(window).width()
        )
        $("#choosebc").css(
            "height",$(window).height()
        )
        $("#choosebc").css(
            "width",$(window).height()*1.8
        )
        if ($(window).width()>($(window).height()*1.8))
        {
            $("#choosebc").css(
                "left",($(window).width()-($(window).height()*1.8))/2
            )
        }
    }
    size();
    $(window).resize(function () {
        size();
    })
    $("#choosebc").mouseover(function () {
        $(this).css(
            {
                "cursor":"url(../../image/shubiao1.png),pointer"
            }
        )
    })
    $("#tu1").mouseover(function () {
        $(this).css(
            {
                "cursor":"url(../../image/shubiao2.png),pointer"
            }
        )
        $(this).animate({
            width: '+=5%',
            height: '+=10%'
        })
    })
    $("#tu1").mouseleave(function () {
        $(this).animate({
            width: '-=5%',
            height: '-=10%'
        })
    })
    $("#tu2").mouseover(function () {
        $(this).css(
            {
                "cursor":"url(../../image/shubiao2.png),pointer"
            }
        )
        $(this).animate({
            width: '+=5%',
            height: '+=10%'
        })
    })
    $("#tu2").mouseleave(function () {
        $(this).animate({
            width: '-=5%',
            height: '-=10%'
        })
    })
    $("#tu3").mouseover(function () {
        $(this).css(
            {
                "cursor":"url(../../image/shubiao2.png),pointer"
            }
        )
        $(this).animate({
            width: '+=5%',
            height: '+=10%'
        })
    })
    $("#tu3").mouseleave(function () {
        $(this).animate({
            width: '-=5%',
            height: '-=10%'
        })
    })
    $("#back").mouseover(function () {
        $(this).css(
            {
                "cursor":"url(../../image/shubiao2.png),pointer"
            }
        )
        $(this).animate({
            width: '+=3%',
            height: '+=5%'
        })
    })
    $("#back").mouseleave(function () {
        $(this).animate({
            width: '-=3%',
            height: '-=5%'
        })
    })
    $("#back").click(function () {
        window,location.replace("../../index.html")
    })
    $("#tu1").click(function () {
        window.location.replace("jieshao/jieshao.html")
    })
    $("#tu2").click(function () {
        window.location.replace("wenda/wenda.html")
    })
})
