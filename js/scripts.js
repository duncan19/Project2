$(document).ready(function() {
  $(".questions").submit(function(event) {
    var area = $("#area").val();
    $(".area").text(area);
    $(".results").show();
    event.preventDefault();
  });
});
