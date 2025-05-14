function findElementsInLastRow() {
    $(".js-last-row-grid-style").each(function(i, grid) {
        let style = window.getComputedStyle(grid);
        let columnCount = Number(style.gridTemplateColumns.split(' ').length);
    
        let childsCount = $(grid).children().length
        let lastChildsCount = childsCount % columnCount

        $(grid).children().removeClass("in-last-row")
        $(grid).children(":nth-last-child(-n + " + lastChildsCount + ")").addClass("in-last-row")
    })
}

$(window).resize(findElementsInLastRow)

findElementsInLastRow()