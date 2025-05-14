$(".footer").css("z-index", "1")

let zIndex = 2;
$("main > *").get().reverse().forEach(function(el) {
    $(el).css('z-index', zIndex++);
});

$(".header").css("z-index", zIndex)