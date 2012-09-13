//<![CDATA[
function getDocWidth() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollWidth, D.documentElement.scrollWidth),
        Math.max(D.body.offsetWidth, D.documentElement.offsetWidth),
        Math.max(D.body.clientWidth, D.documentElement.clientWidth)
    );
}
function OnBodyLoad() {
    try {
        window.moveTo(0, 0);
        window.resizeTo(window.screen.availWidth, window.screen.availHeight);
        var D = document;
        document.body.style.height = D.documentElement.clientHeight + 'px';
        document.getElementById('container').setAttribute("style", "position: absolute; top: 50%; margin-top: -" + D.documentElement.clientHeight / 2 + "px; left: 0; width: 100%");
        document.getElementById('content').setAttribute("style", "height: " + D.documentElement.clientHeight + "px; margin-left: auto; margin-right: auto; width: 100%");
    }
    catch (e) {
    }
}
/*
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-18775332-2']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();*/
function LoadPage(url) {
    document.location.href = url;
}
function OpenPage(url) {
    window.open(url, '', '', '');
}
function CheckPageDone(NextPage) {
    var pagedone = document.getElementById("PageDone").value;
    if (pagedone != "" && pagedone != null) {
        document.getElementById("PageDone").value = "";
        if (NextPage != '')
            document.location.href = NextPage;
    }
    else
        setTimeout("CheckPageDone('" + NextPage + "');", 100);
}
function CheckMessages() {
    try {
        var message = document.getElementById("MessageText").value;
        if (message != "" && message != null) {
            alert(message)
            document.getElementById("MessageText").value = "";
        }
    } catch (e) { }
}
function AdminMessage() {
    //var message = 'سيستم نماد اعتماد الکترونيکي به دليل بروزرساني در تاريخ 91/2/10 از ساعت 12 الي 13 غيرفعال مي باشد';
    var message = '';
    if (message != '')
        alert(message)
}
function setOnloadTiming() {
    setInterval("CheckMessages();", 100);
}
function Goto(path) {
    document.location.href = path;
}
function ShowHideBtnSubmit(CheckBoxId, BtnSubmit) {
    try {
        var CheckBox = document.getElementById(CheckBoxId);
        if (CheckBox.checked)
            BtnSubmit.disabled = false;
        else
            BtnSubmit.disabled = true;
    } catch (e) { alert(e) }
}
function ShowHideLogo(img, tr_logo) {
    var tr_Logo = document.getElementById(tr_logo);
    if (tr_Logo.style.display == "" || tr_Logo.style.display == null) {
        tr_Logo.style.display = "none";
        img.setAttribute("src", "Images/splitter_verExp.gif");
        img.setAttribute("onmouseover", "this.src='Images/splitter_verExpHover.gif'");
        img.setAttribute("onmouseout", "this.src='Images/splitter_verExp.gif'");
    }
    else {
        tr_Logo.style.display = "";
        img.setAttribute("src", "Images/splitter_verCol.gif");
        img.setAttribute("onmouseover", "this.src='Images/splitter_verColHover.gif'");
        img.setAttribute("onmouseout", "this.src='Images/splitter_verCol.gif'");
    }
}
function checkDDLCity(ddlcity) {
    if (ddlcity.options.length == 0)
        alert("ابتدا استان را انتخاب كنيد");
}
function checkDDLMaterialGroup(ddlMaterialGroup) {
    if (ddlMaterialGroup.options.length == 0)
        alert("ابتدا كلاس كالا يا خدمت را انتخاب كنيد");
}
function PopupCenter(pageURL, title, w, h) {
    try {
        var left = (screen.width / 2) - (w / 2);
        var top = (screen.height / 2) - (h / 2) - 50;
        var targetWin = window.open(pageURL, title, 'toolbar=no, location=yes, directories=no, status=yes, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    }
    catch (e) {
        alert(e.description);
    }
}
function PopupCenter_img(pageURL) {
    try {
        var targetWin = window.open(pageURL, null, 'toolbar=no, location=yes, directories=no, status=yes, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no');
    }
    catch (e) {
        alert(e.description);
    }
}
function ViewTrustInfo(item) {
    try {
        PopupCenter('License.aspx?' + item, null, 580, 570);
    } catch (e) {
        alert(e.description);
    }
}
function print() {
    javascript: window.print();
}
function SendIPToServer() {
    try {
        if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
        else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.open("GET", "http://api.hostip.info/get_html.php", false);
        xmlhttp.send();
        hostipInfo = xmlhttp.responseText.split("\n");
        for (i = 0; hostipInfo.length >= i; i++) {
            ipAddress = hostipInfo[i].split(":");
            if (ipAddress[0] == "IP") {
                ETrustAjax.SetSession(ipAddress[1], "HostIP");
            }
        }
        return false;
    } catch (e) {
    }
}
//]]>