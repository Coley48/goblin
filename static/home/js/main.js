var loginfo = getS("/API/login");
var login = $("#login");
if (loginfo && loginfo.code == 200) {
    if (loginfo.data[0] != "") {
        login.attr("href", "/user.html");
        login.html(loginfo.data[1]);
    } else {
        login.attr("href", "/login.html?j=home.html");
        login.html("登录");
    }
}

var winWidth = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
if (winWidth > 768) {
    dp = new DPlayer({
        container: document.getElementById('dplayer'),
        screenshot: true,
        volume: 0.5,
        logo: "../static/all/img/goblin-logo-pink.png",
        video: {
            url: './static/all/media/video.mp4',
            // pic: './static/home/img/home/video.jpg',
        },
        danmaku: {
            id: new Date().getTime(),
            uid: -1, // 未登录
            user: 'any',
            api: '/API/danmaku',
            bottom: '15%',
            maximum: 1000,
            // unlimited: true,
        },
    });
    dp.on('danmaku_send', function() {
        $("input.dplayer-comment-input").val("");
        $(".dplayer-comment-setting-box").removeClass("dplayer-comment-setting-open");
        homeinfo.data[0].danma += 1;
        danmaCount.html(homeinfo.data[0].danma)
    });
} else {
    dp = new DPlayer({
        container: document.getElementById('dplayer'),
        screenshot: true,
        volume: 0.5,
        logo: "../static/all/img/goblin-logo-pink.png",
        video: {
            url: './static/all/media/video.mp4',
        }
    });
}



new ClipboardJS('.link');


var danmaCount = $("#danmaCount");
var fondCount = $("#fondCount");
var shareCount = $("#shareCount");

var homeinfo = getS("/API/homeinfo?column=all");
if (homeinfo && homeinfo.code == 200) {
    danmaCount.html(homeinfo.data[0].danma);
    fondCount.html(homeinfo.data[0].fond);
    shareCount.html(homeinfo.data[0].share);
}

var fonded = false;

function AddFond() {
    if (fonded == false) {
        getA("/API/homeinfo?column=fond");
        homeinfo.data[0].fond += 1;
        fondCount.html(homeinfo.data[0].fond);
        fonded = true;
    }
}

function AddShare() {
    getA("/API/homeinfo?column=share");
    homeinfo.data[0].share += 1;
    shareCount.html(homeinfo.data[0].share);
    Alert("复制链接成功！", "info");
}

function MoreAbout() {
    $("#more").toggle(500);
}


const QQ = document.getElementById("QQ");
const WeChat = document.getElementById("WeChat");
const tooltip = document.getElementById('tooltip');
const IMG = $("#tooltip img");

let curInstance = null;

function show(obj) {
    tooltip.setAttribute('data-show', '');
    curInstance = Popper.createPopper(obj, tooltip, {
        placement: "top",
        modifiers: [{
            name: 'offset',
            options: {
                offset: [0, 8],
            },
        }, ],
    });

}

function hide() {
    tooltip.removeAttribute('data-show');
    if (curInstance) {
        curInstance.destroy();
        curInstance = null;
    }
}

const showEvents = ['mouseenter', 'focus', "click"];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach(event => {
    QQ.addEventListener(event, function(e) {
        IMG.attr("src", "../static/all/img/QQ.JPG");
        show(e.target);
    });
    WeChat.addEventListener(event, function(e) {
        IMG.attr("src", "../static/all/img/WeChat.jpg");
        show(e.target);
    });
});

hideEvents.forEach(event => {
    QQ.addEventListener(event, function() {
        hide()
    });
    WeChat.addEventListener(event, function() {
        hide()
    });
});