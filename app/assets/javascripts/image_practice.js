$(function(){
  // Set any maps to correct image size
  $('#update_image').on("load", set_map_size);

  // Add new image
  $('#add_photos').on("click", function(){
    get_new_image("new");
  });

  // Add practice image
  $("#practice").on("click", function(){
    get_new_image("practice");
  });

  //Add identify image
  $("#identify").on("click", function(){
    get_new_image("identify");
  });
});