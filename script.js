$(document).ready(function(){
    var myHtml = "";
    var myCSS = "";
    var x = 25;
    var y = 25; 
    myHtml+="<table>";
    for (var counter = 0; counter < x; counter++) {
        myHtml+="<tr>";
      for(var col=0; col<y; col++){
        myHtml+= "<td class='cow'></td>";
      }
      myHtml+="</tr>";
    }
    myHtml+="</table>"
    myHtml= "<div id='box'>"+myHtml + "</div>";
    myCSS += "<style> #box {margin: auto; width: 50%} .cow {height:" + 500/x + "px; width:" + 500/y + "px ; background-color: green; opacity: 0.3;} table, tr, td {margin: 0; border: 1px solid black; padding: 0; border-collapse:collapse;}</style>"
    $('body').append(myHtml);
    $('head').append(myCSS);
    $('.cow').mouseenter(function(){
    $(this).fadeTo('fast',1);
    });
    $('.cow').mouseleave(function(){
    $(this).fadeTo('fast',.3);
    });
    
    $('#green_button').click(function(){
    $("#box").remove()
    
    var myHtml = "";
    var myCSS = "";
    var x = prompt("enter a number between 1 and 50");
    while (x>50){
        x=prompt("pick a lower number!");
    }
    var y = prompt("enter a number between 1 and 50"); 
    while (y>50){
        y=prompt("pick a lower number!");
    }
    myHtml+="<table>";
    for (var counter = 0; counter < x; counter++) {
        myHtml+="<tr>";
      for(var col=0; col<y; col++){
        myHtml+= "<td class='cow'></td>";
      }
      myHtml+="</tr>";
    }
    myHtml+="</table>"
    myHtml= "<div id='box'>"+myHtml + "</div>";
    myCSS += "<style> .cow {height:" + 500/x + "px; width:" + 500/y + "px ; background-color: green; opacity: 0.3;} table, tr, td {margin: 0; border: 1px solid black; padding: 0; border-collapse:collapse;}</style>"
   
    $('body').append(myHtml);
    $('head').append(myCSS);
    $('.cow').mouseenter(function(){
    $(this).fadeTo('fast',1);
    });
    $('.cow').mouseleave(function(){
    $(this).fadeTo('fast',.3);
    });
});

$('#blue_button').click(function(){
    $("#box").remove()
    
    var myHtml = "";
    var myCSS = "";
    var x = prompt("enter a number between 1 and 50");
    while (x>50){
        x=prompt("pick a lower number!");
    };
    var y = prompt("enter a number between 1 and 50"); 
    while (y>50){
        y=prompt("pick a lower number!");
    };
    myHtml+="<table>";
    for (var counter = 0; counter < x; counter++) {
        myHtml+="<tr>";
      for(var col=0; col<y; col++){
        myHtml+= "<td class='cow'></td>";
      }
      myHtml+="</tr>";
    }
    myHtml+="</table>"
    myHtml= "<div id='box'>"+myHtml + "</div>";
    myCSS += "<style> .cow {height:" + 500/x + "px; width:" + 500/y + "px ; background-color: blue; opacity: 0.3;} table, tr, td {margin: 0; border: 1px solid black; padding: 0; border-collapse:collapse;}</style>"
   
    $('body').append(myHtml);
    $('head').append(myCSS);
    $('.cow').mouseenter(function(){
    $(this).fadeTo('fast',1);
    });
    $('.cow').mouseleave(function(){
    $(this).fadeTo('fast',.3);
    });
});

$('#yellow_button').click(function(){
    $("#box").remove()
    
    var myHtml = "";
    var myCSS = "";
    var x = prompt("enter a number between 1 and 50");
    while (x>50){
        x=prompt("pick a lower number!");
    };
    var y = prompt("enter a number between 1 and 50"); 
    while (y>50){
        y=prompt("pick a lower number!");
    };
    myHtml+="<table>";
    for (var counter = 0; counter < x; counter++) {
        myHtml+="<tr>";
      for(var col=0; col<y; col++){
        myHtml+= "<td class='cow'></td>";
      }
      myHtml+="</tr>";
    }
    myHtml+="</table>"
    myHtml= "<div id='box'>"+myHtml + "</div>";
    myCSS += "<style> .cow {height:" + 500/x + "px; width:" + 500/y + "px ; background-color: yellow; opacity: 0.3;} table, tr, td {margin: 0; border: 1px solid black; padding: 0; border-collapse:collapse;}</style>"
   
    $('body').append(myHtml);
    $('head').append(myCSS);
    $('.cow').mouseenter(function(){
    $(this).fadeTo('fast',1);
    });
    $('.cow').mouseleave(function(){
    $(this).fadeTo('fast',.3);
    });
});

}); 