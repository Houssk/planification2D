/**
*Created by Quentin PETIT on 07/04/2016
*/

/**
*Cette fonction crée une tige
*
*@param ID 				Identifiant de la tige
*@param Url 			Chemin d'accès a l'image de la tige
*@param OffsetX		 	Représente l'offset en x entre le centre de l'image et l'axe mécanique vertical en pixel.
*@param tigeWidthPx	 	Représente la largeur de la tige en pixel.
*@param tigeWidthPx	 	Représente la largeur de la tige en cm.
*@param tigeWidthPx	 	Représente la hauteur de la tige en pixel.
*@param tigeWidthPx	 	Représente la hauteur de la tige en cm.
*
*@author Quentin PETIT
*/
function Tige(ID, Nom, Url, OffsetX, tigeWidthPx, tigeWidthCm, tigeHeightPx, tigeHeightCm) {
	this.m_ID=ID;
	this.m_Nom=Nom;
	this.m_Url=Url;
	this.m_OffsetX=OffsetX;
	this.m_coeffDirecteur=null;
	this.m_Position={'x' : null, 'y' : null};
	this.m_canvasWidth=document.getElementById("dwv-imageLayer").width;
	this.m_canvasHeight=document.getElementById("dwv-imageLayer").height;
	this.m_tigeWidthPx=tigeWidthPx;
	this.m_tigeWidthCm=tigeWidthCm;
	this.m_tigeHeightPx=tigeHeightPx;
	this.m_tigeHeightCm=tigeHeightCm;
	this.m_angleAlignement=null;
	this.m_tigeImageWidth=null;
	this.m_tigeImageHeight=null;
	this.m_coeffRedimensionnement=null;
}

/**
*Cette fonction permet de récupérer l'identifiant de la tige
*
*@return m_ID 				Identifiant de la tige
*
*@author Quentin PETIT
*/

Tige.prototype.GetID = function() {
	return this.m_ID;
};

/**
*Cette fonction permet de récupérer le chemin d'accès a l'image de la tige
*
*@return m_Url 				Chemin d'accès a l'image de la tige
*
*@author Quentin PETIT
*/

Tige.prototype.GetUrl = function() {
	return this.m_Url;
};

/**
*Cette fonction permet de récupérer le nom de l'image du tige
*
*@return m_Nom 				Nom de l'image du tige
*
*@author Quentin PETIT
*/
Tige.prototype.GetNom = function() {
	return this.m_Nom;
};

/**
*Cette fonction permet de récupérer l'offset en x entre le centre de l'image et l'axe mécanique vertical en pixel.
*
*@return m_OffsetX 			Représente l'offset en x entre le centre de l'image et l'axe mécanique vertical en pixel.
*
*@author Quentin PETIT
*/

Tige.prototype.GetOffsetX = function() {
	return this.m_OffsetX;
};

/**
*Cette fonction permet de récupérer la nouvelle largeur de l'image après calcul du snap.
*
*@return m_tigeImageWidth	Représente la nouvelle largeur de l'image après calcul du snap.
*
*@author Quentin PETIT
*/
Tige.prototype.GetImageLargeur = function() {
	return this.m_tigeImageWidth;
};

/**
*Cette fonction permet de récupérer la nouvelle hauteur de l'image après calcul de snap.
*
*@return m_tigeImageHeight	Représente la nouvelle hauteur de l'image après calcul de snap.
*
*@author Quentin PETIT
*/
Tige.prototype.GetImageHauteur = function() {
	return this.m_tigeImageHeight;
};

/**
*Cette fonction permet de récupérer la nouvelle position de l'image après calcul de snap.
*
*@return m_Position			Représente la nouvelle position de l'image après calcul de snap.
*
*@author Quentin PETIT
*/
Tige.prototype.GetPosition = function() {
	return this.m_Position;
};

