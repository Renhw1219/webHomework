$(function() {

    // 第一部分
    var $imgObj = $(".u-img");
    var $ampObj = $(".m-amp");
    $imgObj.click(function(event) {
        /* Act on the event */
        event.stopPropagation();
        $(".u-amp").attr("src", $(this).attr("src"));
        $ampObj.fadeIn(500);
        $(".g-project8_1>div:nth-child(1)").css({
            "filter": "blur(5px)"
        });
    });
    $(document).click(function(event) {
        /* Act on the event */
        $ampObj.fadeOut(500, function() {
            $(".g-project8_1>div:nth-child(1)").css({
                "filter": "blur(0px)"
            })
        });
    });

    // 第二部分
    var $pageObj = $(".m-page").children();
    var $navObj = $(".m-nav").children();
    $navObj.click(function(event) {
        /* Act on the event */
        event.stopPropagation();
        $pageObj.hide();
        $navObj.css("background", "#fff");
        $(".m-page ." + $(this).attr("class")).show();
        $(this).css("background", "rgb(44, 196, 208)");
    });
    $(".g-project8_2").click(function(event) {
        /* Act on the event */
        $pageObj.hide();
        $navObj.css("background", "#fff");
    });
    
    // 第三部分
    var $box3Obj = $(".g-project8_3");
    var $dataObj = $(".m-data");
    var $addBtnObj = $box3Obj.children(":last");
    var $lastDataObj = $box3Obj.children(".m-data:last");
    var con = ["玛卡巴卡", "唔西迪西", "依古比古", "汤姆布利柏·安"];
    $addBtnObj.click(function(event) {
        /* Act on the event */
        let i = Math.round(Math.random()*3);
        var newData = $("<div class=\"m-data\"><div>" + 
            ($dataObj.length+1) + "</div><div>" + con[i] +
            "</div><div class=\"u-dlt\">Delete</div>" + "</div>");
        if ($dataObj.length == 0) {
            newData.prependTo($box3Obj);
        }
        else {
            newData.insertAfter($lastDataObj);
        }
        $dataObj = $(".m-data");
        $lastDataObj = $box3Obj.children(".m-data:last");
    });
    $("body").on("click", ".u-dlt", function(){
        /* Act on the event */
        $(this).parent().remove();
        $dataObj = $(".m-data");
        $lastDataObj = $box3Obj.children(".m-data:last");
        $dataObj.each(function(i,n){
            $(n).children().first().text(i+1);
        });
    });
    
});