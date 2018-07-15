var output = function(myNumber) {
    var array = [];
    for (var index = 1; index <= myNumber; index++) {
      if ((index % 15) === 0) {
        array.push("Ping Pong");
      } else if ((index % 5) === 0) {
        array.push("Pong");
      }else if ((index % 3)=== 0) {
        array.push("Ping");
      }else
        array.push(index);
    }
    console.log(index);
    return array;
    };
    
    
    $(document).ready(function() {
    $("form#game").submit(function(event) {
      $("#display").empty();
    
    
      var myNumber = parseInt($("input#numeral").val());
      var array = output(myNumber);
      array.forEach(function(aftermath) {
        $("#display").append("<li>" + aftermath + "</li>");
        event.preventDefault();
      });
    
    });
    });