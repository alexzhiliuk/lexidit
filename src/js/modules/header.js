$(".header__burger").click(function () { 
    $(this).toggleClass("active")
    $("html, body").toggleClass("lock")

    $(".mobile-menu").toggleClass("active")
})

$("[data-to-level]").click(function() {
    let level = $(this).attr("data-to-level")
    let menu = $(this).parents("[data-level]")

    if (level != 0) {
        $(".mobile-menu__info").hide(function() {
            menu.hide(function() {
                $("[data-level=" + level + "]").show()
            })
        })
    } else {
        menu.hide(function() {
            $("[data-level=" + level + "]").show(function () { 
                $(".mobile-menu__info").show()
            })
        })
    }
    
})