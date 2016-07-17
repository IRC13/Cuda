window.onload = (function () {
    
    // isotope 
    //Activate isotope in container
    var $container = $(".portfolio_items").isotope({
        itemSelector: '.single_item',
        layoutMode: 'fitRows',
    });

    //Add isotope click function
    $('.portfolio_filter li').click(function () {
        $(".portfolio_filter li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        $(".portfolio_items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

    
    //Lazy load
    $('#btn-2').on('click', function(){
        var items = $('.single_item');
        if(items.length < 8){
            $.getJSON( "projects.json", function( resp ) {
                var data = resp.data;
                var html = '';

                $.each(data, function(i, item){
                    html += itemSkeleton(item)
                });

                var $newItems = $(html);
                $('.portfolio_items').isotope( 'insert', $newItems );
                if(items.length = 8){
                    $('#btn-2').text('Hide additional projects');
                }
            });
        } else {
            for (var i = 4, maxL = items.length; i < maxL; i++) {
                $(items[i]).remove();
            };
            $('.portfolio_items').isotope('layout');
            $('#btn-2').text('Load more projects');
            $('html, body').animate({
                scrollTop: $(".portfolio_items").offset().top-180
            }, 500);
        }  
    });

    function itemSkeleton(item){
        return '<div class="single_item col '+item.category+'" data-filter=".'+item.category+'">'+
                    '<img src="'+item.img+'" alt="'+item.desc+'">'+'<h3>'+item.title+'</h3></div>';
    }

    //Match height//
    $('#main-content-2 .container .col p').matchHeight();
    $('#main-content-3 .container .col h3').matchHeight();
    $('#main-content-3 .container .col a').matchHeight();
    $('#main-content-3 .container .col p').matchHeight();
    $('#main-content-5 .container .portfolio_items .col.single_item h3').matchHeight();
    $('.holder q').matchHeight();

    //Show Mobile-menu
    $('<a href="#" class="open-menu"><span></span><span></span><span></span>Open Menu</a>').appendTo('#header');
    $('<span class="fader"/>').appendTo('#header');
    $('.open-menu').click(function () {
        $('body').toggleClass('menu-opened');
        return false;
    });

    $('.fader').click(function () {
        $('body').removeClass('menu-opened');
    });

    //Smooth scroll
    $('#main-menu ul li a').click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-50;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 3000);
        return false;
    });

    //Hide placeholders on focus//
    $('#input-name').focus(function () {
        $('.place_holder-1').hide();
    });
    $('#input-name').blur(function () {
        if ($(this).val().trim() === '') {
            $('.place_holder-1').show();
        }
    });
    
    $('#input-email').focus(function () {
        $('.place_holder-2').hide();
    });
    $('#input-email').blur(function () {
        if ($(this).val().trim() === '') {
            $('.place_holder-2').show();
        }
    });

    $('#text-area').focus(function () {
        $('.place_holder-3').hide();
    });
    $('#text-area').blur(function () {
        if ($(this).val().trim() === '') {
            $('.place_holder-3').show();
        }
    });
});
