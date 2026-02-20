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
    let change = false;
    const date = new Date();
    const m = date.getMonth();
    const d = date.getDate();
    const dayofweek = date.getDay();
    let event_img = "assets/team-bg.png";
    if (m == 1 && d == 14) {
        event_img = "assets/valentines-bg.png"; // todo, whenever the image gets implemented, change png to jpg if needed.
        // change = true;
    }
    if (m == 2 && (d == 17 || d == 18)) {
        event_img = "assets/patricks-day-bg.png"; // todo, whenever the image gets implemented, change png to jpg if needed.
        // change = true;
    }
    if (m == 3 && d == 1) {
        if (d == 1) {
            event_img = "assets/april-fools-bg.gif";
            change = true;
        } else if (d >= 2) { // todo, make this proper
            event_img = "assets/easter-bg.png"; // todo, whenever the image gets implemented, change png to jpg if needed.
            // change = true;
        }
    }
    if (m == 9 && d == 30) {
        event_img = "assets/halloween-bg.png"; // todo, whenever the image gets implemented, change png to jpg if needed.
        // change = true;
    }
    if (m == 11 && d >= 20) { // todo, make this proper
        event_img = "assets/christmas-bg.png"; // todo, whenever the image gets implemented, change png to jpg if needed.
        // change = true;
    }

    if (change) {
        jQuery("#team-body").css(
            "background-image",
            "url(" + event_img + ")"
        )
    }

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
        return images[index].substring(images.length - 3) == "gif" ? 20000 : 5000;
    }

    /* Initial image */
    time = changeBackground();
    setInterval(changeBackground, time);
});