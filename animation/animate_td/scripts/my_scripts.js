$(document).ready(function(){
  var color = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  function random(min,max)
{
    return Math.floor(min + Math.random() * (max - min));
}


  var tem1 = "<tr>"
  var tem3 = "</tr>";
  for(var i = 1; i<=8; i++){
  var tem2 = "";
  var tem = "";
  for(var j = 1; j <= 8; j++){
    var a = random(0,16);
    var b = random(0,16);
    var c = random(0,16);
    var d = random(0,16);
    var e = random(0,16);
    var f = random(0,16);
    var co = "#"+color[a]+color[b]+color[c]+color[d]+color[e]+color[f];
    tem2 += "<td class='col"+i+j+"' style='background-color:"+co+"'></td>" ;
  }
  var tem = tem1+tem2+tem3;
  $("table").append(tem);
}
  var arr = $("td");
  var arrk = 0;
  $(function() {
    mytime = setInterval(function(){showme()}, 300);
    function showme(){
      $(arr[arrk]).css("background-color","#FFFFFF");
      arrk += 1;
      if(arrk >= arr.length) clearInterval(mytime);
    }
  });
});
