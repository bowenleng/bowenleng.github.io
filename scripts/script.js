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
jQuery(document).ready(function () {
    const images = [
        "assets/bg1.gif",
        "assets/bg2.jpg",
        "assets/bg3.png"
    ];

    let index = 0;
    function changeBackground() {
        jQuery("#ind-head").css(
            "background-image",
            "url(" + images[index] + ")"
        );

        index = (index + 1) % images.length;
        if (images[index].substring(images.length - 3) == "gif") {
            time = 20000;
        }
    }

    /* Initial image */
    changeBackground();
    setInterval(changeBackground, num);
});