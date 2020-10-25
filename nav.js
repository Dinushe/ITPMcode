// Toggle function to open and close nav bar

var icon = document.getElementById("nav-icon");
var nav = document.getElementById("nav");
icon.addEventListener("click", function(){
    nav.classList.toggle("open")
})

//hide navbar


let navbar = document.getElementById('navbar');
var scrollPrev = window.pageYOffset;
function scrollFun1() {
  var scrollCur = window.pageYOffset;
  if(scrollPrev > scrollCur){
    navbar.style.top = "0";
  }else{
     navbar.style.top = "-90px";

  }
 scrollPrev = scrollCur;
}

// When the user scrolls down 50px from the top of the document, resize the header logo size

function scrollFun2() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 && document.body.offsetWidth > 620) {
document.getElementById('logo').style.width= "150px";
} else {
document.getElementById('logo').style.width = "300px";//200px
}
}

window.onscroll = function() {scrollFun1(), scrollFun2()};


function myFunction() {
    
       
      var myWindow = window.open("../../IT18019896/updated_cam/homepage/index.html");
        
}

function strmFrm() {
    
       
  var myWindow = window.open("../../IT18019896/updated_cam/request/index.html");
    
}

function tvform() {
    
       
  var myWindow = window.open("form.html");
    
}

function myFunction1() {
    
       
    var myWindow = window.open("TVchannelMain.html");
      
}

function stream() {
    
       
  var myWindow = window.open("../../IT18160062/malki/streaming_Page.html");
    
}
