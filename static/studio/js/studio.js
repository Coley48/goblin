(function($) {
    "use strict";
    $(document).ready(function() {

        var resp = getS("/API/getStudio" + location.search).data[0];
        // var Studio = JSON.parse(resp);
        var Studio = resp;
        if (Studio.length == 0) {
            Alert("很抱歉，未找到相关结果！", "warning");
            $("#postcard").html("<p style='font-size:22px;padding:15px 40px'>未找到相关结果！</p>")
        }
        for (let i = 0; i < Studio.length; i++) {
            $("#postcard").append(`<div class="card card-horizontal" id="card_` + Studio[i].id + `">
                    <div class="card-body">
                        <div class="card-horizontal-left">
                            <div class="card-category">
                                <a href="">` + Studio[i].class + `</a> </div>
                            <h3 class="card-title"><a href="">` + Studio[i].name + `</a></h3>
                            <div style="text-align: center;">
                                <p>` + Studio[i].info + `</p>
                            </div>
                            <div class="card-excerpt" style="margin-top:30px;">
                                <p style="display: inline;font-weight: 900;">地点:</p>
                                <p style="font-size: 12px;display: inline;margin-left: 10px;">` + Studio[i].location + `</p>
                            </div>
                            <div class="card-excerpt">
                                <p style="display: inline;font-weight: 900;">营业时间:</p>
                                <p style="font-size: 12px;display: inline;margin-left: 10px;">` + Studio[i].open + `</p>
                            </div>
                            <div class="card-excerpt">
                                <p style="display: inline;font-weight: 900;">价格:</p>
                                <p style="font-size: 12px;display: inline;margin-left: 10px;">￥` + Studio[i].price + `</p>

                            </div>
                            <div class="card-excerpt">
                                <p style="display: inline;font-weight: 900;">主营:</p>
                                <p style="font-size: 12px;display: inline;margin-left: 10px;">` + Studio[i].main + `</p>
                            </div>
                            <div class="card-excerpt">
                                <p style="display: inline;font-weight: 900;">联系电话:</p>
                                <p style="font-size: 12px;display: inline;margin-left: 10px;">` + Studio[i].phone + `</p>
                            </div>

                            <div class="card-horizontal-meta">

                                <div class="eskimo-reading-meta"><a onclick="More(` + Studio[i].id + `)">了解更多</a></div>
                            </div>
                        </div>
                        <div class="card-horizontal-right">
                            <a class="card-featured-img" href="">
                                <img src="` + Studio[i].wallpaper + `" />
                            </a>
                        </div>
                    </div>
                </div>`);
        }
        $(".card-excerpt").css("display", "none");

    });
})(jQuery);

function More(id) {
    $("#card_" + id + " .card-excerpt").toggle(500);
}