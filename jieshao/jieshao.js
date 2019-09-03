$(function () {
    var taxi=0;
    var taxitop=0;
    function  size(){
        $("#bcbody").css(
            "height",$(window).height()
        )
        $("#bcbody").css(
            "width",$(window).width()
        )
        $("#jieshaobc").css(
            "height",$(window).height()
        )
        $("#jieshaobc").css(
            "width",$(window).height()*1.8
        )
        if ($(window).width()>($(window).height()*1.8))
        {
            $("#jieshaobc").css(
                "left",($(window).width()-($(window).height()*1.8))/2
            )
        }
    }
    size();
    $(window).resize(function () {
        size();
    })
    $("#jieshaobc").mouseover(function () {
        $(this).css(
            {
                "cursor":"url('../../../image/shubiao1.png'),pointer"
            }
        )
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
    function windowout(){
        $("#nextwindow").css({
            "display":"block"
        })
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
        $("#nextwindow").css({
            "background-image":"url('../../../image/knowledge/jieshao/dmg.png')"
        })
        setTimeout(function () {
            windowout();
        },1300)
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
        $("#nextwindow").css({
            "background-image":"url('../../../image/knowledge/jieshao/dyt.png')"
        })
        setTimeout(function () {
            windowout();
        },1300)
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
        $("#nextwindow").css({
            "background-image":"url('../../../image/knowledge/jieshao/mcq.png')"
        })
        setTimeout(function () {
            windowout();
        },1000)
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
        $("#nextwindow").css({
            "background-image":"url('../../../image/knowledge/jieshao/bmy.png')"
        })
        setTimeout(function () {
            windowout();
        },1300)
        taxi=4;
    })
    $("#jieshaobc").children("div:not(#che,#nextwindow,#dytzt,#dmgzt,#mcqzt,#bmyzt)").mouseover(function () {
        $(this).css(
            {
                "cursor":"url('../../../image/shubiao2.png'),pointer"
            }
        )
    })
    $("#back").mouseover(function () {
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
        window.location.replace("../choose.html");
    })
    $("#yes").mouseover(function () {
        $(this).animate({
            width: '+=5%',
            height: '+=5%'
        })
        $(this).css(
            {
                "cursor":"url('../../../image/shubiao2.png'),pointer"
            }
        )
    })
    $("#yes").mouseleave(function () {
        $(this).animate({
            width: '-=5%',
            height: '-=5%'
        })
    })
    $("#no").mouseover(function () {
        $(this).animate({
            width: '+=5%',
            height: '+=5%'
        })
        $(this).css(
            {
                "cursor":"url('../../../image/shubiao2.png'),pointer"
            }
        )
    })
    $("#no").mouseleave(function () {
        $(this).animate({
            width: '-=5%',
            height: '-=5%'
        })
    })
    $("#no").click(function () {
        $("#nextwindow").css({
            "display":"none"
        })
    })
    $("#yes").click(function () {
        var pd=0;
        pd=taxi;
        console.log(pd);
        switch (pd) {
            case 1:{
            window.location.replace("daminggong/dmg.html");
            break;
            };
            case 2:{
                window.location.replace("dayangta/dyt.html");
                break;
            };
            case 3:{
                window.location.replace("mingchengqiang/mcq.html");
                break;
            };
            case 4:{
                window.location.replace("bingmayong/bmy.html");
                break;
            };
        }
    })
})