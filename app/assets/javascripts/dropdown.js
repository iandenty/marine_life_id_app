$(function(){
  $("#guess_suborder").on("change", function(){
    selected_value = $(this).find(":selected").attr("value")
    $.ajax({
      type: "GET",
      url: "/animals/family/",
      dataType: "JSON",
      data: {"suborder": selected_value}
    }).success(function(data){
      debugger
    });
  });
  $("#guess_family").on("change", function(){
    selected_value = $(this).find(":selected").attr("value")
    $.ajax({
      url: "/animals/",
      dataType: "JSON",
      data: {"family": selected_value}
    }).success(function(data){
    });
  });
});