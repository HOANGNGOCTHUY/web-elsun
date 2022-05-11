const up = document.querySelector('.up');
const down = document.querySelector('.down');


function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
  }
  
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
  }

  $(document).ready(function(){
    var quantity = 0;

    $(".plus").click(function(e){
      e.preventDefault();
      var quantity = parseInt($('.quantity').val());
      $('.quantity').val(quantity + 1);
    });

    $('.min').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt($('.quantity').val());
      
      // If is not undefined
    
          // Increment
          if(quantity>0){
          $('.quantity').val(quantity - 1);
          }
  });
  })