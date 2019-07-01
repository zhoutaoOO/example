$(function () {
    var taxi=0;
    var taxitop=0;
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
    function change(){
        if (taxitop==0) {
            $("#che").css({
                "background-image":"url('../../../image/knowledge/jieshao/chezuo.gif')"
            })
            taxitop=1;
        }
        else
        {
            $("#che").css({
                "background-image":"url('../../../image/knowledge/jieshao/cheyou.gif')"
            })
            taxitop=0;
        }
    }
    $("#daminggong").click(function () {
        if (taxi==0) {
            setTimeout(function () {
                change(taxitop=1);
            },0)
            $("#che").animate({
                left: "45%",
            })
            $("#che").animate({
                top: "15%"
            })
            $("#che").animate({
                left: "60%"
            })
        }
        if (taxi==2)
        {
            setTimeout(function () {
            change(taxitop=1);
        },0)
            $("#che").animate({
                left:"80%"
            })
            setTimeout(function () {
                change();
            },400)
            $("#che").animate({
                top:"15%"
            })
            $("#che").animate({
                left:"60%"
            })
        }
        if (taxi==3)
        {
            setTimeout(function () {
                change(taxitop=1);
            },0)
            $("#che").animate({
                top:"15%"
            })
            $("#che").animate({
                left:"60%"
            })
        }
        if (taxi==4)
        {
            setTimeout(function () {
                change(taxitop=0);
            },0)
            $("#che").animate({
                left:"60%"
            })
            $("#che").animate({
                top:"15%"
            })
        }
        taxi=1;
    })
    $("#dayangta").click(function () {
        if (taxi==0){
            setTimeout(function () {
                change(taxitop=1);
            },0)
            $("#che").animate({
                left: "45%",
            })
            $("#che").animate({
                top: "80%"
            })
            $("#che").animate({
                left: "70%"
            })
        }
        if (taxi==1){
            setTimeout(function () {
                change(taxitop=1);
            },0)
            $("#che").animate({
                left:"80%"
            })
            $("#che").animate({
                top:"80%"
            })
            setTimeout(function () {
                change(taxitop=0);
            },400)
            $("#che").animate({
                left:"70%"
            })
        }
        if (taxi==3){
            setTimeout(function () {
                change(taxitop=1);
            },0)
            $("#che").animate({
                top:"80%"
            })
            $("#che").animate({
                left:"70%"
            })
        }
        if (taxi==4){
            setTimeout(function () {
                change(taxitop=0);
            },0)
            $("#che").animate({
                top:"80%"
            })
            $("#che").animate({
                left:"70%"
            })
        }
        taxi=2;
    })
    $("#chengqiang").click(function () {
        if (taxi==0){
            setTimeout(function () {
                change(taxitop=1);
            },0)
            $("#che").animate({
                left: "45%",
            })
            $("#che").animate({
                top: "70%"
            })
        }
        if (taxi==1){
            setTimeout(function () {
                change(taxitop=0);
            },0)
            $("#che").animate({
                left: "45%",
            })
            $("#che").animate({
                top: "70%"
            })
        }
        if (taxi==2){
            setTimeout(function () {
                change(taxitop=0);
            },0)
            $("#che").animate({
                left: "45%",
            })
            $("#che").animate({
                top: "70%"
            })
        }
        if (taxi==4){
            setTimeout(function () {
                change(taxitop=0);
            },0)
            $("#che").animate({
                left: "45%",
            })
            $("#che").animate({
                top: "70%"
            })
        }
        taxi=3;
    })
    $("#bingmayong").click(function () {
        if (taxi==0){
            setTimeout(function () {
                change(taxitop=1);
            },0)
            $("#che").animate({
                left: "45%",
            })
            $("#che").animate({
                top: "10%"
            })
            $("#che").animate({
                left: "80%"
            })
        }
        if (taxi==1)
        {
            setTimeout(function () {
                change(taxitop=1);
            },0)
            $("#che").animate({
                left: "80%"
            })
            $("#che").animate({
                top: "10%"
            })
        }
        if (taxi==2)
        {
            setTimeout(function () {
                change(taxitop=1);
            },0)
            $("#che").animate({
                left: "80%"
            })
            $("#che").animate({
                top: "10%"
            })
        }
        if (taxi==3)
        {
            setTimeout(function () {
                change(taxitop=1);
            },0)
            $("#che").animate({
                left: "80%"
            })
            $("#che").animate({
                top: "10%"
            })
        }
        taxi=4;
    })

})