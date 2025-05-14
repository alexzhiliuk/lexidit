$(".js-tab").click(function() {
    let id = $(this).attr("data-tab-id"),
        activeClass = $(this).attr("data-tab-active-class")
    let tabs = $(this).parents(".js-tabs")

    tabs.find(".js-tab").removeClass(activeClass)
    tabs.find(`.js-tab[data-tab-id=${id}]`).addClass(activeClass)
    tabs.find(`.js-tabs__body`).hide()
    tabs.find(`.js-tabs__body[data-tab-id=${id}]`).show()
})