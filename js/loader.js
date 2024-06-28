Pace.on('done', function () {
    setTimeout(() => {
        $('#loader').fadeOut('slow')
        $('.pagewrap').fadeIn('slow')
    }, 250)
})