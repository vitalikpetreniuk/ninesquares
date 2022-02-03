
$(window).scroll(function(){
    var sticky = $('header.header'),
        scroll = $(window).scrollTop();

    if (scroll >= 1) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
})
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});
jQuery(document).ready(function($){
    //toggle 3d navigation
    $('.mob-menu.num1').on('click', function(){
        toggle3dBlock(!$('.cd-header').hasClass('nav-is-visible'));
    });
    $('.close').on('click', function(){
        $('.cd-3d-nav-container').removeClass('nav-is-visible');
        $('.main').removeClass('nav-is-visible');
    });
    //select a new item from the 3d navigation
    $('.cd-3d-nav a').on('click', function(){
        var selected = $(this);
        selected.parent('li').addClass('cd-selected').siblings('li').removeClass('cd-selected');
        updateSelectedNav('close');
    });

    $(window).on('resize', function(){
        window.requestAnimationFrame(updateSelectedNav);
    });

    function toggle3dBlock(addOrRemove) {
        if(typeof(addOrRemove)==='undefined') addOrRemove = true;
        $('.cd-header').toggleClass('nav-is-visible', addOrRemove);
        $('main').toggleClass('nav-is-visible', addOrRemove);
        $('.cd-3d-nav-container').toggleClass('nav-is-visible', addOrRemove);
    }

    //this function update the .cd-marker position
    function updateSelectedNav(type) {
        var selectedItem = $('.cd-selected'),
            selectedItemPosition = selectedItem.index() + 1,
            leftPosition = selectedItem.offset().left,
            backgroundColor = selectedItem.data('color');

        $('.cd-marker').removeClassPrefix('color').addClass('color-'+ selectedItemPosition).css({
            'left': leftPosition,
        });
        if( type == 'close') {
            $('.cd-marker').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                toggle3dBlock(false);
            });
        }
    }
    $.fn.removeClassPrefix = function(prefix) {
        this.each(function(i, el) {
            var classes = el.className.split(" ").filter(function(c) {
                return c.lastIndexOf(prefix, 0) !== 0;
            });
            el.className = $.trim(classes.join(" "));
        });
        return this;
    };
});
$(".directions .blue-header").scramble(1000, 15, "punctuation", false);
$(".portfolio .blue-header.frst").scramble(1000, 15, "punctuation", false);
$(".portfolio .blue-header.scnd").scramble(1000, 15, "punctuation", false);

// var elements = $('ul.strip-ul li').length;
//
// for(var i=0;i < elements; i++){
//     $(".strip-ul").clone().prependTo( ".stripe-inn" );
// };
// var liEle = [];
// var liEle = $(".strip-ul li");

$('.mob-menu.num2').on('click', function(){
    $('.menu-mob').addClass('open');
    $('body').addClass('fixed');
});
$('.menu-mob a').on("click", function (){
    $('.menu-mob').removeClass('open');
    $('body').removeClass('fixed');
});
$('.modal-open.contact').on('click', function(){
    $('.modal.contact').addClass('open');
    $('body').addClass('fixed');
});
$('.modl-open.partners').on('click', function(){
    $('.modal.partners').addClass('open');
    $('body').addClass('fixed');
});
$('.modal .close').on('click', function(){
    $('.modal').removeClass('open');
    $('body').removeClass('fixed');
});
$('.menu-mob .close').on('click', function(){
    $('.menu-mob').removeClass('open');
    $('body').removeClass('fixed');
});

//this will execute on page load(to be more specific when document ready event occurs)

function windowSize(){
    if ($(window).width() <= '768'){
        $('.tabs__content').addClass('owl-carousel');
        $('.tabs__content').owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            loop: false
        });
        $('.team .container .row>div:not(.lets-talk):nth-child(+n3)').addClass("d-none");
        $('.all:not(open)').on("click", function (){
            $(this).addClass("open");
            $('.team .container .row>div:not(.lets-talk):nth-child(+n3)').removeClass("d-none");
        });
        $('.all:not(open)').on("click", function (){
            $(this).addClass("open");
            $('.team .container .row>div:not(.lets-talk):nth-child(+n3)').removeClass("d-none");
        });
    } else {
        $('.tabs__content').removeClass('owl-carousel');
        $('.tabs__content').owlCarousel('destroy');
    }
}
$(window).on('load resize',windowSize);
$("form.cont_frm").submit(function(e) {
    e.preventDefault(); //dont refresh the page
    $.ajax({
        url: '', //endpoint
        method: 'POST', //post request
        data: $("form.cont_frm").serialize(), //get data of form
        success: function(data) { //success function
            $(".modal").removeClass("open"); //hide form
            $(".thank-you").css('display', 'flex').delay(1000).fadeOut(2000);//show thank you message
            $("body").removeClass("fixed");
        },
        error: function(data) { //error function
            $(".modal").removeClass("open"); //hide form
            $(".thank-you").css('display', 'flex').delay(1000).fadeOut(2000);//show thank you message
            $("body").removeClass("fixed");
        }
    });

});
AOS.init();

