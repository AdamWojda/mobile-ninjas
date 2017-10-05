(function () {

        var navigation = navigation || {};

        navigation.sections = function (element) {

            var _self = this;

            this.speed        = 350;
            this.disableClass = 'jsDisableScroll';
            this.element      = element;

            _self.init();

        };

        navigation.sections.prototype.init = function () {

            var _self = this;
            //
            // _self.toggle();
            // _self.selectOption();
            // $('.cat-arrow').not('.jsDisableScroll').mCustomScrollbar();

        };

        navigation.sections.prototype.toggle = function () {

            var _self = this;
            //
            // $('.title-categry, .cat-container', this.element).on('mouseover', function (e) {
            //     e.preventDefault();
            //
            //     if ($(this).hasClass(_self.disableClass)) {
            //
            //         if ($(this).find('.cat-arrow').hasClass('active')) {
            //             $(this).find('.cat-arrow').removeClass('active');
            //         } else {
            //             $(this).find('.cat-arrow').addClass('active');
            //         }
            //         ;
            //
            //     } else {
            //
            //         if ($(this).find('.cat-arrow').hasClass('active')) {
            //             $(this).find('.cat-arrow').removeClass('active');
            //         } else {
            //             $(this).find('.cat-arrow').addClass('active');
            //         }
            //         ;
            //
            //     }
            //     ;
            // });
            //
            // $('.title-categry', this.element).click(function (e) {
            //
            //     if ($(this).next().hasClass('active')) {
            //         $(this).next().removeClass('active');
            //     } else {
            //         $(this).next().addClass('active');
            //     }
            //     ;
            //
            //     if ($(this).hasClass('active')) {
            //         $(this).removeClass('active');
            //     } else {
            //         $(this).addClass('active');
            //     }
            //     ;
            // });
            //
            // $('.FiltersAndProducts__Clear').click(function (e) {
            //     e.preventDefault();
            //     $('.checkbox-custom input[type="checkbox"]').attr('checked', false);
            //     $('.jsProductsGridIsotope').isotope({
            //         filter: '*'
            //     });
            //     $(this).removeClass('enabled');
            // });
            //
            // $('.filters input[type="checkbox"]').change(function () {
            //     $('.FiltersAndProducts__Clear').addClass('enabled');
            // });

        };

        navigation.sections.prototype.selectOption = function () {

            var _self = this;
            //
            // $('.list-select a', this.element).on('click', function (e) {
            //     e.preventDefault();
            //
            //     var value = $(this).text();
            //
            //     $(_self.element).children('a.select').text(value).trigger('click');
            // });

        };

        var accTabs = new navigation.sections('.section');



    // ---- Module - Scroll to anchor ---- //
    const scrollToAnchor = {
        listContainer: $('[data-scroll-to-anchor]'),

        init() {

            scrollToAnchor.listContainer.each((i, element) => {

                // Find links
                const link = $(element).find('a');

                // Loop through every link in set and do stuff :D
                link.each((index, singleLink) => {

                    const linkParent = $(singleLink).parent();

                    let type = 'scroll';

                    // Disable module if we have a class on element
                    if ($(singleLink).hasClass('js-anchor--disable')) {
                        type = 'disabled';
                    }

                    // // Disable module if we have a class on element
                    // if (linkParent.hasClass('navigation__element--active')) {
                    //     alert('active');
                    // }

                    scrollToAnchor.clickEvent(singleLink, type, linkParent);

                });

            });

        },

        clickEvent(element, type, parent) {

            // Click with element from init function
            $(element).on('click', function (e) {
                let target;
                let offset = 0;

                scrollToAnchor.setParentClass(parent, 'navigation__element--active', '.navigation__element');

                // Set offset if specified
                if ($(this).data('scroll-offset')) {
                    offset = $(this).data('scroll-offset');
                }

                // If has
                if ($(element).data('scroll-target')) {
                    target = $(element).data('scroll-target');
                }

                // If not
                if (!$(element).data('scroll-target')) {
                    target = $(element).attr('href');
                }

                if (type === 'scroll') {

                    // Prevent default link behaviour
                    e.preventDefault();
                    e.stopPropagation();

                    // Call action with that element
                    scrollToAnchor.animate(offset, target);

                }

            });

        },

        animate(offset, target) {

            $('html, body').animate({
                scrollTop: $(target).offset().top - offset,
            }, 500);

        },

        setParentClass(parentElement, activeClass, navigationElement) {
            if(!parentElement.hasClass(activeClass)) {
                $(navigationElement).removeClass(activeClass);
                parentElement.addClass(activeClass);
            }
        }

    };
    // ---- Module - END ---- //

    // ---- Module - Multiple Owl Carousels ---- //
    const carousels = {
        carouselsSelector: $('[data-slider]'),

        init() {

            // Lopp through carousels
            carousels.carouselsSelector.each(function () {

                // Get carousel name
                const carouselName = $(this).attr('data-slider');
                const owl = $(this);

                // Enable looped carousel with customized or default settings
                owl.owlCarousel(carousels.carouselOptions(carouselName));

            });

        },

        carouselOptions(carouselName) {

            // Set var
            let carouselSettings;

            // Switch for settongs
            switch (carouselName) {

                case 'apps':
                    carouselSettings = {
                        items: 1,
                        autoplay: true,
                        loop: true,
                        dots: true,
                        nav: true,
                        responsive: {

                            1024: {
                                items: 3,
                            },
                            600: {
                                items: 2,
                            },
                        },
                    };
                    break;


                case 'newsTicker':
                    carouselSettings = {
                        loop: true,
                        autoplay: true,
                        items: 1,
                        nav: true,
                        autoplayHoverPause: true,
                        animateOut: 'slideOutUp',
                        animateIn: 'slideInUp',
                        navText: ['<','>']
                    };
                    break;

                default:
                    carouselSettings = {
                        items: 1,
                    };

            }

            // Return settings for each carousel
            return carouselSettings;

        },
    };
    // ---- Module - END ---- //

    // ---- Modules - INIT ---- //
    carousels.init();
    scrollToAnchor.init();

    // ---- Module - Add class to header on scroll ---- //
    const headerScroll = () => {
       const scroll = $(window).scrollTop();

       if (scroll > 0 && !$("#header").hasClass("header--active")) {
           $("#header").addClass("header--active");
       } else if($("#header").hasClass("header--active") && scroll == 0) {
           $("#header").removeClass("header--active");
       }
    };
    headerScroll();
    $(window).scroll(headerScroll);

    // ---- Module - END ---- //

    let userScrolled = false;
    let counted = false;

    function isScrolledIntoView(el) {
        const elemTop = el.getBoundingClientRect().top + 78;
        const elemBottom = el.getBoundingClientRect().bottom + 78;

        const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    }

    function checkSectionOnScroll(element) {

        if (isScrolledIntoView(element) && counted === false) {

            const section = $(element);
            const sectionID = section.attr('id');
            const sectionClass = '.section';
            const sectionClassActive = 'section--active';

            $('.navigation__element').removeClass('navigation__element--active');
            $('.navigation__element a[href="#'+sectionID+'"]').parent().addClass('navigation__element--active');
            //scrollToAnchor.setParentClass(section, sectionClassActive, sectionClass);


        }

    }

    $(window).scroll(() => {
        userScrolled = true;
    });

    setInterval(() => {

        const sections = $('.section');

        if (userScrolled) {

            sections.each((i,e) => {
                checkSectionOnScroll(e);
            });
            userScrolled = false;
        }

    }, 50);

    const openCloseMenu = () => {
        const $mainHeader = $('#header');
        const $this = $(this);

        if(!$mainHeader.hasClass('header--open')) {
            $mainHeader.addClass('header--open');
            $this.addClass('is-active');
        } else {
            $mainHeader.removeClass('header--open');
            $mainHeader.removeClass('header--active');
            $mainHeader.removeClass('header--open');
            $this.removeClass('is-active');
        }

        if(!$mainHeader.hasClass('header--active') ){
            $mainHeader.addClass('header--active');
        }
    };

    $('#hamburger-menu').click(openCloseMenu);

    $('.jsGoToTop').click( (e) => {
        e.preventDefault();
        $('html, body').animate({
                scrollTop: 0
        }, 500);
    });

    svg4everybody();


    var contact_form = {
        rules: {
            cf_name: {
                required: true
            },
            cf_email: {
                required: true,
                email: true
            },
            cf_text: {
                required: true
            }
        },

        highlight: function(element, errorClass, validClass) {
            $(element).addClass('not-valid');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('not-valid');
        },

        errorPlacement: function(error, element) {},

        success: function(success, element) {},

        invalidHandler: function(form, validator) {},

        submitHandler: function(form) {

            var options = {
                type: "POST",
                url: 'contact.php',
                beforeSubmit: function() {
                    $('.form button[type="submit"]').attr('disabled', true);
                    $('.form .loader').show();
                },
                success: function(response) {
                    $('.form button[type="submit"]').attr('disabled', false);

                    $('.form .form__submit').hide();

                    $('.form .loader').hide();
                    if (response == 'success') {
                        $('.form .success').fadeIn(250);
                        $('.form input, .form textarea').val('');
                    } else {
                        alert('Wystąpił błąd podczas próby wysłania Twojej wiadomości. Spróbuj ponownie!');
                    }
                }
            }

            $(form).ajaxSubmit(options);

        },

        focusInvalid: false,
        onkeyup: false
    }

    $('#contact_form').validate(contact_form);

}());
