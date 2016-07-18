$(document).ready(function(){
  var count = 60;
  $('.time').html(count);
  var b = true;
  $(".btn").click(function(){
    $(".page-first").hide();
    $(".page-middle").show();
    var coll = TableColor(2);
    jump();
    var succ = 0;
    var num = 2;
    var s = 2;

    var mytime = setInterval(function(){showme()}, 100);
    function showme(){
      $(coll).unbind('click');
      $(coll).click(function(){
        num += 1;
        if(num > 5){
          if(s > 0){
            s--;
            num = num-1;
          }else{
            s = num - 3;
          }
        }
        succ += 1;
        $("table").empty();
        coll = TableColor(num);
        $(".page-middle header em").empty();
        $(".page-middle header em").append(succ);
        $(".page-end h2").empty();
        $(".page-end h2").append(succ+"关");
      });
    }

  });

  var color = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  function random(min,max){
    return Math.floor(min + Math.random() * (max - min));
  }

  function TableColor(num){
    var tem1 = "<tr>"
    var tem3 = "</tr>";
    var a = random(100,255);
    var b = random(100,255);
    var c = random(100,255);
    var co = "rgba("+a+","+b+","+c+",1)";
    for(var i = 1; i <= num; i++){
      var tem2 = "";
      var tem = "";
      for(var j = 1; j <= num; j++){
        tem2 += "<td class='col"+i+j+"' style='border:5px solid rgba(255, 255, 255, 1);;background-color:"+co+"'></td>" ;
      }
      var tem = tem1+tem2+tem3;
      $("table").append(tem);
    }
    var ii = random(1,num+1);
    var jj = random(1,num+1);
    if(num < 7 ){
      var cooo = 0.3+0.08*num;
    }else{
      var cooo = 0.1*num;
    }
    coll = ".col"+ii+jj;
    $(coll).css("background-color","rgba("+a+","+b+","+c+","+cooo+")");
    return coll;
  }

  function jump() {
    window.setTimeout(function(){
        count--;
        if(count >= 0 && b == true) {
            $('.time').html(count);
            jump();
            $(".btn-pause").click(function(){
              b = false;
              $(".page-middle").hide();
              $(".content-continue").show();
            });
        }else if(count >= 0 && b == false){
          $(".btn-resume").click(function(){
            b = true;
            $(".page-middle").show();
            $(".content-continue").hide();
            jump();
          });
        }else if(count < 0){
          $(".page-middle").hide();
          $(".page-end").show();
          $(".btn-restart").click(function(){
            window.location.href="https://lxvy.github.io/180Website/game/game_color"
          });
        }
    }, 1000);
  }

});
