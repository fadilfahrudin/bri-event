// Check Dokument is ready
document.addEventListener("DOMContentLoaded", function () {
    // remove skeleton
    $(".loading").each(function (i, item) {
        item.classList.remove("loading");
    })
    // Navigation
    $(window).on("scroll", () => {
        // console.log(window.scrollY)
        if (window.scrollY < 750) {
            $("nav").css("opacity", "0")
        } else {
            $("nav").css("opacity", "1")

        }
    })


    $('header ul li a').each(function (i, nav) {
        $(nav).click(() => {
            let target = $(this).attr('target')
            let to = $(target)
            if (to.length > 0) {
                window.scrollTo({
                    top: to.offset().top,
                    left: 0,
                    behavior: 'smooth'
                })
            }
        })
    })
    $("#scroll-down").click(() => {
        let target = $("#scroll-down").attr('target')
        let to = $(target)
        if (to.length > 0) {
            window.scrollTo({
                top: to.offset().top - 50,
                left: 0,
                behavior: 'smooth'
            })
        }
    })

    // Scrolldown Animation Hover
    $(".scroll-btn a").on("mouseover", () => {

        $(".scroll-text").animate({
            width: "114px",
            left: "-10"
        }, {
            duration: 1000
        })
    })
    $(".scroll-btn a").on("mouseleave", () => {
        $(".scroll-text").css("--width", "114px")
        $(".scroll-text").animate({
            width: "0px",
            left: "5",
        },
            800, function () {
                $(".scroll-text").css("--width", "0px")
            }
        )
    })

})