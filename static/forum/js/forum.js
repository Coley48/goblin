var user = getS("/API/login");
var sideBtn = $(".sideBtn");
var sideBar = $(".sideBar");

function verifyLogin() {
    if (typeof user == "undefined" || user.code != 200) {
        Alert("请先登录，即将跳转至登录页！", "info", JumpFunc("/login.html?j=forum.html"));
        return false
    }
    return true
}

function openBar() {
    if (verifyLogin() == false) {
        return
    }

    sideBtn.hide();
    sideBar.css("width", "100%");
    document.documentElement.style.overflowY = 'hidden';
}

function closeBar() {
    sideBar.css("width", "0");
    setTimeout(function() {
        sideBtn.fadeIn(800)
        document.documentElement.style.overflowY = 'scroll';
    }, 500)
}

window.onscroll = function sideBtnToggle() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 50) {
        sideBtn.fadeIn(500);
    } else {
        sideBtn.fadeOut(500);
    }
}

var image = [];

Dropzone.options.myDropzone = {
    url: "/API/upload?s=images",
    maxFiles: 10,
    // maxFilesize: 4, // MB
    dictDefaultMessage: "点击或拖动上传图片",
    acceptedFile: "image/*",
    uploadMultipe: true,
    addRemoveLinks: true,
    accept: function(file, done) {
        if (file.name == "") {
            done("don't.");
        } else {
            done();
        }
    },
    init: function() {
        this.on("addedfile", function(file) {
            image.push(file.name)
        });
        this.on("removedfile", function(file) {
            index = image.indexOf(file.name)
            if (index > -1) {
                image.splice(index, 1);
            }
        })
    }
};

function submit() {
    if (verify(title, content)) {
        var formData = pack(title, content);
        formData["uid"] = Number(user.data[0]);
        formData["username"] = user.data[1];
        formData["datetime"] = new Date().datetime();
        formData["click"] = 0;
        formData["comment"] = 0;
        formData["image"] = image.toString();

        postA("/API/upload?s=forum", formData, Jump("fresh"))
    }
}

var page = 1;

function showMoreCard() {

    var resp = getS("/API/getCards?p=" + page + "&n=10");
    var items = resp.data[0];

    if (items.length == 0) {
        Alert('到底了，再到别出去逛逛吧！');
        return
    }
    for (let i = 0; i < items.length; i++) {
        setData(items[i], i);
    }

    page++;
}

function setData(item, i) {
    if (item.image == "") {
        $("#Article").append(`<div class='post post-layout-list' data-aos='fade-up'>
            <div class='postnormal review'>
            <div class='post-container review-item'>
            <div class='row review-item-wrapper'>
            <div class='col-sm-3'>
            <a rel='nofollow'>
            <div class='review-item-img' style='background-image: url(/resource/avator/` + item.uid + `.jpg);'></div>
            </a>
            </div>
            <div class='col-sm-9 flex-xs-middle'>
                        <div class='review-item-title'>
                        <a rel='bookmark'>` + item.title + `</a>
                        </div>
                        <div class='review-item-creator'><b>发布日期：</b>` + item.datetime + `</div>
                        <div class='review-item-creator'><b>总浏览量：</b>` + item.click + ` 浏览</div>
                </div>
                </div>
                <div class='review-bg-wrapper'>
                <div class='bg-blur' style='background-image: url(../static/forum/img/background/` + Math.ceil(Math.random() * 10) + `.jpg);'></div>
                </div>
                </div>
                <div class='post-container' id='c` + item.id + `'>
                <div class='entry-content'>` + item.content + `</div>
                <div class='post-footer'>
                <div class='comment-holder fir'>
                <div class='comment-holder sec'>
                </div>
                <div class='comment-bottom'>
                <div class='comment-bottom-baseline'></div>
                <div class='comment-bottom-center'><a class='moreBtn' onclick='moreComment(` + item.id + `)'>收起</a></div>
                <div class='comment-bottom-baseline'></div>
                </div>
                </div>
                <input type='text' class='comment-input' placeholder='快来发表你的观点' />
                <a class='gaz-btn showBtn' onclick='showComment(` + item.id + `)'>查看评论</a>
                <div class='total-comments'>` + item.comment + ` Comments</div>
                </div>
                </div>
                </div>
                </div>`);
    } else {
        var card = `<div class="post post-layout-list js-gallery" data-aos="fade-up">
                        <div class="post-album">
                            <div class="row content">
                                <div class="bg" style="background-image: url(../static/forum/img/background/` + Math.ceil(Math.random() * 10) + `.jpg);"></div>
                                <div class="contentext flex-xs-middle">
                                    <div class="album-title">
                                        <a>` + item.title + `</a>
                                    </div>
                                    <div class="review-item-info"><b>发布日期：</b>` + item.datetime + `</div>
                                    <div class='review-item-info'><b>总浏览量：</b>` + item.click + ` 浏览</div>
                                    <div class="album-content">` + item.content + `</div>
                                </div>
                                <div class="col-xs-4">
                                    <ul class="rslides" data-cid='` + item.id + `'>`;
        var images = item.image.split(",");
        for (let j = 0; j < images.length; j++) {
            card += `<li><img class="thumb" src='./upload/` + item.uid + `/` + images[j] + `' /></li>`;
        }
        card += `</ul></div></div></div></div>`
        $("#Article").append(card)
    }
}

