// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

function j(){
var u=new Array("/home/beforeMenu1","/home/beforeMenu2","/home/beforeMenu3","/home/beforeMenu4","/home/beforeMenu5","/home/beforeMenu6");
location.href=(u[Math.floor(Math.random()*u.length)]);
}


$(document).ready(function(){
  $("div#line2").delay(1000).fadeIn("slow",function(){
    $("div#line3").delay(2000).fadeIn("slow",function(){
      $("div#line4").delay(1000).fadeIn("slow",function(){
        $("div#line5").delay(1500).fadeIn("slow",function(){
          $("div.disable").delay(500).removeClass("disable").addClass("enable").click(function(){
            $(this).find("form").submit();
          });
        });
      });
    });
  });
  
  
  $("#rollArea").animate({ 
    top: "-15px",
    }, 8000 );


  $("div.enable").on("click", function(){
    $(this).find("form").submit();
  });
});

//一定時間経過後に指定ページにジャンプする
/*mnt = 20; // 何秒後に移動するか？
url = "http://takeshun.net:5000/destination/choose"; // 移動するアドレス
function jumpPage() {
  location.href = url;
}
setTimeout("jumpPage()",mnt*1000)*/
