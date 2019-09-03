$(function () {
    function  size(){
        $("#bcbody").css(
            "height",$(window).height()
        )
        $("#bcbody").css(
            "width",$(window).width()
        )
        $("#itembc").css(
            "height",$(window).height()
        )
        $("#itembc").css(
            "width",$(window).height()*1.8
        )
        if ($(window).width()>($(window).height()*1.8))
        {
            $("#itembc").css(
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
        window.location.replace("dmg2.html");
    })
	
})