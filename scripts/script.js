jQuery(document).ready(function() {
    var elem = jQuery(".nav").find("span");
    var secs = [];
    let i = 1;
    while (jQuery("#sec" + i).length) {
        secs.push(jQuery("#sec" + i));
        i++;
    }
    jQuery("#dropdown-content").hover(function() {
        elem.css("background-color", "#ddd");
    }, function() {
        elem.css("background-color", "#889199");
    })
    elem.hover(function() {
        elem.css("background-color", "#ddd");
    }, function() {
        elem.css("background-color", "#889199");
    });
    jQuery(window).scroll(function() {
        var height = jQuery(window).scrollTop() + 100;
        for (let i = 0; i < secs.length; i++) {
            if (height > secs[i].scrollTop() + 50) {
                secs[i].animate({
                    opacity: "1"
                }, {
                    duration: "5000"
                });
            }
        }
    });
})

i = 0
var image = new Image();

srcs = ["1.png", "2.jpg", "3.gif"];
image.onload = function () {
    jQuery("body").css("background-image", "url('bg" + srcs[i++] + "')")
}
image.src = srcs[i++]