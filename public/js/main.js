$(document).ready(function () {
    $('.move-page2').click(function (e) {
        if ($('.move-page2').hasClass('pageonenotvisible')) {
            var fheight = $('.footer.f1').outerHeight(true) - $('.footer.f1').innerHeight(); // first footer margin top
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
            var fheight = $('.page-2 .footer-2.f2').height() + ($(window).width() < 768 ? 0 : $('.page-2 .footer-2.f1').height());

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
                var fheight = $('.page-2 .footer-2.f2').height() + ($(window).width() < 768 ? 0 : $('.page-2 .footer-2.f1').height());

                $('.body').animate({
                    scrollTop: ($('.page-1').height() + $('.page-2').height()) - fheight
                }, 800, function () {
                    if ($(window).width() > 767) {
                        $('.footer-2.f1').show();
                    }

                    $('.footer').hide();
                    $('.body-2').hide();
                    $('.body').scrollTop(0);

                    $('.move-page3').addClass('pageonenotvisible');
                });
            });
        }
    });

    $('.move-page4').click(function (e) {
        if ($('.move-page4').hasClass('pageonenotvisible')) {
            var fheight = 0;
            $('.footer-3').each(function () { var $this = $(this); fheight += $this.height(); });

            $('.page-2').show();
            $('.body-3').show();
            $('.move-page4').removeClass('pageonenotvisible');
            $('.body').scrollTop(($('.page-2').height() + $('.page-3').height()) - fheight);
            $('.body').animate({
                scrollTop: 0
            }, 800, function () {
                $('.page-4').hide();
            });

        } else {
            $('.page-4').show();
            setTimeout(function () {
                var fheight = 0;
                $('.footer-3').each(function () { var $this = $(this); fheight += $this.height(); });

                $('.body').animate({
                    scrollTop: ($('.page-2').height() + $('.page-3').height()) - fheight
                }, 800, function () {
                    $('.page-2').hide();
                    $('.body-3').hide();
                    $('.body').scrollTop(0);

                    $('.move-page4').addClass('pageonenotvisible');
                });
            });
        }
    });

    $('.bundle-choice').click(function (e) {
        $('.bundle-choice').each(function (item) { $(this).removeClass('selected') });
        $('.bundle-choice .text').text("Choose");

        $(this).addClass('selected');
        $('.bundle-choice.selected .text').text("Selected");
    });

    // var id;
    // $(window).resize(function () {
    //     clearTimeout(id);
    //     id = setTimeout(changeMetaView, 50);
    // });

    // changeMetaView();
    // console.log(window.location);
});

function submitForm() {
    if ($('.page-4 .form .row button.btn').text() === "Submit") {
        $('.loading').show();
        setTimeout(() => {
            $('.page-4 .form .row input.form-control').each(function (idx) {
                $(this).addClass("submitted");
                $(this).prop("disabled", true);
            });

            $('.page-4 .form .row button.btn').addClass("submitted");
            $('.page-4 .form .row button.btn').text("Congratulations");
            $('.page-3').hide();
            $('.thank-you').show();
            $('.logos').show();
            $('.loading').hide();

            var win = $(window);
            if (win.width() < 768) {
                $('.page-4').height(850);
            }
        }, 500);
    }
}


function changeMetaView() {
    var win = $(window);

    if (win.width() < 768) {
        // mobile
        $("#metaViewport").attr('content', 'width=device-width, initial-scale=1, maximum-scale=1');
        console.log("mobile");
    } else {
        // pc
        $("#metaViewport").attr('content', 'width=1920, initial-scale=1, maximum-scale=1');
        console.log("pc");
    }
}