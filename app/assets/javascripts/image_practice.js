

//Retrieve random practice image
$(function(){
  // Add new images
  $('#add_photos').on("click", function(){
    $('#photo_frame').empty();
    $.get("/images/new/", function(data){
      $('#photo_frame').append(data);
    });
  });
  $("#practice").on("click", function(){
    $('#practice').addClass("clicked");
    $('#photo_frame').empty();
    $.get("/images/practice/", function(data){
      $('#photo_frame').append(data);
      guess_dropdown();
      guess_next_page();
    });
  });
  $("#identify").on("click", function(){
    $('#identify').addClass("clicked");
    $('#photo_frame').empty();
    $.get("/images/identify/", function(data){
      $('#photo_frame').append(data);
      identify_dropdown();
      identify_next_page();
    });
  });
});