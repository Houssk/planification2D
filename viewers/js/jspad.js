jQuery(document).ready(function($) {

$( "#buttonPlusTige" )
  .mouseover(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padTriangleUp.svg');
  })
  .mouseout(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleActive.svg');
  });

$( "#buttonMoinsTige" )
  .mouseover(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padTriangleDown.svg');
  })
  .mouseout(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleActive.svg');
  });
  
$( "#buttonTournerHautTige" )
  .mouseover(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padTriangleLeft.svg');
  })
  .mouseout(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleActive.svg');
  });
  
$( "#buttonTournerBasTige" )
  .mouseover(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padTriangleRight.svg');
  })
  .mouseout(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleActive.svg');
  });
  
$( "#buttonHautTige" )
  .mouseover(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleUp.svg');
  })
  .mouseout(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleActive.svg');
  });
  
$( "#buttonDroitTige" )
  .mouseover(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleRight.svg');
  })
  .mouseout(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleActive.svg');
  });
  
$( "#buttonBasTige" )
  .mouseover(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleDown.svg');
  })
  .mouseout(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleActive.svg');
  });
  
$( "#buttonGaucheTige" )
  .mouseover(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleLeft.svg');
  })
  .mouseout(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleActive.svg');
  });
  
$( "#buttonMonterTige" )
  .mouseover(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleUpRight.svg');
  })
  .mouseout(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleActive.svg');
  });
  
$( "#buttonDescendreTige" )
  .mouseover(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleDownLeft.svg');
  })
  .mouseout(function() {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleActive.svg');
  });

});
