$(document).ready(function(){
  $(".bu3").click(function(){
    alert(
      "如何才算赢：使拼板全部变成蓝色。玩法：每个方块一面橙色，一面蓝色。点击一个方块，这个方块的颜色会翻转，并且，与它邻接的方块的颜色也会翻转。"
    );
  });
  var num = 1;
  TableColor();
  $(".bu2").click(function(){
    num = 1;
    $("table").empty();
    TableColor();
  });
  $(".bu1").click(function(){
    $("table").empty();
    TableColor();
    $("td").css("background-color","rgb(255, 187, 102)");
  });
  function TableColor(){
    var tem1 = "<tr>"
    var tem3 = "</tr>";
    for(var i = 1; i <= num; i++){
      var tem2 = "";
      var tem = "";
      for(var j = 1; j <= num; j++){
        tem2 += "<td></td>" ;
      }
      var tem = tem1+tem2+tem3;
      $("table").append(tem);
    }
    $(".jibie").empty();
    $(".jibie").append("当前级别: "+num);
    $("td").click(function(){
      var col = $(this).parent().prevAll().length;
      var row = $(this).prevAll().length;
      var roww = row + 1;
      var coll = col + 1;
      var row3 = row -1;
      var col3 = col -1;
      var o1 = 'tr:eq('+coll+') td:eq('+row+')';
      var o2 = 'tr:eq('+col+') td:eq('+roww+')';
      var o3 = 'tr:eq('+col3+') td:eq('+row+')';
      var o4 = 'tr:eq('+col+') td:eq('+row3+')';
      var o5 = 'tr:eq('+col+') td:eq('+row+')';
      ChangeColor(o1);
      ChangeColor(o2);
      ChangeColor(o3);
      ChangeColor(o4);
      ChangeColor(o5);

      var tt = $("td");
      var n = 0;
      for(var i=0; i<tt.length;i++){
        if( $(tt[i]).css("background-color") === "rgb(85, 153, 255)" ){
          n ++;
        }
      }
      if(n === tt.length){
        num = num +1;
        alert("进入级别"+num);
        $("table").empty();
        TableColor();
      }else{
        num = num;
      }
    });
  }
  function ChangeColor(num){
    if( $(num).css("background-color") === "rgb(255, 187, 102)" ){
      $(num).css("background-color","rgb(85, 153, 255)")
    }else if( $(num).css("background-color") === "rgb(85, 153, 255)" ){
      $(num).css("background-color","rgb(255, 187, 102)")
    }
  }

});
