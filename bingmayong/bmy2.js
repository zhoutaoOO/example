$(function () {
    function  size(){
        $("#bcbody").css(
            "height",$(window).height()
        )
        $("#bcbody").css(
            "width",$(window).width()
        )
        $("#itembc2").css(
            "height",$(window).height()
        )
        $("#itembc2").css(
            "width",$(window).height()*1.8
        )
        if ($(window).width()>($(window).height()*1.8))
        {
            $("#itembc2").css(
                "left",($(window).width()-($(window).height()*1.8))/2
            )
        }
    }
    size();
	
	    function fontsize(){
        $("#text").css(
            "font-size",($(window).height())/20+'px'
        )
    }
    fontsize();
	
    $(window).resize(function () {
        size();
		fontsize();
    })

    $("#itembc2").mouseover(function () {
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
        window.location.replace("bmy.html");
    })
	
	 $("#go").mouseover(function () {
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
    $("#go").mouseleave(function () {
        $(this).animate({
            width: '-=3%',
            height: '-=5%'
        })
    })
    $("#go").click(function () {
        window.location.replace("bmy3.html");
    })
})