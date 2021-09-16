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

  $(element1)
  .animate({opacity:0},300, function(){
      $(element1).hide();
      $(elementDescription2).show().animate({opacity:1},300);
  });

}

$(document).ready(function(){
   bounce();
   $('#mouse-click-icon').click(scrollToAboutUsSection);
    
  $('.what-we-do-icon').click(function(evt){
      let clickedElement = $(evt.target).hasClass('what-we-do-icon')? $(evt.target) : $(evt.target).parent();
      pulsate(clickedElement, $(clickedElement).prev());

  });

  $('.description').mouseout(function(evt){
      pulsate(this,$(this).next());
  });

});