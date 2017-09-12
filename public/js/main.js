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
                var win = $(window);
                if (win.width() > 767) {
                    $('.page-2 .row.bundles .bundle').height($('.tes-img:visible').height() + 20);
                }

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

                // reset get started page
                $('.bundle-selected-1').html('<br>');
                $('.bundle-selected-2').html('<br>');
                $('.bundle-selected-3').html('<br>');

                $('.bundle-choice').each(function (item) { $(this).removeClass('selected') });
                $('.bundle-choice .text').text("Choose");
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

                    if (window.innerWidth > 767) {
                        // set page 4 height
                        $('.page-4').height(window.innerHeight - $('.page-3').height());
                    }
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

        $('.bundle-selected-1').text('Fantastic Choice!');
        $('.bundle-selected-2').text('Your now on your way to getting your store future fresh');
        $('.bundle-selected-3').text('Just a few simple details to get your quote');
    });

    // var id;
    // $(window).resize(function () {
    //     clearTimeout(id);
    //     id = setTimeout(changeMetaView, 50);
    // });

    // changeMetaView();
    var params = getUrlVars();

    if (params.cur && params.cur.toLowerCase().trim() === 'nz') {
        $('#bundle-price-1').text('$10,420');
        $('#bundle-price-2').text('$12,140');
        $('#bundle-price-3').text('$13,603');
    } else {
        $('#bundle-price-1').text('$10,223');
        $('#bundle-price-2').text('$10,223');
        $('#bundle-price-3').text('$12,670');
    }
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
                $('.page-4').height(1080);
            } else if (win.width() < 1025) {
                $('.page-4').height(1024);
            } else {
                $('.page-4').height('auto');
                $('.page-4').height($('.page-4').height() + 100);
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

function getUrlVars() {
    var vars = {}, hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars[hash[0]] = hash[1];
    }
    return vars;
}