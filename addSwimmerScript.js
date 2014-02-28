$(document).ready(function() {
$("#sub").click(function() {
$.post(
$("#myForm").attr("action"),
$("#myForm :input").serializeArray(),
function(info) {
$("#result").html(info)
}
);

clearInput();
});

$("#myForm").submit(function() {
return false;
});
});