/**
*Cette fonction permet de récupérer la nouvelle orientation de l'image après calcul de snap.
*
*@return m_angleAlignement	Représente la nouvelle orientation de l'image après calcul de snap.
*
*@author Quentin PETIT
*/
Tige.prototype.GetOrientation = function() {
	return this.m_angleAlignement;
};

/**
*Cette fonction permet de récupérer le nouveau coefficient de redimensionnement après calcul de snap.
*
*@return m_angleAlignement	Représente le nouveau coefficient de redimensionnement après calcul de snap.
*
*@author Quentin PETIT
*/
Tige.prototype.GetCoeffRedimensionnement = function() {
	return this.m_coeffRedimensionnement;
};

/**
*Cette fonction permet de snaper la tige sur le trapèze correspondant
*
*@param imageWidth			largeur de l'image associés à la tige
*@param imageHeight			hauteur de l'image associés à la tige
*@param patient				Données patient
*
*@author Quentin PETIT
*/
Tige.prototype.Snap = function(imageWidth, imageHeight, patient) {

	/**
	*Cette fonction récupère les différentes taille de la dicom
	*
	*@author Quentin PETIT
	*/
	function getValeursImage() {
		var dicomCanvas = document.getElementById("dwv-imageLayer");

		// Taille de l'image réelle
		var widthImageReelle = sessionStorage.getItem("imageLargeur");
		var heightImageReelle = sessionStorage.getItem("imageHauteur");

		// Taille de l'image affichée à l'écran
		var widthImageCanvas = dicomCanvas.width;
		var heightImageCanvas = dicomCanvas.height;

		return {
			widthImageReelle : widthImageReelle, 
			heightImageReelle : heightImageReelle, 
			widthImageCanvas : widthImageCanvas, 
			heightImageCanvas : heightImageCanvas
		};
	}

	/**
	*Cette fonction calul les facteurs de redimensionnement de la dicom
	*
	*@author Quentin PETIT
	*/
	function facteurRedimensionnementImage() {
		// On récupère les valeurs de l'image affichée et de l'image réelle
		var image = getValeursImage();

		// Calcul du coefficient réducteur de l'image
		var coefWidthImage = image.widthImageCanvas / image.widthImageReelle;
		var coefHeightImage = image.heightImageCanvas / image.heightImageReelle;

		return {
			coefWidth : coefWidthImage, 
			coefHeight : coefHeightImage
		};
	}

	/**
	*Cette fonction calul le facteur de redimensionnement de la tige
	*
	*@param tigeWidthPx	 	Représente la largeur de la tige en pixel.
	*@param tigeWidthPx	 	Représente la largeur de la tige en cm.
	*@param tigeWidthPx	 	Représente la hauteur de la tige en pixel.
	*@param tigeWidthPx	 	Représente la hauteur de la tige en cm.
	*
	*@author Quentin PETIT
	*/
	function CoefRedimensionnementImplant(wTigePx,wTigeCm,hTigePx,hTigeCm) {
		// On récupère les valeurs de l'image affichée et de l'image réelle
		var image = getValeursImage();

		var coeffBille = sessionStorage.getItem("coefficient");

		var widthReelleImageCm = image.widthImageReelle * coeffBille;
		var heightReelleImageCm = image.heightImageReelle * coeffBille;

		unCmEgalCbPxWidthImage = image.widthImageReelle / widthReelleImageCm;
		unCmEgalCbPxHeightImage = image.heightImageReelle / heightReelleImageCm;

		var unCmEgalCbPxWidthImp = wTigePx / wTigeCm;
		var unCmEgalCbPxHeightImp = hTigePx / hTigeCm;

		// Faut-il faire la moyenne des deux ? Non, il faut prendre l'équivalent en cm pour la largeur et la longueur

		// tailleImplant * X = tailleImage
		// On prend pour le moment la largeur mais après on prendra la largeur et la hauteur
		var coef = unCmEgalCbPxWidthImage / unCmEgalCbPxWidthImp;
		coef=coef*10;
		console.log("unCmEgalCbPxWidthImp",unCmEgalCbPxWidthImp);

	    return coef;
	}

	var trapeze = null;
	var cercle = null;
	var canvasTige = null;
	var flip = null;
	if (patient.GetCoteOperation()=="Droit") {
		trapeze=JSON.parse(sessionStorage.getItem("trapezeGauchePosition").toString());
		cercle=JSON.parse(sessionStorage.getItem("cercleGauchePosition").toString());
		canvasTige = document.getElementById("canvasTigeGauche");
		flip=180
	} else {
		trapeze=JSON.parse(sessionStorage.getItem("trapezeDroitPosition").toString());
		cercle=JSON.parse(sessionStorage.getItem("cercleDroitPosition").toString());
		canvasTige = document.getElementById("canvasTigeDroit");
		flip=0;
	}
	canvasTige.width=this.m_canvasWidth;
	canvasTige.height=this.m_canvasHeight;
	
	var coeffDicom = facteurRedimensionnementImage();
	this.m_coeffRedimensionnement = CoefRedimensionnementImplant(this.m_tigeWidthPx,this.m_tigeWidthCm,this.m_tigeHeightPx,this.m_tigeHeightCm);

	var dicomCanvas = document.getElementById("dwv-imageLayer");
	var dicomWidth = sessionStorage.getItem("imageLargeur");
	var dicomHeight = sessionStorage.getItem("imageHauteur");

	this.m_Position.x = ((trapeze[0]*dicomCanvas.width)/dicomWidth)-(this.m_OffsetX*this.m_coeffRedimensionnement*coeffDicom.coefWidth);
	this.m_Position.y = ((trapeze[1]*dicomCanvas.height)/dicomHeight);

	//var deltaCercleTrapeze = (((trapeze[1]-cercle[1])*dicomCanvas.height)/dicomHeight)/2;

	var deltaX = trapeze[2]-trapeze[0];
	var deltaY = trapeze[3]-trapeze[1];

	var tan = deltaX/deltaY;
	var atan = Math.atan(tan)*-1;
	this.m_angleAlignement=atan;

	this.m_coeffDirecteur=deltaY/deltaX;
	this.m_Position.x-=(((((trapeze[1]-cercle[1])/this.m_coeffDirecteur)*dicomCanvas.width)/dicomWidth)/2);
	this.m_Position.y-=(((trapeze[1]-cercle[1])*dicomCanvas.height)/dicomHeight)/2;


	this.m_tigeImageWidth = imageWidth * coeffDicom.coefWidth * this.m_coeffRedimensionnement;
	this.m_tigeImageHeight = imageHeight * coeffDicom.coefHeight * this.m_coeffRedimensionnement;

	console.log("this.m_tigeImageWidth",this.m_tigeImageWidth,"this.m_tigeImageHeight",this.m_tigeImageHeight);
	console.log("imageWidth",imageWidth,"imageHeight",imageHeight);

};

