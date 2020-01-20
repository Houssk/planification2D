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
                $("#padCircleTige").attr('src', 'images/pad/position/padTriangleUp.svg');
            }
            else if(coteChirurgie == $("input[name='coteTige']:checked").val()) {
                $("#padCircleTige").attr('src', 'images/pad/deplacer/padTriangleUp.svg');
            }
            else {
                $("#padCircleTige").attr('src', 'images/pad/position/padTriangleUp.svg');
            }
        })
        .mouseout(function() {
            if (typeChirgurie == "Non guider") {
                $("#padCircleTige").attr('src', 'images/pad/position/padCircleActive.svg');
            }
            else if(coteChirurgie == $("input[name='coteTige']:checked").val()) {
                $("#padCircleTige").attr('src', 'images/pad/deplacer/padCircleActive.svg');
            }
            else {
                $("#padCircleTige").attr('src', 'images/pad/position/padCircleActive.svg');
            };
        });

    $( "#buttonMoinsTige" )
        .mouseover(function() {
            if (typeChirgurie == "Non guider") {
                $("#padCircleTige").attr('src', 'images/pad/position/padTriangleDown.svg');
            }
            else if(coteChirurgie == $("input[name='coteTige']:checked").val()) {
                $("#padCircleTige").attr('src', 'images/pad/deplacer/padTriangleDown.svg');
            }
            else {
                $("#padCircleTige").attr('src', 'images/pad/position/padTriangleDown.svg');
            };
        })
        .mouseout(function() {
            if (typeChirgurie == "Non guider") {
                $("#padCircleTige").attr('src', 'images/pad/position/padCircleActive.svg');
            }
            else if(coteChirurgie == $("input[name='coteTige']:checked").val()) {
                $("#padCircleTige").attr('src', 'images/pad/deplacer/padCircleActive.svg');
            }
            else {
                $("#padCircleTige").attr('src', 'images/pad/position/padCircleActive.svg');
            }
        });

    $( "#buttonTournerHautTige" )
        .mouseover(function() {
            $("#padCircleTige").attr('src', 'images/pad/position/padTriangleLeft.svg');
        })
        .mouseout(function() {
            $("#padCircleTige").attr('src', 'images/pad/position/padCircleActive.svg');
        });

    $( "#buttonTournerBasTige" )
        .mouseover(function() {
            $("#padCircleTige").attr('src', 'images/pad/position/padTriangleRight.svg');
        })
        .mouseout(function() {
            $("#padCircleTige").attr('src', 'images/pad/position/padCircleActive.svg');
        });

    $( "#buttonHautTige" )
        .mouseover(function() {
            $("#padCircleTige").attr('src', 'images/pad/deplacer/padCircleUp.svg');
        })
        .mouseout(function() {
            $("#padCircleTige").attr('src', 'images/pad/deplacer/padCircleActive.svg');
        });

    $( "#buttonDroitTige" )
        .mouseover(function() {
            $("#padCircleTige").attr('src', 'images/pad/deplacer/padCircleRight.svg');
        })
        .mouseout(function() {
            $("#padCircleTige").attr('src', 'images/pad/deplacer/padCircleActive.svg');
        });

    $( "#buttonBasTige" )
        .mouseover(function() {
            $("#padCircleTige").attr('src', 'images/pad/deplacer/padCircleDown.svg');
        })
        .mouseout(function() {
            $("#padCircleTige").attr('src', 'images/pad/deplacer/padCircleActive.svg');
        });

    $( "#buttonGaucheTige" )
        .mouseover(function() {
            $("#padCircleTige").attr('src', 'images/pad/deplacer/padCircleLeft.svg');
        })
        .mouseout(function() {
            $("#padCircleTige").attr('src', 'images/pad/deplacer/padCircleActive.svg');
        });

    $( "#buttonMonterTige" )
        .mouseover(function() {
            $("#padCircleTige").attr('src', 'images/pad/deplacer/padCircleUpRight.svg');
        })
        .mouseout(function() {
            $("#padCircleTige").attr('src', 'images/pad/deplacer/padCircleActive.svg');
        });

    $( "#buttonDescendreTige" )
        .mouseover(function() {
            $("#padCircleTige").attr('src', 'images/pad/deplacer/padCircleDownLeft.svg');
        })
        .mouseout(function() {
            $("#padCircleTige").attr('src', 'images/pad/deplacer/padCircleActive.svg');
        });

    $( "#buttonPlusCotyle" )
        .mouseover(function() {
            if (typeChirgurie == "Non guider") {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padTriangleUp.svg');
            }
            else if(coteChirurgie == $("input[name='coteCotyle']:checked").val()) {
                $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padTriangleUp.svg');
            }
            else {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padTriangleUp.svg');
            }
        })
        .mouseout(function() {
            if (typeChirgurie == "Non guider") {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padCircleActive.svg');
            }
            else if(coteChirurgie == $("input[name='coteCotyle']:checked").val()) {
                $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padCircleActive.svg');
            }
            else {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padCircleActive.svg');
            }
        });

    $( "#buttonMoinsCotyle" )
        .mouseover(function() {
            if (typeChirgurie == "Non guider") {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padTriangleDown.svg');
            }
            else if(coteChirurgie == $("input[name='coteCotyle']:checked").val()) {
                $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padTriangleDown.svg');
            }
            else {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padTriangleDown.svg');
            }
        })
        .mouseout(function() {
            if (typeChirgurie == "Non guider") {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padCircleActive.svg');
            }
            else if(coteChirurgie == $("input[name='coteCotyle']:checked").val()) {
                $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padCircleActive.svg');
            }
            else {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padCircleActive.svg');
            }
        });

    $( "#buttonTournerHautCotyle" )
        .mouseover(function() {
            if (typeChirgurie == "Non guider") {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padTriangleLeft.svg');
            }
            else if(coteChirurgie == $("input[name='coteCotyle']:checked").val()) {
                $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padTriangleLeft.svg');
            }
            else {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padTriangleLeft.svg');
            }
        })
        .mouseout(function() {
            if (typeChirgurie == "Non guider") {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padCircleActive.svg');
            }
            else if(coteChirurgie == $("input[name='coteCotyle']:checked").val()) {
                $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padCircleActive.svg');
            }
            else {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padCircleActive.svg');
            }
        });

    $( "#buttonTournerBasCotyle" )
        .mouseover(function() {
            if (typeChirgurie == "Non guider") {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padTriangleRight.svg');
            }
            else if(coteChirurgie == $("input[name='coteCotyle']:checked").val()) {
                $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padTriangleRight.svg');
            }
            else {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padTriangleRight.svg');
            }
        })
        .mouseout(function() {
            if (typeChirgurie == "Non guider") {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padCircleActive.svg');
            }
            else if(coteChirurgie == $("input[name='coteCotyle']:checked").val()) {
                $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padCircleActive.svg');
            }
            else {
                $("#padCircleCotyle").attr('src', 'images/pad/position/padCircleActive.svg');
            }
        });

    $( "#buttonDroitCotyle" )
        .mouseover(function() {
            $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padCircleRight.svg');
        })
        .mouseout(function() {
            $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padCircleActive.svg');
        });

    $( "#buttonGaucheCotyle" )
        .mouseover(function() {
            $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padCircleLeft.svg');
        })
        .mouseout(function() {
            $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padCircleActive.svg');
        });

    $( "#buttonMonterCotyle" )
        .mouseover(function() {
            $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padCircleUpRight.svg');
        })
        .mouseout(function() {
            $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padCircleActive.svg');
        });

    $( "#buttonDescendreCotyle" )
        .mouseover(function() {
            $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padCircleDownLeft.svg');
        })
        .mouseout(function() {
            $("#padCircleCotyle").attr('src', 'images/pad/cotyleGuide/padCircleActive.svg');
        });

    $("#buttonDeplacerTige")
        .mouseover(function() {
            $("#buttonDeplacerTige").parent().css('background-color', 'var(--color-main-background)');
        })
        .mouseout(function() {
            $("#buttonDeplacerTige").parent().css('background-color', 'var(--color-main-background)');
        });

    $("#buttonDeplacerCotyle")
        .mouseover(function() {
            $("#buttonDeplacerCotyle").parent().css('background-color', 'var(--color-main-background)');
        })
        .mouseout(function() {
            $("#buttonDeplacerCotyle").parent().css('background-color', 'var(--color-main-background)');
        });

    $('#buttonDeplacerTige').click(function() {
        $('#divDeplacerTige').addClass('activeBtn');
    });

    $('#dPadTige').find('span').click(function(event) {
        $target = $(event.target);
        if($target.attr('id') != 'buttonDeplacerTige') {
            $('#divDeplacerTige').removeClass('activeBtn');
        }
    });

    $('#buttonDeplacerCotyle').click(function() {
        $('#divDeplacerCotyle').addClass('activeBtn');
    });

    $('#dPadCotyle').find('span').click(function(event) {
        $target = $(event.target);
        if($target.attr('id') != 'buttonDeplacerCotyle') {
            $('#divDeplacerCotyle').removeClass('activeBtn');
        }
    });


});

