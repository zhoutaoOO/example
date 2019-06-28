$(function () {
    $("#bcground").mouseover(function () {
        $(this).css(
            {
                "cursor":"url(image/shubiao1.png),pointer"
            }
        )
    })
    $("#enter").mouseover(function () {
        $("#enter").animate({
            width: '+=5%',
            height: '+=5%'
        })
        $(this).css(
            {
                "cursor":"url(image/shubiao2.png),pointer"
            }
        )
    })
    $("#enter").mouseleave(function () {
        $("#enter").animate({
            width: '-=5%',
            height: '-=5%'
        })
    })
    $("#enter").click(function () {
        window,location.replace("child web/type-1.html")
    })
})