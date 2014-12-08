function guess_dropdown(){
  $("#guess_family").parent().hide();
  $("#guess_common_name").parent().hide();
  $("#guess_button").parent().hide();
  $("#guess_suborder").on("change", function(){
    console.log("helllo")
    selected_value = $(this).find(":selected").attr("value");
    $.ajax({
      type: "GET",
      url: "/animals/family/",
      dataType: "JSON",
      data: {"suborder": selected_value}
    }).success(function(data){
      $("#guess_family").empty();
      $("#guess_family").parent().show();
      $("#guess_common_name").empty();
      $("#guess_button").parent().hide();
      $("#guess_family").append("<option></option>");
      $("#guess_common_name").parent().hide();
      data.forEach(function(obj){
        $("#guess_family").append('<option value="' + (obj["family"]) + '"> ' + (obj["family"]) + '</option>');
      });
    });
  });
  $("#guess_family").on("change", function(){
    selected_value = $(this).find(":selected").attr("value");
    $.ajax({
      type: "GET",
      url: "/animals/common/",
      dataType: "JSON",
      data: {"family": selected_value}
    }).success(function(data){
      $("#guess_common_name").empty();
      $("#guess_common_name").parent().show();
      $("#guess_button").parent().hide();
      $("#guess_common_name").append("<option></option>");
      data.forEach(function(obj){
        $("#guess_common_name").append('<option value="' + (obj["common_name"]) + '"> ' + (obj["common_name"]) + '</option>');
      });
    });
  });
  $("#guess_common_name").on("change", function(){
    $("#guess_button").parent().show();
  });
  $("form#new_guess").submit(function(){
    var guessInfo = $(this).serialize(0);
    $.ajax({
      type: "POST",
      url: $(this).attr('action'),
      data: guessInfo,
      dataType: "JSON"
    }).success(function(json){
      $('#photo_frame').empty();
      $.get("/images/practice/", function(data){
        $('#photo_frame').append(data);
        guess_dropdown();
        guess_next_page();
      });
    });
    return false;
  });
}

function guess_next_page(){
  $("#next_practice_image").on("click", function(){
    $('#photo_frame').empty();
    $.get("/images/practice/", function(data){
      $('#photo_frame').append(data);
      guess_dropdown();
      guess_next_page();
    });
  });
}
