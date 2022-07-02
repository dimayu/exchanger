var speed = 400;

// Question handler
$(".faq__item").on("click", function () {
    // Get next element
    $(this).next()
        // Toggle answer
        .slideToggle(speed)
        // Select all other answers
        .siblings(".faq__item__hidden")
        // Close other answers
        .slideUp();

    // Get image for active question
    var img = $(this).children(".faq__icon");
    // Remove the 'rotate' class for all images except the active 
    $("images").not(img).removeClass("rotate");

    // Toggle Rotate Class
    img.toggleClass("rotate");

});