Tige.prototype.Placement = function(imageWidth, imageHeight, position, orientation) {
	/**
	*Cette fonction récupère les différentes taille de la dicom
	*
	*@author Quentin PETIT
	*/
	function getValeursImage() {
		var dicomCanvas = document.getElementById("dwv-imageLayer");

		// Taille de l'image réelle
		var widthImageReelle = sessionStorage.getItem("imageLargeur");
		var heightImageReelle = sessionStorage.getItem("imageHauteur");

		// Taille de l'image affichée à l'écran
		var widthImageCanvas = dicomCanvas.width;
		var heightImageCanvas = dicomCanvas.height;

		return {
			widthImageReelle : widthImageReelle, 
			heightImageReelle : heightImageReelle, 
			widthImageCanvas : widthImageCanvas, 
			heightImageCanvas : heightImageCanvas
		};
	}

	/**
	*Cette fonction calul les facteurs de redimensionnement de la dicom
	*
	*@author Quentin PETIT
	*/
	function facteurRedimensionnementImage() {
		// On récupère les valeurs de l'image affichée et de l'image réelle
		var image = getValeursImage();

		// Calcul du coefficient réducteur de l'image
		var coefWidthImage = image.widthImageCanvas / image.widthImageReelle;
		var coefHeightImage = image.heightImageCanvas / image.heightImageReelle;

		return {
			coefWidth : coefWidthImage, 
			coefHeight : coefHeightImage
		};
	}

	/**
	*Cette fonction calul le facteur de redimensionnement de la tige
	*
	*@param tigeWidthPx	 	Représente la largeur de la tige en pixel.
	*@param tigeWidthPx	 	Représente la largeur de la tige en cm.
	*@param tigeWidthPx	 	Représente la hauteur de la tige en pixel.
	*@param tigeWidthPx	 	Représente la hauteur de la tige en cm.
	*
	*@author Quentin PETIT
	*/
	function CoefRedimensionnementImplant(wTigePx,wTigeCm,hTigePx,hTigeCm) {
		// On récupère les valeurs de l'image affichée et de l'image réelle
		var image = getValeursImage();

		var coeffBille = sessionStorage.getItem("coefficient");

		var widthReelleImageCm = image.widthImageReelle * coeffBille;
		var heightReelleImageCm = image.heightImageReelle * coeffBille;

		unCmEgalCbPxWidthImage = image.widthImageReelle / widthReelleImageCm;
		unCmEgalCbPxHeightImage = image.heightImageReelle / heightReelleImageCm;

		var unCmEgalCbPxWidthImp = wTigePx / wTigeCm;
		var unCmEgalCbPxHeightImp = hTigePx / hTigeCm;

		// Faut-il faire la moyenne des deux ? Non, il faut prendre l'équivalent en cm pour la largeur et la longueur

		// tailleImplant * X = tailleImage
		// On prend pour le moment la largeur mais après on prendra la largeur et la hauteur
		var coef = unCmEgalCbPxWidthImage / unCmEgalCbPxWidthImp;
		coef=coef*10;
		console.log("coef",coef);

	    return coef;
	}

	var coeffDicom = facteurRedimensionnementImage();
	this.m_coeffRedimensionnement = CoefRedimensionnementImplant(this.m_tigeWidthPx,this.m_tigeWidthCm,this.m_tigeHeightPx,this.m_tigeHeightCm);

	this.m_tigeImageWidth = imageWidth * coeffDicom.coefWidth * this.m_coeffRedimensionnement;
	this.m_tigeImageHeight = imageHeight * coeffDicom.coefHeight * this.m_coeffRedimensionnement;

	this.m_Position=position;
	this.m_angleAlignement=orientation;
};

