$(function () {
    function  size(){
        $("#bcbody").css(
            "height",$(window).height()
        )
        $("#bcbody").css(
            "width",$(window).width()
        )
        $("#bcground").css(
            "height",$(window).height()
    )
        $("#bcground").css(
            "width",$(window).height()*1.8
        )
        if ($(window).width()>($(window).height()*1.8))
        {
            $("#bcground").css(
                "left",($(window).width()-($(window).height()*1.8))/2
            )
        }
    }
   size();
    $(window).resize(function () {
        size();
    })
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
        window,location.replace("item/choose/choose.html")
    })
})
