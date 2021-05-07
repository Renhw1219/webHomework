window.onload = function() {

    // 第一部分
    var imgObj = document.getElementsByClassName("u-img");
    var ampObj = document.getElementsByClassName("m-amp")[0];
    var imgsObj = document.querySelectorAll(".g-project8_1>div:nth-child(1)")[0];
    var i = 0;
    console.log(imgObj[0].src);
    ampObj.style.opacity = 0;
    for (let r = 0; r < imgObj.length; r++) {
        imgObj[r].onclick = function(event){
            event.stopPropagation();
            document.getElementsByClassName("u-amp")[0].src = this.src;
            ampObj.style.display = "block";
            var fadeIn = setInterval(function() {
                i += 0.1;
                ampObj.style.opacity = i;
                imgsObj.style.filter = "blur(" + i*5 + "px)";
                if (i >= 1) {
                    i = 1;
                    clearInterval(fadeIn);
                }
            }, 100);
        }
    }
    document.getElementsByTagName("body")[0].onclick = function(){
        var fadeOut = setInterval(function() {
            i = i - 0.1;
            ampObj.style.opacity = i;
            imgsObj.style.filter = "blur(" + i*5 + "px)";
            if (i <= 0) {
                clearInterval(fadeOut);
                imgsObj.style.filter = "blur(0px)";
                ampObj.style.display = "none";
                i = 0;           
            }
        }, 100);
    }

    // 第二部分
    var pageObj = document.querySelectorAll(".m-page > img");
    var navObj = document.querySelectorAll(".m-nav > span");
    for (let r = 0; r < navObj.length; r++) {
        navObj[r].onclick = function(event){
            event.stopPropagation();
            for (let c = 0; c < pageObj.length; c++) {
                pageObj[c].style.display = "none";
                navObj[c].style.background = "#fff";
            }
            console.log();
            document.getElementsByClassName(event.target.className.split(" ")[0])[1].style.display = "block";
            this.style.background = "rgb(44, 196, 208)";
        }
    }
    document.getElementsByClassName("g-project8_2")[0].onclick = function(event){
        event.stopPropagation();
        for (let c = 0; c < pageObj.length; c++) {
            pageObj[c].style.display = "none";
            navObj[c].style.background = "#fff";
        }
    }

    // 第三部分
    var box3Obj = document.getElementsByClassName("g-project8_3")[0];
    var dataObj = document.getElementsByClassName("m-data");
    var dltObj = document.getElementsByClassName("u-dlt");
    var addBtnObj = document.getElementsByClassName("u-btn")[0];
    console.log(addBtnObj);
    // var lastDataObj = document.querySelectorAll(".g-project8_3 .m-data:last")[0];
    var con = ["玛卡巴卡", "唔西迪西", "依古比古", "汤姆布利柏·安"];
    addBtnObj.onclick = function(event){
        event.stopPropagation();
        let r = Math.round(Math.random()*3);
        var numTxt = document.createTextNode(dataObj.length+1);
        var nameTxt = document.createTextNode(con[r]);
        var dltTxt = document.createTextNode("Delete");
        var numDiv = document.createElement("div");
        var nameDiv = document.createElement("div");
        var dltDiv = document.createElement("div");
        numDiv.appendChild(numTxt);
        nameDiv.appendChild(nameTxt);
        dltDiv.appendChild(dltTxt);
        dltDiv.className = "u-dlt";
        var dataDiv = document.createElement("div");
        dataDiv.className = "m-data";
        dataDiv.appendChild(numDiv);
        dataDiv.appendChild(nameDiv);
        dataDiv.appendChild(dltDiv);
        box3Obj.insertBefore(dataDiv, addBtnObj);
    }
    
    box3Obj.addEventListener('click', function(e){
        event.stopPropagation();
        var item = e.target;
        if (item.innerHTML == "Delete") {
            item.parentNode.parentNode.removeChild(item.parentNode);
            for (let r = 0; r < dataObj.length; r++) {
                dataObj[r].firstChild.innerHTML = r + 1;
            }
        }

    });

}