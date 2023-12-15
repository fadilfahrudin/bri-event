// Check Dokument is ready
document.addEventListener("DOMContentLoaded", function () {
    // remove skeleton
    $(".loading").each(function (i, item) {
        item.classList.remove("loading");
    })
    // Navigation
    $('ul li a').each(function (i, nav) {
        $(nav).click(() => {
            let target = $(this).attr('target')
            let to = $(target)
            $(".active").each(function (i, item) {
                item.classList.remove("active");
            })
            $(nav).addClass('active')

            if (to.length > 0) {
                window.scrollTo({
                    top: to.offset().top - 65,
                    left: 0,
                    behavior: 'smooth'
                })
            }
        })
    })
})