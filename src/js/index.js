$(document).ready(function () {
    //Menu button on click event
    $('.mobile-nav-button').on('click', function () {
        // Toggles a class on the menu button to transform the burger menu into a cross
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass("mobile-nav-button__line--1");
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass("mobile-nav-button__line--2");
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass("mobile-nav-button__line--3");

        // Toggles a class that slides the menu into view on the screen
        $('.mobile-menu').toggleClass('mobile-menu--open');
        return false;
    });

    //selects
    const selectSingle = document.querySelector('.select');
    const selectSingle_title = selectSingle.querySelector('.select__title');
    const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

    // Toggle menu
    selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
        } else {
            selectSingle.setAttribute('data-state', 'active');
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.textContent = evt.target.textContent;
            selectSingle.setAttribute('data-state', '');
        });
    }
});