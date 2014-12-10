function map_toggle(mapHeight, mapWidth){
  if($('#map').length) {
    $('#map').css({'height':mapHeight+'px'});
    $('#map').css({'width':mapWidth+'px'});
    var map = L.map('map').setView([54.001282, -3.333363], 4);
    var ggleLayer;
    ggleLayer = new L.Google('TERRAIN')
    map.addLayer(ggleLayer);
    $('#image_tab').toggle();
    $('#map').toggle();
    $('#map_tab').on('click', function(){
      $('#map_tab').toggle();
      $('#image_tab').toggle();
      $('#update_image').toggle();
      $('#map').toggle();
    });
    $('#image_tab').on('click', function(){
      $('#map_tab').toggle();
      $('#image_tab').toggle();
      $('#update_image').toggle();
      $('#map').toggle();
    });
    if($("#image_lat").length && $("#image_long").length){
      marker_on_click(map);
    } else if($("#image_lat_display").length && $("#image_long_display").length) {
      assign_marker(map);
    };
  };
};

function assign_marker(map){
  var lat = parseFloat($("#image_lat_display").val());
  var lng = parseFloat($("#image_long_display").val());
  var marker = L.marker([lat, lng]).addTo(map);
};

function marker_on_click(map){
  map.on('click', function(e) { 
    if($('.leaflet-marker-icon').length){
      $('.leaflet-marker-icon, .leaflet-marker-shadow, .leaflet-zoom-animated').remove()
      var lat = e.latlng.lat;
      var lng = e.latlng.lng;
      var marker = L.marker([lat, lng]).addTo(map);
      $("#image_lat").val(lat)
      $("#image_long").val(lng)
    } else {
      var lat = e.latlng.lat;
      var lng = e.latlng.lng;
      var marker = L.marker([lat, lng]).addTo(map);
      $("#image_lat").val(lat)
      $("#image_long").val(lng)
    }
  });
}