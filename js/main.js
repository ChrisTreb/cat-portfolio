$(document).ready(function() {
    // Menu behaviour
    $("#nav-icon").click(function() {
        $(this).toggleClass("open");
        $("#menu").toggle("slow");
    });

    $(".menu-item").click(function() {
        $("#menu").toggle("slow");
        $("#nav-icon").removeClass("open");
    });

    // Smooth scroll on link click
    $(document).on("click", 'a[href^="#"]', function(event) {
        event.preventDefault();
        $("html, body").animate({
                scrollTop: $($.attr(this, "href")).offset().top,
            },
            500
        );
    });

    // Button scroll to top 
    $("#btn-top").click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
});