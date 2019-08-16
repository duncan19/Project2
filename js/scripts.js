$(document).ready(function() {
  $(".questions").submit(function(event) {
    var area =  parseInt($("#area").val());
if ("area" === 3) {
      // $(".area").text(area);
        $(".results").show();
}

    event.preventDefault();
  });
});
