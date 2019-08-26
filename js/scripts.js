$(document).ready(function() {
  $(".questions").submit(function(event) {
    var area =  parseInt($("#area").val());
    var color =  parseInt($("#color").val());
    var pet =  parseInt($("#pet").val());
    var eye = parseInt($("#eye").val());
    var day =  parseInt($("#day").val())

    $(".thequestions").hide();
    if (area + color + pet + eye + day === 10) {
      $("#results").show();
    } else if (area + color + pet + eye + day > 10){
      $("#results2").show();
    } else {
      $("#results3").show();
    }
// if (area + color + pet + eye + day < 10)
    event.preventDefault();
  });
});
