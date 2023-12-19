// Check Dokument is ready
document.addEventListener("DOMContentLoaded", function () {
    // remove skeleton
    $(".loading").each(function (i, item) {
        item.classList.remove("loading");
    })

    // Move active state event scroll at section position
    $(window).on("scroll", function (e) {
        $("section").each(function (i, item) {
            let height = parseInt($(item).css("height"));

            $(item).filter(function (i, el) {
                if (el.getBoundingClientRect().bottom <= height + 500) {
                    let target = $(item).attr("id");
                    $('#nav-section .nav-section a').each(function (i, navI) {
                        let targetNav = $(this).attr('target')
                        let targetNew = targetNav.slice(0, 0) + targetNav.slice(1)
                        if (target == targetNew) {
                            $(".active").each(function (i, item) {
                                item.classList.remove("active");
                            })
                            $(navI).addClass('active')
                        }
                    })
                }
            })
        });




    }).scroll();

    // Show hide nav event scroll at top point
    $(window).on("scroll", (e) => {
        if (window.scrollY < 750) {
            $("nav").css("top", "-200px")
            $("nav").css("opacity", "0")
        } else {
            $("nav").css("opacity", "1")
            $("nav").css("top", "-1px")
        }
    })

    // Move active state event click nav
    $('#nav-section .nav-section a').each(function (i, nav) {
        $(nav).click(() => {
            let target = $(this).attr('target')
            let to = $(target)
            $(".active").each(function (i, item) {
                item.classList.remove("active");
            })
            $(nav).addClass('active')
            if (to.length > 0) {
                window.scrollTo({
                    top: to.offset().top - 80,
                    left: 0,
                    behavior: 'smooth'
                })
            }
        })
    })
    // Move active state event click banner section
    $('header ul li a').each(function (i, nav) {
        $(nav).click(() => {
            let target = $(this).attr('target')
            let to = $(target)
            $('#nav-section .nav-section a').each(function (i, navI) {
                let targetNav = $(this).attr('target')
                if (target == targetNav) {
                    $(".active").each(function (i, item) {
                        item.classList.remove("active");
                    })
                    $(navI).addClass('active')
                }
            })

            if (to.length > 0) {
                window.scrollTo({
                    top: to.offset().top - 80,
                    left: 0,
                    behavior: 'smooth'
                })
            }
        })
    })
    // Scrolldown on click
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

    // Scrolldown Animation on Hover
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