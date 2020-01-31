const lang = "en";

const translatedTexts = {
    Planning2DText: {
        "fr": `Planification 2D`,
        "en": `2D preoperative planning`
    },

    informationText: {
        "fr": 'Informations',
        "en": 'Information'
    },

    imgText: {               //TODO Not used !   translatedTexts["imgText"][lang]
        "fr": `Image`,
        "en": `Picture`
    },

    lastNameText: {
        "fr": 'Nom',
        "en": 'Last Name'
    },

    firstNameText: {
        "fr": 'Prénom',
        "en": 'First Name'
    },

    sideText: {
        "fr": 'Côté',
        "en": 'Side'
    },

    leftText: {
        "fr": 'Gauche',
        "en": 'Left'
    },

    rightText: {
        "fr": 'Droite',
        "en": 'Right'
    },

    planningText: {
        "fr": 'Planification',
        "en": 'Planning'
    },

    freeText: {
        "fr": 'Libre',
        "en": 'Free'
    },

    advancedText: {
        "fr": 'Avancée',
        "en": 'Advanced'
    },

    scalingText: {
        "fr": 'Calibrer',
        "en": 'Scaling'
    },

    scaleText: {
        "fr": 'Calibrage',
        "en": 'Scaling'
    },

    enterBallSizeText: {
        "fr": 'Entrez la taille de la bille en mm puis dessinez un cercle autour de la bille',
        "en": 'Enter the size of the ball in mm, then draw a circle around the ball'
    },

    sizeText: {
        "fr": 'Taille en mm',
        "en": 'Size in mm'
    },

    oneHipText: {
        "fr": 'Cette image possède une seule hanche',
        "en": 'This picture has only one hip side'
    },

    yesText: {
        "fr": 'OUI',
        "en": 'Yes'
    },

    noText: {
        "fr": 'NON',
        "en": 'No'
    },

    trapezeText: {
        "fr": 'Trapèze',
        "en": 'Trapeze'
    },

    lesserTrochanterText: {
        "fr": 'Petit trochanter',
        "en": 'Lesser trochanter'
    },

    circleText: {
        "fr": 'Cercle',
        "en": 'Circle'
    },

    pleaseDrawText: {
        "fr": 'Veuillez tracer un cercle et un trapèze sur la hanche du patient',
        "en": 'Please draw a circle and a trapeze on the patient hip'
    },

    pleaseDrawLText: {
        "fr": 'Veuillez tracer un cercle et un trapèze sur la hanche gauche du patient',
        "en": 'Please draw a circle and a trapeze on the left patient hip'
    },

    pleaseDrawRText: {
        "fr": 'Veuillez tracer un cercle et un trapèze sur la hanche droite du patient',
        "en": 'Please draw a circle and a trapeze on the right patient hip'
    },

    implantText: {
        "fr": 'Implants',
        "en": 'Implant'
    },

    stemText: {
        "fr": 'Tige',
        "en": 'Femoral stem'
    },

    cupText: {
        "fr": 'Cotyle',
        "en": 'Acetabular cup'
    },

    selectFileText: {          //TODO Not used !    class="textTranslation" data-type="placeholder" data-textid="selectFileText"
        "fr": 'Select. Fichiers',
        "en": 'Select Files'
    },

    noFileText: {          //TODO Not used !   translatedTexts["noFileText"][lang]   <><><>  class="textTranslation" data-textid="selectFileText"
        "fr": 'Aucun fichier choisi',
        "en": 'No file selected'
    },

    drawingToolsText: {
        "fr": 'Outils dessin',
        "en": 'Drawing tools'
    },

    variousOptionsText: {
        "fr": 'Options diverses',
        "en": 'Various Option'
    },

    angleText: {
        "fr": 'Angle',
        "en": 'Angle'
    },

    rulerText: {
        "fr": 'Règle',
        "en": 'Ruler'
    },

    userManualText: {
        "fr": 'Manuel utilisateur',
        "en": 'Instruction for Use'
    },

    ceMarkText: {
        "fr": 'Année d’obtention du marquage CE : 2017',
        "en": 'CE mark acquisition year : 2017'
    },
    fillAllText: {
        "fr": "Veuillez renseigner le champs !",
        "en": "Please, fill in this field!"
    },
    validateText: {
        "fr": "Valider",
        "en": "Validate"
    },
    backText: {
        "fr": "Retour",
        "en": "Back"
    },
    finishText: {
        "fr": "Terminer",
        "en": "Finish"
    },
    contrastText: {
        "fr": "Contraste",
        "en": "Contrast"
    },
    brightnessText: {
        "fr": "Luminosité",
        "en": "Brightness"
    }
};


$('.textTranslation').each(function() {
    console.log("Trad loop");
    typeof $(this).data("type") === 'undefined'
        ?
            $(this).html(translatedTexts[$(this).data("textid")][lang])
        :
            $(this).attr($(this).data("type"), translatedTexts[$(this).data("textid")][lang])
    ;
});
