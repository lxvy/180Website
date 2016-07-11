$(document).ready(function(){
  $("td").click(function(){
    var color1 = $(this).css("background-color");
    $("td").each(function(){
      $("td").css("background-color",color1);
    });
  });
});
