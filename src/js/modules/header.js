$(".header__burger").click(function () { 
    $(this).toggleClass("active")
    $("html, body").toggleClass("lock")

    $(".mobile-menu").toggleClass("active")
})

$("[data-to-level]").click(function() {
    let level = $(this).attr("data-to-level")
    let menu = $(this).parents("[data-level]")

    menu.hide()
    $("[data-level=" + level + "]").show()
    
})