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

function guess_next_page(){
  $("#next_practice_image").on("click", function(){
    get_new_image("practice"); 
  });
};

function identify_next_page(){
  $("#next_identify_image").on("click", function(){
    get_new_image("identify"); 
  });
};

function set_map_size(){
  var mapHeight = $('#update_image').height();
  var mapWidth = $('#update_image').width();
  map_toggle(mapHeight, mapWidth);
  $('#magnify_tab').click(magnify_image);
};

function get_new_image(route){
  $('#photo_frame').empty();
  $.get("/images/"+route+"/", function(data){
    $('#photo_frame').append(data);
    $('#update_image').on("load", set_map_size);
    if(route==="practice"){
      guess_dropdown();
      guess_next_page();
    } else if(route==="identify"){
      identify_dropdown();
      identify_next_page();
    };
  });
};

function magnify_image(){
  $('#update_image').loupe({
    width: 200,
    height: 150,
    loupe: 'loupe'
  });
};























