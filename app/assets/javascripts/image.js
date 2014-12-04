
// Select form based on "practice" or "identify"
// Why doesn't this work!!
$(function(){
  $("#practice").on("click", function(){
    $('#type_id').val("practice");
  });
  $("#identify").on("click", function(){
    $('#type_id').val("identify");
  });
  $('form').bind('submit', function() {
  });
});