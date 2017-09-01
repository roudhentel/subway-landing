$(document).ready(function () {
    $('.move-page2').click(function (e) {
        if ($('.move-page2').hasClass('pageonenotvisible')) {
            var fheight = 40; // first footer has a 40px margin
            $('.footer').each(function () { var $this = $(this); fheight += $this.height(); });

            $('.body-1').show();
            $('.move-page2').removeClass('pageonenotvisible');
            $('.body').scrollTop($('.page-1').height() - fheight);
            $('.body').animate({
                scrollTop: 0
            }, 800, function () {
                $('.page-2').hide();
            });

        } else {
            $('.page-2').show();
            setTimeout(function () {
                var fheight = $('.footer.f1').outerHeight(true) - $('.footer.f1').innerHeight(); // first footer margin top
                $('.footer').each(function () { var $this = $(this); fheight += $this.height(); });
                $('.body').animate({
                    scrollTop: $('.page-1').height() - fheight
                }, 800, function () {
                    $('.body').scrollTop(0);
                    $('.body-1').hide();
                    $('.move-page2').addClass('pageonenotvisible');
                });
            });
        }
    });

    $('.move-page3').click(function (e) {
        if ($('.move-page3').hasClass('pageonenotvisible')) {
            var fheight = $('.page-2 .footer-2.f2').height() + ($('.page-2 .footer-2.f2').height() / 2) ;

            $('.footer-2.f1').hide();
            $('.footer').show();
            $('.body-2').show();
            $('.move-page3').removeClass('pageonenotvisible');
            $('.body').scrollTop(($('.page-1').height() + $('.page-2').height()) - fheight);
            $('.body').animate({
                scrollTop: 0
            }, 800, function () {
                $('.page-3').hide();
            });

        } else {
            $('.page-3').show();
            setTimeout(function () {
                var fheight = $('.page-2 .footer-2.f2').height() + ($('.page-2 .footer-2.f2').height() / 2) ;
                
                $('.body').animate({
                    scrollTop: ($('.page-1').height() + $('.page-2').height()) - fheight
                }, 800, function () {
                    $('.footer-2.f1').show();
                    $('.footer').hide();
                    $('.body-2').hide();
                    $('.body').scrollTop(0);
                    
                    $('.move-page3').addClass('pageonenotvisible');
                });
            });
        }
    });
});