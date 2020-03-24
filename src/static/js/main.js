<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
svg4everybody();

var menuDropInit = {
    openMenu: function(menu){

        var drops = $('[data-dropdown="body"]');

        drops.hide(0);

        menu.fadeIn(0);

    },
    init: function(){

        var initiators = $('[data-dropdown="open"]'),
            openMain = $('[data-dropdown="open-main"]'),
            bodyMain = $('[data-dropdown="body-main"]')
            overlay = $('.overlay'),
            _this = this;

        initiators.on('mouseenter', function(){

            var dropToOpen = $(this).children('[data-dropdown="body"]');

            _this.openMenu(dropToOpen);

            initiators.removeClass('active');

            $(this).addClass('active');

        })

        openMain.on('mouseenter', function(){

            var dropToOpen = $(this).children('[data-dropdown="body-main"]');

            _this.openMenu(dropToOpen);

            $(this)
            .css('z-index', parseInt(overlay.css('z-index')) + 1)
            .addClass('active');

            overlay.fadeIn(0);

        })

        
        overlay.on('mouseenter', function(){

            bodyMain.hide(0);
            $(this).hide(0);

            openMain.css('z-index', 1)
                    .removeClass('active');
            

        })
    }
}


menuDropInit.init();
=======
=======
>>>>>>> parent of d292c08... clean
=======
>>>>>>> parent of d292c08... clean
jQuery(document).ready(function($){

    //Menu init

    var hamb = $('#toggle-menu'),
        menuWrap = $('#menu-main'),
        navigation = $('#nav');

    hamb.on('click', function(){

        $(this).toggleClass('active');
        menuWrap.toggleClass('active');
        $('body').toggleClass('o-hidden');
        navigation.toggleClass('active');

    })

    //smooth scroll

    $('a[data-section]').on('click', function(e){

        e.preventDefault();

        var scrollToId = $(this).attr('data-section'),
            scrollToOffsetTop = $('#' + scrollToId ).offset().top;

        $('html, body').animate({
            scrollTop: scrollToOffsetTop
        }, 400, 'linear')

        if(menuWrap.hasClass('active')){

            menuWrap.removeClass('active');
            navigation.removeClass('active');
            $('body').removeClass('o-hidden');
            hamb.removeClass('active');

        }

    })

    //Vertical menu

    var verticalMenuInit = {
        breakpoints: [
            {
                section: $('#s-banner'),
                offsetTop: $('#s-banner').offset().top
            },
            {
                section: $('#s-about'),
                offsetTop: $('#s-about').offset().top
            },
            {
                section: $('#s-services'),
                offsetTop: $('#s-services').offset().top
            },
            {
                section: $('#s-footer'),
                offsetTop: $('#s-footer').offset().top
            }
        ],
        checKWindowHeight: function(){

            var windowOffset = window.pageYOffset,
                currentSection = {};

            for (let i = 0; i < this.breakpoints.length; i++) {
                
                if(windowOffset <= this.breakpoints[i].offsetTop ){
                    
                    currentSection = this.breakpoints[i];

                    break;
                }
            }

            var id = currentSection.section.attr('id');

            $('a[data-section].active').removeClass('active');

            $('a[data-section="' + id + '"]').addClass('active');
            

        }
    }

    $(document).on('scroll', function(){

        verticalMenuInit.checKWindowHeight();
        
    })

<<<<<<< HEAD
<<<<<<< HEAD
})
>>>>>>> parent of d292c08... clean
=======
})
>>>>>>> parent of d292c08... clean
=======
})
>>>>>>> parent of d292c08... clean
