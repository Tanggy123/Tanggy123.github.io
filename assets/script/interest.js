$(document).ready(function() {
    const distanceToNext = -450;
    var current = 0;
    
    $("#lightbox").hide()

    $("#right").click(function() {
        if (current < 2) {
            current++;
        }
        $("#carousel-strip").css("left", (distanceToNext*current).toString() + "px")
    })

    $("#left").click(function() {
        if (current > 0) {
            current--;
        }
        $("#carousel-strip").css("left", (distanceToNext*current).toString() + "px")
    })

    $("#close, #overlay").click(function() {
        $("#lightbox").hide()
    })

    $(".image").click(function() {
        current = parseInt(this.id)
        $("#carousel-strip").css("left", (distanceToNext*current).toString() + "px")
        $("#lightbox").show()
    })
})