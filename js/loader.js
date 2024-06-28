Pace.on('done', function () {
    $('#loader').animate({"width": '0'}, 2500);
    $('.loading__text').fadeOut(1500)
    $('#content').fadeIn(2000)
})