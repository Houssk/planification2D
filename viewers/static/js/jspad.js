jQuery(document).ready(function($) {

var typeChirgurie = null;
var coteChirurgie = null;

$('#buttonValideInformationPatient')
  .click(function() {
    typeChirgurie = $("#typeChirurgie").val();
    coteChirurgie = $("#coteChirurgie").val();
  });

$( "#buttonPlusTige" )
  .mouseover(function() {
    if (typeChirgurie == "Non guider") {
      $("#padCircle").attr('src', 'images/pad/positionTige/padTriangleUp.svg');
    }
    else if(coteChirurgie == $("#coteTige").val()) {
        $("#padCircle").attr('src', 'images/pad/deplacerTige/padTriangleUp.svg');
        }
      else {
        $("#padCircle").attr('src', 'images/pad/positionTige/padTriangleUp.svg');
        };
  })
  .mouseout(function() {
    if (typeChirgurie == "Non guider") {
      $("#padCircle").attr('src', 'images/pad/positionTige/padCircleActive.svg');
    }
    else if(coteChirurgie == $("#coteTige").val()) {
      $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleActive.svg');
      }
    else {
      $("#padCircle").attr('src', 'images/pad/positionTige/padCircleActive.svg');
      };
  });

$( "#buttonMoinsTige" )
.mouseover(function() {
  if (typeChirgurie == "Non guider") {
    $("#padCircle").attr('src', 'images/pad/positionTige/padTriangleDown.svg');
  }
  else if(coteChirurgie == $("#coteTige").val()) {
      $("#padCircle").attr('src', 'images/pad/deplacerTige/padTriangleDown.svg');
      }
    else {
      $("#padCircle").attr('src', 'images/pad/positionTige/padTriangleDown.svg');
      };
})
.mouseout(function() {
  if (typeChirgurie == "Non guider") {
    $("#padCircle").attr('src', 'images/pad/positionTige/padCircleActive.svg');
  }
  else if(coteChirurgie == $("#coteTige").val()) {
    $("#padCircle").attr('src', 'images/pad/deplacerTige/padCircleActive.svg');
    }
  else {
    $("#padCircle").attr('src', 'images/pad/positionTige/padCircleActive.svg');
    };
});
  
$( "#buttonTournerHautTige" )
  .mouseover(function() {
    $("#padCircle").attr('src', 'images/pad/positionTige/padTriangleLeft.svg');
  })
  .mouseout(function() {
    $("#padCircle").attr('src', 'images/pad/positionTige/padCircleActive.svg');
  });
  
$( "#buttonTournerBasTige" )
  .mouseover(function() {
    $("#padCircle").attr('src', 'images/pad/positionTige/padTriangleRight.svg');
  })
  .mouseout(function() {
    $("#padCircle").attr('src', 'images/pad/positionTige/padCircleActive.svg');
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

$("#buttonDeplacerTige")
  .mouseover(function() {
    $("#buttonDeplacerTige").parent().css('background-color', '#c55801');
  })
  .mouseout(function() {
    $("#buttonDeplacerTige").parent().css('background-color', '#f47d30');
  });

$('#buttonDeplacerTige').click(function() {
    $('#buttonDeplacer').addClass('activeBtn');
  });

  $('#dPad').find('span').click(function(event) { 
    $target = $(event.target);
    if($target.attr('id') != 'buttonDeplacerTige') {
      $('#buttonDeplacer').removeClass('activeBtn');
    }         
  });


});

