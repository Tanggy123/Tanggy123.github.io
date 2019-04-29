$(document).ready(function() {
    const distanceToNextImage = -450;
    var currentImageNumber = 0;
    
    $("#lightbox").hide()

    $("#right").click(function() {
        if (currentImageNumber < 7) {
            currentImageNumber++;
        }
        $("#carousel-strip").css("left", (distanceToNextImage*currentImageNumber).toString() + "px")
    })

    $("#left").click(function() {
        if (currentImageNumber > 0) {
            currentImageNumber--;
        }
        $("#carousel-strip").css("left", (distanceToNextImage*currentImageNumber).toString() + "px")
    })

    $("#close, #overlay").click(function() {
        $("#lightbox").hide()
    })

    $(".image").click(function() {
        currentImageNumber = parseInt(this.id)
        $("#carousel-strip").css("left", (distanceToNextImage*currentImageNumber).toString() + "px")
        $("#lightbox").show()
    })
})