function identify_dropdown(){
  $("#identification_family").parent().hide();
  $("#identification_common_name").parent().hide();
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
      $("#identification_common_name").append("<option></option>");
      data.forEach(function(obj){
        $("#identification_common_name").append('<option value="' + (obj["common_name"]) + '"> ' + (obj["common_name"]) + '</option>');
      });
    });
  });
};

function identify_next_page(){
  $("#next_identify_image").on("click", function(){
    $('#photo_frame').empty();
    $.get("/images/identify/", function(data){
      $('#photo_frame').append(data);
      identify_dropdown();
      identify_next_page();
    });
  });
}