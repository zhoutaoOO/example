$(function () {
    function size() {
        $("#itembc").css(
            "height", $(window).height()
        )
        $("#itembc").css(
            "width", $(window).width()
        )
    }

    size();
    $(window).resize(function () {
        size();
    })

    $("#itembc").mouseover(function () {
        $(this).css(
            {
                "cursor":"url('../../../../image/shubiao1.png'),pointer"
            }
        )
    })

    $("#back").mouseover(function () {
        $(this).animate({
            width: '+=3%',
            height: '+=5%'
        })
        $(this).css(
            {
                "cursor":"url('../../../../image/shubiao2.png'),pointer"
            }
        )
    })
    $("#back").mouseleave(function () {
        $(this).animate({
            width: '-=3%',
            height: '-=5%'
        })
    })
    $("#back").click(function () {
        window.location.replace("../jieshao.html");
    })
})