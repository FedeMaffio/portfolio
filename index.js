function disableScroll(){
    const html = document.getElementById("html")
    html.classList.toggle("no-scroll")
}

$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 300) {
        $(".nav_background").css({"background" : "#f9f9f9" , "box-shadow" : "0px 2px 15px rgba(0, 0, 0, 0.25)"});
      }

      else{
        $(".nav_background").css({"background" : "transparent" , "box-shadow" : "none"});  	
      }
    })
  })

  