$(function() {
    showMoreCard();
    $(".rslides").responsiveSlides({ random: true });

    var displayDIV = $("#display");
    var displayIMG = $("#display img");
    $(".row.content img").click(function(e) {
        displayDIV.show();
        displayIMG.attr("src", e.target.src);
        document.documentElement.style.overflowY = 'hidden';
        var cid = $(e.target).parents('.rslides').attr("data-cid");
        postA("/API/getCards?cid=" + cid)
    });
    displayIMG.click(function() {
        displayDIV.hide();
        document.documentElement.style.overflowY = 'scroll';
    })
})

var record = {};

function showComment(cid) {
    if (verifyLogin() == false) {
        return
    }

    var postcard = $("#c" + cid)
    var firHolder = postcard.find(".fir");
    var secHolder = postcard.find(".sec");
    var comInput = postcard.find(".comment-input");

    if (typeof record[cid] == "undefined") {
        var resp = getS("/API/comment?cid=" + cid);

        if (resp && resp.code == 200) {
            postcard.find(".showBtn").html("发表评论");
            postcard.find(".total-comments").hide();

            var cmt = resp.data[0];
            var first = "";
            var second = "";

            for (let i = 0; i < cmt.length; i++) {
                var temp = "<div class='comment-div'><img src='./resource/avator/" + cmt[i].uid + ".jpg' onerror='noAvator(this)'><span class='comment-user'>" + cmt[i].username + "</span>：<span class='comment-text'>" + cmt[i].content + "</span><span class='comment-time'>" + transform(cmt[i].datetime) + "</span></div>";
                if (i < 6) {
                    first += temp;
                } else
                    second += temp;
            }
            firHolder.prepend(first).slideDown(800, function() {
                comInput.fadeIn(100);
            });
            if (cmt.length > 6) {
                postcard.find(".moreBtn").html("查看更多");
                record[cid] = 1;
            } else {
                postcard.find(".moreBtn").html("收起");
                record[cid] = 2;
            }
            secHolder.prepend(second);
        }
    } else if (record[cid] == 0) {
        postcard.find(".showBtn").html("发表评论");
        firHolder.slideDown(800);
        record[cid] = 2;
        postcard.find(".total-comments").fadeOut(300, function() {
            comInput.fadeIn(300);
        });

    } else {
        if (comInput.val() != "") {
            var datetime = new Date().datetime();
            postA("/API/comment", { uid: parseInt(user.data[0]), username: user.data[1], cid: cid, content: comInput.val(), datetime: datetime });
            firHolder.prepend("<div class='comment-div'><img src='./resource/avator/" + user.data[0] + ".jpg'><span class='comment-user'>" + user.data[1] + "</span>：<span class='comment-text'>" + comInput.val() + "</span><span class='comment-time'>" + transform(datetime) + "</span></div>");
            comInput.val("");
        } else {
            Alert("你还没写下你的评论！", "warning")
        }
    }
}

function moreComment(cid) {
    var postcard = $("#c" + cid);

    if (record[cid] === 1) {
        postcard.find(".sec").slideDown(800);
        postcard.find(".moreBtn").html("收起");
        record[cid] = 2;
    } else {
        postcard.find(".fir").slideUp(800);
        postcard.find(".showBtn").html("查看评论");
        postcard.find(".comment-input").fadeOut(300, function() {
            postcard.find(".total-comments").fadeIn(300);
        });
        record[cid] = 0;
    }

}


unit = ["年前", "个月前", "天前", "小时前", "分钟前"];

function transform(dt) {
    var time = dt.split(/-|\s|:/);
    var now = new Date().datetime().split(/-|\s|:/);

    for (i in time) {
        if (time[i] != now[i]) {
            return (now[i] - time[i]) + unit[i]
        }
    }
    return "刚刚"
}


function noAvator(obj) {
    obj.src = "./resource/avator/default.jpg";
}