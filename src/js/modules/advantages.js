$(".advantage__header").click(function() {
    $(this).parents(".advantage").toggleClass("advantage_open")
})

$(".advantages").each(function (i, advantagesContainer) { 

    var block =  $(advantagesContainer);
    
    // if (!($(advantagesContainer).find(".advantages__tariff").length > 3)) {
    //     return
    // }

    var siteHeader = $('.header');
    var blockHeader =  block.find(".advantages__header");
    var blockBody =  block.find(".advantages__body"); 

    block.css("overflow-x", "auto")
    blockHeader.css("position", "static")

    var siteHeaderHeight = siteHeader.outerHeight();
    var blockOffsetTop = block.offset().top;
    var blockHeight = block.outerHeight();
    var blockHeaderHeight = blockHeader.outerHeight();
    var blockHeaderWidth = blockHeader.outerWidth();
    var blockBodyWidth = blockBody.outerWidth();

    var clonedHeader = blockHeader.clone()
      .css({
        'position': 'absolute',
        'top': siteHeaderHeight + 'px',
        'width': blockBodyWidth + 'px',
        'left': '0px',
        'display': 'none',
        'z-index': 900,
        'transition': 'unset',
        'border-bottom': '1px solid #E4E4E4'
      })
      .appendTo(advantagesContainer);

    $(window).on('scroll', function () { 
        
        siteHeaderHeight = siteHeader.outerHeight();
        blockOffsetTop = block.offset().top;
        blockHeight = block.outerHeight();
        blockHeaderHeight = blockHeader.outerHeight();
        blockHeaderWidth = blockHeader.outerWidth();
        blockBodyWidth = blockBody.outerWidth();

        var scrollTop = $(window).scrollTop();
        var blockBottom = blockOffsetTop + blockHeight;
        var viewportBottom = scrollTop + $(window).height();
        
        // Позиции для срабатывания фиксации
        var startFixedPosition = blockOffsetTop - siteHeaderHeight + blockHeaderHeight / 2;
        var endFixedPosition = blockBottom - siteHeaderHeight - blockHeaderHeight;
        
        if (scrollTop > startFixedPosition && scrollTop < endFixedPosition) {
            // Показываем клонированный фиксированный хедер
            clonedHeader.css({
            'display': 'flex',
            'width': blockBodyWidth + 'px',
            'top': scrollTop - blockOffsetTop + siteHeaderHeight + 'px',
            });
            
            // Скрываем оригинальный хедер
            blockHeader.css('visibility', 'hidden');
        } else {
            // Скрываем клонированный хедер
            clonedHeader.css('display', 'none');
            
            // Показываем оригинальный хедер
            blockHeader.css('visibility', 'visible');
        }
        
    })

})