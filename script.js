$(document).ready(function(){
    var myHtml = "";
    var myCSS = "";
    var x = 5;
    var y = 5; 
    for (var counter = 0; counter < x; counter++) {
    for(var col=0; col<y; col++){
	myHtml+= '<div class="cow"></div>' +"\n"
    }
    myHtml+="<br>" +"\n";
    
}
    myHtml= "<div id='box'>"+myHtml + "</div>";
    myCSS += "<style> .cow {height: 50px; width: 50px; background-color: green; display: inline-block; opacity: 0.3;}</style>"
  
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
    var x = prompt("enter value for x");
    var y = prompt("enter value for y"); 
    var wide= 500/y
    var tall= 500/x
    for (var counter = 0; counter < x; counter++) {
    for(var col=0; col<y; col++){
	myHtml+= '<div class="cow"></div>' +"\n"
    }
    myHtml+="<br>" +"\n";
    
}
    myHtml= "<div id='box'>"+myHtml + "</div>";
    myCSS += "<style> .cow {height: "+tall+"px; width: "+wide+"px; background-color: green; display: inline-block; opacity: 0.3; margin: 0px; 	border: 0px;}</style>";
  
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
    var x = prompt("enter value for x");
    var y = prompt("enter value for y"); 
    var wide= 500/y
    var tall= 500/x
    for (var counter = 0; counter < x; counter++) {
    for(var col=0; col<y; col++){
	myHtml+= '<div class="cow"></div>' +"\n"
    }
    myHtml+="<br>" +"\n";
    
}
    myHtml= "<div id='box'>"+myHtml + "</div>";
    myCSS += "<style> .cow {height: "+tall+"px; width: "+wide+"px; background-color: blue; display: inline-block; opacity: 0.3; margin: 0px; 	border: 0px;}</style>";
  
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
    var x = prompt("enter value for x");
    var y = prompt("enter value for y"); 
    var wide= 500/y
    var tall= 500/x
    for (var counter = 0; counter < x; counter++) {
    for(var col=0; col<y; col++){
	myHtml+= '<div class="cow"></div>' +"\n"
    }
    myHtml+="<br>" +"\n";
    
}
    myHtml= "<div id='box'>"+myHtml + "</div>";
    myCSS += "<style> .cow {height: "+tall+"px; width: "+wide+"px; background-color: yellow; display: inline-block; opacity: 0.3; margin: 0px; 	border: 0px;}</style>";
  
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