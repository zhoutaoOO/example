$(function () {
    var daan=0;
    var maxtihao=10;
    var tihao=new Array;
    var diji=0;
    function  size(){
        $("#bcbody").css(
            "height",$(window).height()
        )
        $("#bcbody").css(
            "width",$(window).width()
        )
        $("#bodybc").css(
            "height",$(window).height()
        )
        $("#bodybc").css(
            "width",$(window).height()*1.8
        )
        if ($(window).width()>($(window).height()*1.8))
        {
            $("#bodybc").css(
                "left",($(window).width()-($(window).height()*1.8))/2
            )
        }
    }
    size();
    function fontsize(){
        $("#wendabc1").css(
            "font-size",($(window).height())/30+'px'
        )
        $("#wendabc2").css(
            "font-size",($(window).height())/30+'px'
        )
        $("#wendabc3").css(
            "font-size",($(window).height())/30+'px'
        )
        $("#wendabc4").css(
            "font-size",($(window).height())/30+'px'
        )
        $("#wenti").css(
            "font-size",($(window).height())/25+'px'
        )
    }
    fontsize();
    $(window).resize(function () {
        size();
        fontsize();
    })
    $("#bodybc").mouseover(function () {
        $(this).css(
            {
                "cursor":"url(../../../image/shubiao1.png),pointer"
            }
        )
    })
    $("#wendabc1").mouseover(function () {
        $(this).css(
            {
                "cursor":"url(../../../image/shubiao2.png),pointer"
            }
        )
        $(this).css(
            {
                "background-image":"url(\"../../../image/knowledge/wenda/wendakuangmove.png\")"
            }
        )
    })
    $("#wendabc2").mouseover(function () {
        $(this).css(
            {
                "cursor":"url(../../../image/shubiao2.png),pointer"
            }
        )
        $(this).css(
            {
                "background-image":"url(\"../../../image/knowledge/wenda/wendakuangmove.png\")"
            }
        )
    })
    $("#wendabc3").mouseover(function () {
        $(this).css(
            {
                "cursor":"url(../../../image/shubiao2.png),pointer"
            }
        )
        $(this).css(
            {
                "background-image":"url(\"../../../image/knowledge/wenda/wendakuangmove.png\")"
            }
        )
    })
    $("#wendabc4").mouseover(function () {
        $(this).css(
            {
                "cursor":"url(../../../image/shubiao2.png),pointer"
            }
        )
        $(this).css(
            {
                "background-image":"url(\"../../../image/knowledge/wenda/wendakuangmove.png\")"
            }
        )
    })
    $("#wendabc1").mouseleave(function () {
        $(this).css(
            {
                "background-image":"url(\"../../../image/knowledge/wenda/wendakuang.png\")"
            }
        )
    })
    $("#wendabc2").mouseleave(function () {
        $(this).css(
            {
                "background-image":"url(\"../../../image/knowledge/wenda/wendakuang.png\")"
            }
        )
    })
    $("#wendabc3").mouseleave(function () {
        $(this).css(
            {
                "background-image":"url(\"../../../image/knowledge/wenda/wendakuang.png\")"
            }
        )
    })
    $("#wendabc4").mouseleave(function () {
        $(this).css(
            {
                "background-image":"url(\"../../../image/knowledge/wenda/wendakuang.png\")"
            }
        )
    })
    $("#back").mouseover(function () {
        $(this).css(
            {
                "cursor":"url(../../../image/shubiao2.png),pointer"
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
        window,location.replace("../choose.html")
    })


    function restart() {
        $("#cuo1").css({
            "display":"none"
        })
        $("#cuo2").css({
            "display":"none"
        })
        $("#cuo3").css({
            "display":"none"
        })
        $("#cuo4").css({
            "display":"none"
        })
        $("#dui1").css({
            "display":"none"
        })
        $("#dui2").css({
            "display":"none"
        })
        $("#dui3").css({
            "display":"none"
        })
        $("#dui4").css({
            "display":"none"
        })
        $("#next").css({
            "display":"none"
        })
    }
    function suiji() {
        for (var i=0;i<maxtihao;i++)
        {
            tihao[i]=i;
        }
        tihao.sort(function () {
            return 0.5-Math.random();
        });
    }
    suiji();
    function wenti() {
        restart();
        if (diji==10)
        {
            alert("问答结束");
        }
        switch (tihao[diji]) {
            case 0:
            {
                $("#wenti").html("西安城墙主城门有四座，以下哪一个不是其中之一");
                $("#wendabc1").html("长乐门（东门）");
                $("#wendabc2").html("永宁门（南门）");
                $("#wendabc3").html("安近门（西门）");
                $("#wendabc4").html("安远门（北门）");
                daan=3;
            }break;
            case 1:
            {
                $("#wenti").html("兵马俑什么时候被发现的？");
                $("#wendabc1").html("1974年6月");
                $("#wendabc2").html("1974年5月");
                $("#wendabc3").html("1974年4月");
                $("#wendabc4").html("1974年3月");
                daan=4;
            }break;
            case 2:
            {
                $("#wenti").html("_______，大明宫毁于唐末战乱。");
                $("#wendabc1").html("唐昭宗乾宁三年（894年）");
                $("#wendabc2").html("唐昭宗乾宁三年（895年）");
                $("#wendabc3").html("唐昭宗乾宁三年（896年）");
                $("#wendabc4").html("唐昭宗乾宁三年（897年）");
                daan=3;
            }break;
            case 3:
            {
                $("#wenti").html("以下哪一个是原是大明宫中游园之一。");
                $("#wendabc1").html("梨园");
                $("#wendabc2").html("杏园");
                $("#wendabc3").html("林园");
                $("#wendabc4").html("果园");
                daan=1;
            }break;
            case 4:
            {
                $("#wenti").html("俑坑中最多的是____俑");
                $("#wendabc1").html("武士俑");
                $("#wendabc2").html("车兵俑");
                $("#wendabc3").html("立射俑");
                $("#wendabc4").html("跪射俑");
                daan=1;
            }break;
            case 5:
            {
                $("#wenti").html("西安城墙现存城墙为明代建筑，全长____千米");
                $("#wendabc1").html("13.7");
                $("#wendabc2").html("13.9");
                $("#wendabc3").html("14.7");
                $("#wendabc4").html("14.9");
                daan=1;
            }break;
            case 6:
            {
                $("#wenti").html("从民国开始为方便出入古城区，先后新辟了多座城门，至今西安城墙已有城门_____座。");
                $("#wendabc1").html("18");
                $("#wendabc2").html("17");
                $("#wendabc3").html("19");
                $("#wendabc4").html("20");
                daan=1;
            }break;
            case 7:
            {
                $("#wenti").html("_______，西安城墙被国务院公布为第一批全国重点文物保护单位。");
                $("#wendabc1").html("1961年03月04日");
                $("#wendabc2").html("1962年03月04日");
                $("#wendabc3").html("1963年03月04日");
                $("#wendabc4").html("1964年03月04日");
                daan=1;
            }break;
            case 8:
            {
                $("#wenti").html("该塔始建于唐朝__，起初是玄奘为保存佛经而建造的塔。");
                $("#wendabc1").html("永徽三年（652年）");
                $("#wendabc2").html("永徽六年（655年）");
                $("#wendabc3").html("永徽九年（658年）");
                $("#wendabc4").html("永徽十二年（661年）");
                daan=1;
            }break;
            case 9:
            {
                $("#wenti").html("以下哪一个遗存不属于西安。");
                $("#wendabc1").html("大雁塔");
                $("#wendabc2").html("兵马俑");
                $("#wendabc3").html("大明宫");
                $("#wendabc4").html("赤壁");
                daan=4;
            }break;
        }
        diji=diji+1;
        console.log(tihao,daan);
    }
    wenti();
    $("#next").mouseover(function () {
        $(this).css(
            {
                "cursor":"url(../../../image/shubiao2.png),pointer"
            }
        )
        $(this).animate({
            width: '+=3%',
            height: '+=5%'
        })
    })
    $("#next").mouseleave(function () {
        $(this).animate({
            width: '-=3%',
            height: '-=5%'
        })
    })
    $("#next").click(function () {
        wenti();
    })
    function next() {
        $("#wendabc1").click(function () {
            if (daan==1){
                $("#dui1").css({
                    "display":"block"
                })
                $("#next").css({
                    "display":"block"
                })
            }
            else
            {
                $("#cuo1").css({
                    "display":"block"
                })
            }
        })
        $("#wendabc2").click(function () {
            if (daan==2){
                $("#dui2").css({
                    "display":"block"
                })
                $("#next").css({
                    "display":"block"
                })
            }
            else
            {
                $("#cuo2").css({
                    "display":"block"
                })
            }
        })
        $("#wendabc3").click(function () {
            if (daan==3){
                $("#dui3").css({
                    "display":"block"
                })
                $("#next").css({
                    "display":"block"
                })
            }
            else
            {
                $("#cuo3").css({
                    "display":"block"
                })
            }
        })
        $("#wendabc4").click(function () {
            if (daan==4){
                $("#dui4").css({
                    "display":"block"
                })
                $("#next").css({
                    "display":"block"
                })
            }
            else
            {
                $("#cuo4").css({
                    "display":"block"
                })
            }
        })
    }
    next();

})
