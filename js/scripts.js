$(document).ready(function() {
  $(".questions").submit(function(event) {
    var area =  parseInt($("#area").val());
    var color =  parseInt($("#color").val());
    var pet =  parseInt($("#pet").val());
    var eye = parseInt($("#eye").val());
    var day =  parseInt($("#day").val())
if (area + color + pet + eye + day === 10) {

        $(".results").show();
}
// if (area + color + pet + eye + day > 11{
//   $(".results2").show();
// }
// if (area + color + pet + eye + day < 9){
//   $(".results3").show();
// }

    event.preventDefault();
  });
});
