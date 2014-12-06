//Retrieve random practice image
$(function(){
  $("#practice").on("click", function(){
    $('#type_id').val("practice");
    $('#practice').addClass("clicked");
    $('#identify').addClass("unclicked");
    $.ajax({
      type: "GET",
      url: "/images/practice/",
      dataType: "JSON",
    }).success(function(data){
      $("#practice").after('<%= j render("nextImage") %>');
    });
  });
  $('#add_photos').on("click", function(){
    $.get("/images/new/", function(data){
      $('#add_photos').html(data);
    });
  });
});