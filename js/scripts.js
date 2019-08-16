$(document).ready(function() {
  $(".questions").submit(function(event) {
    var area =  parseInt($("#area").val());
    var color =  parseInt($("#color").val());
if (area + color === 3) {
      // $(".area").text(area);
        $(".results").show();
}

    event.preventDefault();
  });
});
