$(document).ready(function () {
    //Menu button on click event
    $('.mobile-nav-button').on('click', function () {
        // Toggles a class on the menu button to transform the burger menu into a cross
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass("mobile-nav-button__line--1");
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass("mobile-nav-button__line--2");
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass("mobile-nav-button__line--3");

        // Toggles a class that slides the menu into view on the screen
        $('.mobile-menu').toggleClass('mobile-menu--open');
        $('.header').toggleClass('header-bg');
        return false;
    });

    //selects
    $('.select').each(function () {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации

        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });


        let clickId = 0;

        $('.next').on('click', function (event) {
            event.preventDefault();
            if (clickId < 3) {
                clickId ++;
                valueItem = ($(this).parent().prev().children('.new-select__list').children('.new-select__item:nth-child(' + clickId + ')'));
                ($(this).parent().prev().children('.new-select')).text($(valueItem).find('span').text());
                let chooseItem = $(this).data('value');
                $('select').val(chooseItem).attr('selected', 'selected');
            }
        });


        $('.prev').on('click', function (event) {
            event.preventDefault();
            if (clickId > 1) {
                clickId --;
                valueItem = ($(this).parent().prev().children('.new-select__list').children('.new-select__item:nth-child(' + clickId + ')'));
                ($(this).parent().prev().children('.new-select')).text($(valueItem).find('span').text());
                let chooseItem = $(this).data('value');
                $('select').val(chooseItem).attr('selected', 'selected');
            }
        });

    });
});