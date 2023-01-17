function countDown() {
    let date = new Date();
    let now = date.getTime();

    let str = "2023/01/22 00:00:00";
    let endDate = new Date(str);
    let end = endDate.getTime();

    let leftTime = end - now;

    let d, h, m, s;
    if (leftTime >= 0) {
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
    }
    
    //当d大于10时，隐藏hour,min,sec元素
    if (d > 5) {
        document.getElementById("Tools").style.textAlign = "center";
        document.getElementById("hour").style.display = "none";
        document.getElementById("min").style.display = "none";
        document.getElementById("sec").style.display = "none";
    }
    if (d <= 5) {
        document.getElementById("Tools").style.textAlign = "center";
        document.getElementById("hour").style.display = "";
        document.getElementById("min").style.display = "none";
        document.getElementById("sec").style.display = "none";
    }
    
    if (d <= 3) {
        document.getElementById("hour").style.display = "";
        document.getElementById("min").style.display = "";
        document.getElementById("sec").style.display = "none";
    }
    if (d <= 1) {
        document.getElementById("hour").style.display = "";
        document.getElementById("min").style.display = "";
        document.getElementById("sec").style.display = "";
    }
    
    document.getElementById("day").innerHTML = d + " Days";
    document.getElementById("hour").innerHTML = h + " Hrs";
    document.getElementById("min").innerHTML = m + " Mins";
    document.getElementById("sec").innerHTML = s + " s";

    // 每一秒刷新一次倒计时
    setTimeout(countDown, 1000);
}
