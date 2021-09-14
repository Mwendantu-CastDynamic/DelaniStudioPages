


function pulsate(element1, elementDescription2 ){

  $(element1 || this).animate({opacity:0},300, function(){
      $(element1).hide();
      $(elementDescription2).show().animate({opacity:1},300);
      

  });

}

$(document).ready(function(){
alert("Document is ready");
    
  $('.what-we-do-icon').click(function(evt){
      const clickedElement = $(evt.target).hasClass('what-we-do-icon')? $(clickedElement) : $(clickedElement).parent();
      pulsate(clickedElement, $(clickedElement).prev());

  });

});