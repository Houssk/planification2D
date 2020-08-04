//Pour appeler une traduction dans le html :

// Si le texte à traduire est directement dans le HTML :
// Il faut donner la classe "textTranslation" au conteneur du texte (div, h2, p, span... Peu importe).
// Ensuite, il faut appliquer une balise data au texte pour suivre ce model : data-textid="nomDeLaTraduction"
// Exemple complet : <h3 class="textTranslation" data-textid="informationText">INFORMATIONS</h3>
// Dans cet exemple, le contenu HTML sera remplacéé par la traduction. Le texte "INFORMATIONS" qui est dedans ne sera affiché que si le script ne peut pas être exécuté.
//Le script se chargera du reste.

//Si le texte est contenu dans un placeholder
//Il faut donner la classe "textTranslation" au conteneur du texte (div, h2, p, span... Peu importe) ainsi qu'une balise data pour indiquer quoi modifier : data-type="placeholder"
// Exemple complet : <input class="textTranslation" data-type="placeholder" data-textid="lastNameText" type="text" placeholder="NOM">
// Dans cet exemple, le placeholder "NOM" sera remplacé par la traduction nommée "lastNameText", ou affichera NOM si le script ne peut pas être exécuté.

//Pour appeler la traduction dans un script (Pour une pop up swal par exemple), il faut simplement remplacer le texte par ( translatedTexts["nomDeLaTraduction"][lang] ).
//Exemple complet : if(trapezePosition===null){ swal( translatedTexts["pleaseDrawText"][lang] ); }

//             textTranslation" data-textid="UNTRANSLATED
//             textTranslation" data-textid="UNTRANSLATED" data-type="placeholder value
const translatedLanguages = ["fr", "en"], //Pour ajouter une langue, ajoutez simplement ce qui apparait dans l'URL de la page en se connectant avec la langue ciblée. (/en/ deviens donc "en")
    urlLanguage =  (parent.location.pathname.split('/')[1].toLowerCase()),
    lang = getLanguage()
;
function getLanguage(){
    return (translatedLanguages.indexOf(urlLanguage) >= 0) ? urlLanguage : "en"; //En cas de traduction non terminée ou d'erreur de changement dans l'URL, la page sera par défaut en Français.
}
//Set the html lang parameter
$("html").attr("lang", lang);

const translatedTexts = {
    UserManual: {
        "fr": `Manuel Utilisateur Serf`,
        "en": `User Manual Serf`,
    },
    Planning2DText: {
        "fr": `Planification 2D`,
        "en": `2D preoperative planning`
    },

    informationText: {
        "fr": 'Informations',
        "en": 'Information'
    },

        imgText: {
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

    advancedText: {
        "fr": 'Avancée',
        "en": 'Advanced'
    },

    freeText: {
        "fr": 'Libre',
        "en": 'Free'
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
        "fr": 'Oui',
        "en": 'Yes'
    },

    noText: {
        "fr": 'Non',
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

    selectFileText: {               //TODO Not used !
        "fr": 'Select. Fichiers',
        "en": 'Select Files'
    },

    noFileText: {               //TODO Not used !
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
        "fr": 'Année d’obtention du marquage CE : 2018',
        "en": 'CE mark acquisition year : 2018'
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
    finishText: {               //TODO Not used !
        "fr": "Terminer",
        "en": "Finish"
    },
    contrastText: {               //TODO Not used !
        "fr": "Contraste",
        "en": "Contrast"
    },
    brightnessText: {               //TODO Not used !
        "fr": "Luminosité",
        "en": "Brightness"
    },
    pleaseCalibrate: {
        "fr": "Veuillez calibrer votre DICOM",
        "en": "Please calibrate your DICOM"
    },
    sizeShortText: {               //TODO Not used !
        "fr": "Taille",
        "en": "Size"
    },
    moveText: {               //TODO Not used !
        "fr": "Déplacer",
        "en": "Move"
    },
    positionText: {               //TODO Not used !
        "fr": "Positionner",
        "en": "Position"
    },
    pdfTextTitle: {
        "fr": "Planification pour la chirurgie de la hanche du patient :",
        "en": "Planning for the patient's hip surgery:"
    },
    pdfTextLastName: {
        "fr": "Nom : ",
        "en": "Last name: "
    },
    pdfTextFirstName: {
        "fr": "Prénom : ",
        "en": "First name: "
    },
    pdfTextYourPlanning: {
        "fr": "Votre planification :",
        "en": "Your planning:"
    },
    pdfTextSizeCoefficient: {
        "fr": "Le coefficient de redimensionnement des implants est : ",
        "en": "The scaling coefficient of the implants is: "
    },
    pdfTextStem: {
        "fr": "Tige utilisé pour cette planification : ",
        "en": "Stem used for this planning: "
    },
    pdfTextCup: {
        "fr": "Cotyle utilisé pour cette planification : ",
        "en": "Cup used for this planning: "
    },
    pdfTextOffset: {
        "fr": "Offset = ",
        "en": "Offset = "
    },
    pdfTextHeight: {
        "fr": "Hauteur = ",
        "en": "Height = "
    },
    pdfTextYourDicom: {
        "fr": "Votre image DICOM d'origine :",
        "en": "Your original DICOM picture :"
    }

};
//Translate everything having the .testTranslation class. The translation is done differently if the element have a data field or not.
$('.textTranslation').each(function() {
    typeof $(this).data("type") === 'undefined'
        ?
        $(this).html(translatedTexts[$(this).data("textid")][lang])
        :
        $(this).attr($(this).data("type"), translatedTexts[$(this).data("textid")][lang])
    ;
});
//Set the user manual link
$("#userManual").prop("href", (translatedTexts["UserManual"][lang]) + ".pdf")