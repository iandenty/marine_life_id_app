//Retrieve random practice image
$(function(){
  var mapHeight = $('#update_image').height();
  var mapWidth = $('#update_image').width();
  map_toggle(mapHeight, mapWidth);
  // Add new images
  $('#add_photos').on("click", function(){
    $('#photo_frame').empty();
    $.get("/images/new/", function(data){
      $('#photo_frame').append(data);
      var mapHeight = $('#update_image').height();
      var mapWidth = $('#update_image').width();
      map_toggle(mapHeight, mapWidth);
    });
  });
  $("#practice").on("click", function(){
    $('#practice').addClass("clicked");
    $('#photo_frame').empty();
    $.get("/images/practice/", function(data){
      $('#photo_frame').append(data);
      var mapHeight = $('#update_image').height();
      var mapWidth = $('#update_image').width();
      map_toggle(mapHeight, mapWidth);
      guess_dropdown();
      guess_next_page();
    });
  });
  $("#identify").on("click", function(){
    $('#identify').addClass("clicked");
    $('#photo_frame').empty();
    $.get("/images/identify/", function(data){
      $('#photo_frame').append(data);
      var mapHeight = $('#update_image').height();
      var mapWidth = $('#update_image').width();
      map_toggle(mapHeight, mapWidth);
      identify_dropdown();
      identify_next_page();
    });
  });
});