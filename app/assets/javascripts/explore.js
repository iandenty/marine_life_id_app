function append_explore_map(){
    var map = L.map('map').setView([54.001282, -3.333363], 4);
    var ggleLayer;
    ggleLayer = new L.Google('TERRAIN')
    map.addLayer(ggleLayer);
    map.invalidateSize();
  }

