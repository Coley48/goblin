(function($) {
    "use strict";
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function() {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


})(jQuery);


var user = getS("/API/login");

if (typeof user == "undefined" || user.code != 200) {
    Alert("请先登录，即将跳转至登录页！", "info", JumpFunc("/login.html?j=contact.html"));
}

function submit() {
    if (typeof user == "undefined" || user.code != 200) {
        return
    }
    if (verify("name", "email", "phone", "message")) {
        Alert("发送成功！即将返回。", "info", function() {
            window.close();
            location.href = "/home.html";
        });

        data = pack(name, email, phone, message);
        data.uid = parseInt(user.data[0])
        data.datetime = new Date().datetime();
        postA("/API/contact", data, JumpFunc("/home.html"));
    } else {
        Alert("请填写完整哦！", "warning");
    }
}

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