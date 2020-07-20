function pack() {
    data = {};
    for (i in arguments) {
        var key = arguments[i].id;
        var value = arguments[i].value;
        data[key] = value;
    }
    return data;
}

function packs() {
    data = {};
    for (i in arguments) {
        var key = arguments[i].id;
        var value = btoa(encodeURIComponent(arguments[i].value));
        data[key] = value;
    }
    return data;
}

// 同步post
function postS(URL, data, succ, fail) {
    var result;
    $.ajax({
        url: URL,
        method: "post",
        data: JSON.stringify(data),
        async: false,
        contentType: "application/json",
        complete: function(resp) {
            result = resp.responseJSON;
            Respond(result, succ, fail);
        }
    });

    return result;
}

// 异步post
function postA(URL, data, succ, fail) {
    $.ajax({
        url: URL,
        method: "post",
        data: JSON.stringify(data),
        async: false,
        contentType: "application/json",
        complete: function(resp) {
            Respond(resp.responseJSON, succ, fail);
        }
    });
}




function getS(URL, succ, fail) {
    var result;
    $.ajax({
        url: URL,
        method: "get",
        async: false,
        contentType: "application/json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        complete: function(resp) {
            result = resp.responseJSON;
            // if (typeof result == "undefined") {
            //     console.log("数据错误:" + URL);
            //     return null;
            // }
            Respond(result, succ, fail);
        }
    });
    return result;
}

function getA(URL, succ, fail) {
    $.ajax({
        url: URL,
        method: "get",
        async: true,
        contentType: "application/json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        complete: function(resp) {
            result = resp.responseJSON;
            Respond(result, succ, fail);
        }
    });
}

function Respond(re, succ, fail) {
    if (re.info != "") {
        switch (Math.floor(re.code / 100)) {
            case 2:
                Alert(re.info, "success");
                break;

            case 1:
                Alert(re.info, "info");
                break;

            case 4:
                Alert(re.info, "warning");
                break;

            case 3:
            case 5:
            default:
                break;
        }

    }
    setTimeout(function() {
        if (re.code == 200) {
            if (typeof succ == "function") {
                succ();
            }
        } else {
            if (typeof fail == "function") {
                fail();
            }
        }
    }, 3800);
}

function Jump(href, info = null) {
    if (href == false) {
        return
    }

    if (info !== null) {
        Alert(info, "info", Jump(href));
        return
    }

    switch (href) {
        case "back":
            window.history.back(-1);
            break;
        case "fresh":
            location.reload(true);
            break;
        case "close":
            window.opener = window;
            var win = window.open("", "_self");
            win.close();
            top.close();
            break;
        default:
            location.href = href;
            break
    }
}

function JumpFunc(href, info = null) {
    return function() {
        Jump(href, info)
    }
}

Date.prototype.datetime = function() {
    return (
        this.getFullYear() +
        "-" +
        format(this.getMonth() + 1) +
        "-" +
        format(this.getDate()) +
        " " +
        format(this.getHours()) +
        ":" +
        format(this.getMinutes())
    );
};

function format(num) {
    if (num < 10) {
        return "0" + num;
    }
    return num;
}

function getParameter(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return "";
}


function no() {
    return false;
}

document.oncontextmenu = no;
document.ondrag = no;

var element = new Image();
Object.defineProperty(element, "id", {
    get: function() {
        window.location = "about:blank";
    }
});
// console.log(element);

// ..............................................................
function verify() {
    var flag = true;
    for (i in arguments) {
        var arg = $("#" + arguments[i])
        if (arg.val() == "") {
            arg.css("borderColor", "red");
            flag = false;
        } else {
            arg.css("borderColor", "lightgrey");
        }
    }
    return flag;
}

// Alert .............................................................
var Open = ['animated backInDown', 'animated backInLeft', 'animated backInRight', 'animated backInUp', 'animated bounceIn', 'animated bounceInDown', 'animated bounceInLeft', 'animated bounceInRight', 'animated bounceInUp', 'animated fadeIn', 'animated fadeInDown', 'animated fadeInDownBig', 'animated fadeInLeft', 'animated fadeInLeftBig', 'animated fadeInRight', 'animated fadeInRightBig', 'animated fadeInUp', 'animated fadeInUpBig', 'animated fadeInTopLeft', 'animated fadeInTopRight', 'animated fadeInBottomLeft', 'animated fadeInBottomRight', 'animated flipInX', 'animated flipInY', 'animated lightSpeedInRight', 'animated lightSpeedInLeft', 'animated rotateIn', 'animated rotateInDownLeft', 'animated rotateInDownRight', 'animated rotateInUpLeft', 'animated rotateInUpRight', 'animated rollIn', 'animated rollOut', 'animated zoomIn', 'animated zoomInDown', 'animated zoomInLeft', 'animated zoomInRight', 'animated zoomInUp', 'animated slideInDown', 'animated slideInLeft', 'animated slideInRight', 'animated slideInUp'];
var Close = ['animated backOutDown', 'animated backOutLeft', 'animated backOutRight', 'animated backOutUp', 'animated bounceOut', 'animated bounceOutDown', 'animated bounceOutLeft', 'animated bounceOutRight', 'animated bounceOutUp', 'animated fadeOut', 'animated fadeOutDown', 'animated fadeOutDownBig', 'animated fadeOutLeft', 'animated fadeOutLeftBig', 'animated fadeOutRight', 'animated fadeOutRightBig', 'animated fadeOutUp', 'animated fadeOutUpBig', 'animated fadeOutTopLeft', 'animated fadeOutTopRight', 'animated fadeOutBottomLeft', 'animated fadeOutBottomRight', 'animated flipOutX', 'animated flipOutY', 'animated lightSpeedOutRight', 'animated lightSpeedOutLeft', 'animated rotateOut', 'animated rotateOutDownLeft', 'animated rotateOutDownRight', 'animated rotateOutUpLeft', 'animated rotateOutUpRight', 'animated rollOut', 'animated rollOut', 'animated zoomOut', 'animated zoomOutDown', 'animated zoomOutLeft', 'animated zoomOutRight', 'animated zoomOutUp', 'animated slideOutDown', 'animated slideOutLeft', 'animated slideOutRight', 'animated slideOutUp'];

var len = Open.length;

function Alert(text, type, callback, position) {
    var index = Math.floor(Math.random() * len);

    new NoticeJs({
        text: text || type + ".",
        position: position || 'topCenter',
        type: type || "success",
        animation: {
            open: Open[index],
            close: Close[index],
        },
    }).on("onClose", callback).show();
}