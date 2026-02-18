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

        let change = false;
        const date = new Date();
        const m = date.getMonth();
        const d = date.getDate();
        let event_img = "assets/team-bg.png";
        if (m == 3 && d == 1) {
            event_img = "assets/april-fools-bg.gif";
            change = true;
        }

        if (change) {
            jQuery("#team-body").css(
                "background-image",
                "url(" + event_img + ")"
            )
        }

        index = (index + 1) % images.length;
        return images[index].substring(images.length - 3) == "gif" ? 20000 : 5000;
    }

    /* Initial image */
    time = changeBackground();
    setInterval(changeBackground, time);
});