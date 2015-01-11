$(function(){
  // Set any maps to correct image size
  $('#update_image').on("load", set_map_size);

  //Functionality to be added
  $("#explore").on("click", function(){
    get_explore("explore");
    $('#explore').addClass("btn-selected");
    $('#add_photos, #practice, #identify').removeClass("btn-selected");
  });

  // Add new image
  $('#add_photos').on("click", function(){
    get_new_image("new");
    $('#add_photos').addClass("btn-selected");
    $('#practice, #identify, #explore').removeClass("btn-selected");
  });

  // Add practice image
  $("#practice").on("click", function(){
    get_new_image("practice");
    $('#practice').addClass("btn-selected");
    $('#add_photos, #identify, #explore').removeClass("btn-selected");
  });

  //Add identify image
  $("#identify").on("click", function(){
    get_new_image("identify");
    $('#identify').addClass("btn-selected");
    $('#add_photos, #practice, #explore').removeClass("btn-selected");
  });
});

function get_explore(route){
  $('#photo_frame').empty();
  $.get("/images/"+route+"/", function(data){
    $('#photo_frame').append(data);
    $('#explore_map').on("load", function(){
    });
    $('#photo_frame').css({'width': 80 + '%'})
    $('#photo_frame').css({'height': 500 + 'px'})
    var mapHeight = $('#photo_frame').height();
    var mapWidth = $('#photo_frame').width();
    $('#map').css({'height':mapHeight+'px'});
    $('#map').css({'width':mapWidth+'px'});
    var map = L.map('map').setView([54.001282, -3.333363], 4);
    var ggleLayer;
    ggleLayer = new L.Google('TERRAIN')
    map.addLayer(ggleLayer);
  });
};

function guess_next_page(){
  $("#next_practice_image").on("click", function(){
    $('#photo_frame').empty();
    get_new_image("practice"); 
  });
};

function identify_next_page(){
  $("#next_identify_image").on("click", function(){
    $('#photo_frame').empty();
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























