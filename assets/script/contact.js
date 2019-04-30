$(document).ready(function() {
    $(".contact-content").click(function() {
        var target = this.id
        $(".loading." + target).css("animation", "loading-show 1.2s linear 1")
    })
})