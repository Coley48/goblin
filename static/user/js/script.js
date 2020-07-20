resp = getS("/API/userInfo");

if (resp && resp.code == 200) {
    items = resp.data[0];
    $("#username").html(items.username)
    $(".menu-title").html(items.username)
    if (items.brief) {
        $("#brief").html(items.brief)
    }
    if (items.story) {
        $("#story").html(items.story)
    }

    avator = $("img.AVATOR").attr("src", items.avator);
    background = $("img.BACKGROUND").attr("src", items.background);

    avatorIMG = $("#avator").attr("src", items.avator);
    backgroundIMG = $("#background").attr("src", items.background);

    Email = $("#email").val(items.email);
    Phone = $("#phone").val(items.phone);
    Brief = $("#setBrief").val(items.brief);
    Story = $("#setStory").val(items.story)
    Password = $("#password");
    Confirmation = $("#confirmation");
} else {
    location.href = "/login.html?j=user.html";
}


function submit() {
    if (verify("email", "phone", "setBrief", "setStory")) {

        if (Password.val() != "") {
            if (Password.val() != Confirmation.val()) {
                Alert("密码不一致！", "warning");
                return
            } else if (Password.val().length < 6) {
                Alert("密码长度不能少于6位！", "warning")
                return
            }
            items.Password = Password.val();
        }

        items.email = Email.val();
        items.phone = Phone.val();
        items.brief = Brief.val();
        items.story = Story.val();

        postA("/API/userInfo", items, Jump("fresh"));
    }
}

function upload(obj, param) {
    var img = new FormData();
    img.append("file", $(obj)[0].files[0]);
    $.ajax({
        url: "/API/upload?s=" + param,
        type: "POST",
        data: img,
        contentType: false,
        processData: false,
        dataType: "json",
        complete: function(res) {
            var result = res.responseJSON;
            if (result.code == 200) {
                // console.log(result.data[0])
                if (param == "avator") {
                    items.avator = result.data[0];
                } else {
                    items.background = result.data[0];
                }

                postA("/API/userInfo", items);
            } else {
                Alert(result.info, "info");
            }
        }
    });
}

function logout() {
    if (confirm("确认退出？")) {
        getS("/API/logout", Jump("/home.html"));
    }
}

var avatorIpt = $("#avatorIpt");
var backgroundIpt = $("#backgroundIpt");
avatorIpt.bind("change", function(e) {
    var fire = new FileReader();
    var file = avatorIpt[0].files[0];
    fire.readAsDataURL(file);
    fire.onload = function() {
        avator.attr("src", this.result);
        avatorIMG.attr("src", this.result);
    }
})
backgroundIpt.bind("change", function(e) {
    var fire = new FileReader();
    var file = backgroundIpt[0].files[0];
    fire.readAsDataURL(file);
    fire.onload = function() {
        background.attr("src", this.result);
        backgroundIMG.attr("src", this.result);
    }
})


Cards = getS("/API/getUserCards").data[0];
for (let i = 0; i < Cards.length; i++) {
    if (Cards[i].image == "") {
        $("#cardGrid").append(`<div class="col-xs-12 col-sm-6 item grid-sizer text">
                                            <div class="project_content">
                                                <div class="my__img">
                                                    <img src="/static/user/img/w` + Math.ceil(Math.random() * 10) + `.jpg" alt="">
                                                    </div>
                                                    <div class="info">
                                                        <div class="display-table">
                                                            <div class="display-table-cell">
                                                                <a class="popup-with-zoom-anim one-pan-link-mark" href="#slider_popup" id="` + i + `" onclick="Detail(this.id)">
                                                                    <h3>` + Cards[i].title + `</h3>
                                                                    <p>` + Cards[i].datetime + `</p>
                                                                    </a>
                                                                    </div>
                                                                    </div>
                                                                    </div>
                                                                    </div>
                                                                    </div>`);
    } else {
        var Images = Cards[i].image.split(",");
        $("#cardGrid").append(`<div class="col-xs-12 col-sm-6 item grid-sizer pics">
                                            <div class="project_content">
                                                <div class="my__img">
                                                    <img src="/upload/` + Cards[i].uid + "/" + Images[0] + `" alt="">
                                                    </div>
                                                    <div class="info">
                                                        <div class="display-table">
                                                            <div class="display-table-cell">
                                                                <a class="popup-with-zoom-anim one-pan-link-mark" href="#slider_popup" id="` + i + `" onclick="Detail(this.id)">
                                                                    <h3>` + Cards[i].title + `</h3>
                                                                    <p>` + Cards[i].datetime + `</p>
                                                                    </a>
                                                                    </div>
                                                                    </div>
                                                                    </div>
                                                                    </div>
                                                                    </div>`);
    }
}

function Detail(id) {
    location.hash = "#" + id
    $("#title").html(Cards[id].title);
    $("#author").html(`<span>作者：</span>` + Cards[id].username);
    $("#date").html(`<span>日期：</span>` + Cards[id].datetime);
    $("#content").html(Cards[id].content)
    $("#firstUL").html("")

    var randSrc = "../static/user/img/w" + Math.ceil(Math.random() * 10) + ".jpg";
    if (Cards[id].image == "") {
        $("#firstUL").append(`<li><img src="../static/user/img/none.jpg" alt=""></li>`)
        $("#secondIMG").attr("src", randSrc)
    } else {
        var Images = Cards[id].image.split(",");
        for (let i = 0; i < Images.length; i++) {
            $("#firstUL").append(`<li ><img src="/upload/` + Cards[id].uid + "/" + Images[i] + `" alt=""></li>`)
        }

    }
    $(".rslides").responsiveSlides({ random: true });
}

function delCard() {
    var i = location.hash[1];
    if (confirm("确认删除？")) {
        getA("/API/delCard?cid=" + Cards[i].id, Jump("fresh"));
    }
}