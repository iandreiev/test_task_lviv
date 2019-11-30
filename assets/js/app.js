

$(document).ready(function(){
  
        $('.plus-minus-toggle').on('click', function() {
            $(this).toggleClass('collapsed');
            $('.card').removeClass('card--blue');
            $('.card').toggleClass('card--green');
            $('.card-content').toggleClass('view');
            $('.card-description').toggleClass('helper');
          });
        

});
