
// Select form based on "practice" or "identify"
// Why doesn't this work!!
$(function(){
  $("#practice").on("click", function(){
    $('#type_id').val("practice");
  console.log($('#type_id').val());
  });
  $("#identify").on("click", function(){
    $('#type_id').val("identify");
    console.log($('#type_id').val());
  });
  $('form').bind('submit', function() {
  });
});