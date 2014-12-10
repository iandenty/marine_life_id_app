function identify_dropdown(){
  $("#identification_family").parent().hide();
  $("#identification_common_name").parent().hide();
  $("#identify_button").parent().hide();
  $("#identification_suborder").on("change", function(){
    selected_value = $(this).find(":selected").attr("value");
    $.ajax({
      type: "GET",
      url: "/animals/family/",
      dataType: "JSON",
      data: {"suborder": selected_value}
    }).success(function(data){
      $("#identification_family").empty();
      $("#identification_family").parent().show();
      $("#identification_common_name").empty();
      $("#identify_button").parent().hide();
      $("#identification_family").append("<option></option>");
      $("#identification_common_name").parent().hide();
      data.forEach(function(obj){
        $("#identification_family").append('<option value="' + (obj["family"]) + '"> ' + (obj["family"]) + '</option>');
      });
    });
  });
  $("#identification_family").on("change", function(){
    selected_value = $(this).find(":selected").attr("value");
    $.ajax({
      type: "GET",
      url: "/animals/common/",
      dataType: "JSON",
      data: {"family": selected_value}
    }).success(function(data){
      $("#identification_common_name").empty();
      $("#identification_common_name").parent().show();
      $("#identify_button").parent().hide();
      $("#identification_common_name").append("<option></option>");
      data.forEach(function(obj){
        $("#identification_common_name").append('<option value="' + (obj["common_name"]) + '"> ' + (obj["common_name"]) + '</option>');
      });
    });
  });
  $("#identification_common_name").on("change", function(){
    $("#identify_button").parent().show();
  });
  $("form#new_identification").submit(function(){
    var identifyInfo = $(this).serialize();
    $.ajax({
      type: "POST",
      url: $(this).attr('action'),
      data: identifyInfo,
      dataType: "JSON"
    }).success(function(json){
      $('#photo_frame').empty();
      $.get("/images/identify/", function(data){
        $('#photo_frame').empty();
        $('#photo_frame').append(data);
        var mapHeight = $('#update_image').height();
        var mapWidth = $('#update_image').width();
        map_toggle(mapHeight, mapWidth);
        guess_dropdown();
        guess_next_page();
        identify_dropdown();
        identify_next_page();
        $('#magnify_tab').on('click', function(){
          $('#update_image').loupe({
            width: 200,
            height: 150,
            loupe: 'loupe'
          });
        });
      });
    });
    return false;
  });
};

function identify_next_page(){
  $("#next_identify_image").on("click", function(){
    $('#photo_frame').empty();
    $.get("/images/identify/", function(data){
      $('#photo_frame').append(data);
      var mapHeight = $('#update_image').height();
      var mapWidth = $('#update_image').width();
      map_toggle(mapHeight, mapWidth);
      guess_dropdown();
      guess_next_page();
      identify_dropdown();
      identify_next_page();
      $('#magnify_tab').on('click', function(){
        $('#update_image').loupe({
          width: 200,
          height: 150,
          loupe: 'loupe'
        });
      });
    });
  });
}