Tige.prototype.Monter = function() {
	var coeffBille = sessionStorage.getItem("coefficient");
	var dicomCanvas = document.getElementById("dwv-imageLayer");
	var dicomWidth = sessionStorage.getItem("imageLargeur");
	var dicomHeight = sessionStorage.getItem("imageHauteur");
	this.m_Position.x-=((((1/coeffBille)/this.m_coeffDirecteur)*dicomCanvas.width)/dicomWidth);
	this.m_Position.y-=((1/coeffBille)*dicomCanvas.height)/dicomHeight;
};

Tige.prototype.Descendre = function() {
	var coeffBille = sessionStorage.getItem("coefficient");
	var dicomCanvas = document.getElementById("dwv-imageLayer");
	var dicomWidth = sessionStorage.getItem("imageLargeur");
	var dicomHeight = sessionStorage.getItem("imageHauteur");
	this.m_Position.x+=((((1/coeffBille)/this.m_coeffDirecteur)*dicomCanvas.width)/dicomWidth);
	this.m_Position.y+=((1/coeffBille)*dicomCanvas.height)/dicomHeight;
};

Tige.prototype.TournerHaut = function() {
	this.m_angleAlignement+=(1*2*Math.PI)/360;
};

Tige.prototype.TournerBas = function() {
	this.m_angleAlignement-=(1*2*Math.PI)/360;
};