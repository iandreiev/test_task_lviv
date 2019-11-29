$('#btn').click(function(){
    $('.fas').removeClass('fa-plus');
    $('.fas').addClass('fa-minus');
    $('.card').removeClass('card--blue');
    $('.card').toggleClass('card--green');
    $('.card-content').toggleClass('view');
    $('.card-description').toggleClass('helper');
});
