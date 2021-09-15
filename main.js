function bounce(){
  $('#mouse-click')
  .animate({
        marginTop : "-35px",
        position :"absolute"                                                 

  }, 500)
  .animate({

    marginTop:"0",
    position: "absolute"

    }, { 
        duration:500,
        complete: bounce
    
    });


}

function scrollToAboutUsSection(){

  let position = $("#aboutUs-section").position();
  $('html,body').animate({
        scrollTop:position.top+'px'

  },500);


}

function pulsate(element1, elementDescription2 ){

  $(element1 || elementDescription2)
  .animate({opacity:0},300px, function(){
      $(element1).hide();
      $(elementDescription2).show()
      
      .animate({opacity:1},300);
      $(element1).show();
      $(elementDescription2).hide();
      

  });

}

$(document).ready(function(){
   bounce();
   $('#mouse-click-icon').click(scrollToAboutUsSection);
    
  $('.what-we-do-icon').click(function(evt){
      let clickedElement = $(evt.target).hasClass('what-we-do-icon')? $(clickedElement) : $(clickedElement).parent();
      pulsate(clickedElement, $(clickedElement).prev());

  });

});