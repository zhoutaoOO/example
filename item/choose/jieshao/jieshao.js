$(function () {
    var taxi=0;
    function size() {
        $("#jieshaobc").css(
            "height", $(window).height()
        )
        $("#jieshaobc").css(
            "width", $(window).width()
        )
    }

    size();
    $(window).resize(function () {
        size();
    })
    $("#daminggong").click(function () {
        if (taxi==0) {
            $("#che").animate({
                left: "+=7%",
            })
            $("#che").animate({
                top: "-=7%"
            })
            $("#che").animate({
                left: "+=13%"
            })
        }
        taxi=1;
    })
    $("#dayangta").click(function () {
        if (taxi==0){
            $("#che").animate({
                left: "+=7%",
            })
            $("#che").animate({
                top: "+=45%"
            })
            $("#che").animate({
                left: "+=20%"
            })
        }
        taxi=2;
    })
})