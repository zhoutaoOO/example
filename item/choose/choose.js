$(function () {
    function  size(){
        $("#choosebc").css(
            "height",$(window).height()
        )
        $("#choosebc").css(
            "width",$(window).width()
        )
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
})
