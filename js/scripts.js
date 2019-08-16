$(document).ready(function() {
  $(".questions").submit(function(event) {
    var area =  parseInt($("#area").val());
    var color =  parseInt($("#color").val());
    var pet =  parseInt($("#pet").val());
if (area + color + pet=== 8) {
      // $(".area").text(area);
        $(".results").show();
}

    event.preventDefault();
  });
});
