$(document).ready(function() {
  $(".questions").submit(function(event) {
    var area =  parseInt($("#area").val());
    var color =  parseInt($("#color").val());
    var pet =  parseInt($("#pet").val());
    var eye = parseInt($("#eye").val());
if (area + color + pet + eye === 9) {
      // $(".area").text(area);
        $(".results").show();
}

    event.preventDefault();
  });
});
