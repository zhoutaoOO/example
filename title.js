$(function () {
    $("#bcground").mouseover(function () {
        $(this).css(
            {
                "cursor":"url('image/shubiao2.png')"
            }
        )
    })
    $("#enter").mouseover(function () {
        $("#enter").animate({
            width: '+=5%',
            height: '+=5%'
        })
    })
    $("#enter").mouseleave(function () {
        $("#enter").animate({
            width: '-=5%',
            height: '-=5%'
        })
    })
    $("#enter").click(function () {

    })
})