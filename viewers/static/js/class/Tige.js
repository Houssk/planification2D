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
function Tige(ID, Nom, Url, OffsetX, tigeWidthPx, tigeWidthCm, tigeHeightPx, tigeHeightCm, ptMecaHautXPx, ptMecaHautYPx, Taille) {
	this.m_ID=ID;
	this.m_Nom=Nom;
	this.m_Url=Url;
	this.m_OffsetX=OffsetX;
	this.m_coeffDirecteur=null;
	this.m_Position={'x' : null, 'y' : null};
	this.m_PositionAvtOffset={'x' : null, 'y' : null};
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
	this.m_deltaDeplacement=0;
	this.m_deltaDeplacementX=0;
	this.m_deltaDeplacementY=0;
	this.m_ptMecaHaut={'x': ptMecaHautXPx, 'y' : ptMecaHautYPx};
	this.m_PositionPtMeca={'x' : null, 'y' : null};
	this.m_Taille=Taille;
	console.log(Nom);
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
*Cette fonction permet de récupérer la position du point mécanique.
*
*@return m_PositionPtMeca	Représente la position du point mécanique.
*
*@author Quentin PETIT
*/
Tige.prototype.GetPositionPtMecaHaut = function() {
	return this.m_PositionPtMeca;
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
*@return m_coeffRedimensionnement	Représente le nouveau coefficient de redimensionnement après calcul de snap.
*
*@author Quentin PETIT
*/
Tige.prototype.GetCoeffRedimensionnement = function() {
	return this.m_coeffRedimensionnement;
};

/**
*Cette fonction permet de récupérer le déplacement de la tige.
*
*@return m_deltaDeplacement	Représente le déplacement de la tige.
*
*@author Quentin PETIT
*/
Tige.prototype.GetDeltaDeplacement = function() {
	return this.m_deltaDeplacement;
};

/**
*Cette fonction retourne la position sans l'offset
*
*@return m_PositionAvtOffset	Représente la position de la tige sans l'offset
*
*@author Quentin PETIT
*/
Tige.prototype.GetPositionAvtOffset = function() {
	return this.m_PositionAvtOffset;
};

/**
*Cette fonction permet de récupérer le déplacement de la tige.
*
*@return m_deltaDeplacement	Représente le déplacement en x de la tige.
*
*@author Quentin PETIT
*/
Tige.prototype.GetDeltaDeplacementX = function() {
	return this.m_deltaDeplacementX;
};

/**
*Cette fonction permet de récupérer le déplacement de la tige.
*
*@return m_deltaDeplacement	Représente le déplacement en y de la tige.
*
*@author Quentin PETIT
*/
Tige.prototype.GetDeltaDeplacementY = function() {
	return this.m_deltaDeplacementY;
};

/**
*Cette fonction permet de récupérer la taille de la tige
*
*@return m_Taille 				Taille de la tige
*
*@author Quentin PETIT
*/

Tige.prototype.GetTaille = function() {
	return this.m_Taille;
};

/**
*Cette fonction permet de snaper la tige sur le trapèze correspondant
*
*@param imageWidth			largeur de l'image associés à la tige
*@param imageHeight			hauteur de l'image associés à la tige
*@param deltaDeplacement 	déplacement suivant l'axe de la tige
*@param deltaDeplacementX 	déplacement latérale de la tige
*@param deltaDeplacementY 	déplacement vertical de la tige
*@param patient				Données patient
*
*
*@author Quentin PETIT
*/
Tige.prototype.Snap = function(imageWidth, imageHeight, patient, deltaDeplacement, deltaDeplacementX, deltaDeplacementY ) {

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
		var coefWidth = (unCmEgalCbPxWidthImage / unCmEgalCbPxWidthImp)*10;
		var coefHeight = (unCmEgalCbPxHeightImage / unCmEgalCbPxHeightImp)*10;

		return {
			coefWidth : coefWidth,
			coefHeight : coefHeight
		};
	}

	/**
	 *Cette fonction permet de réaliser une rotation autour d'un point donné
	 *
	 *@param cx			origine X de la rotation
	 *@param cy			origine y de la rotation
	 *@param x		    le point x l'objet de rotation
	 *@param y			le point y l'objet de rotation
	 *@param angle		angle de rotation en radian
	 *
	 *@author Houssam KARRACH
	 */

	function rotate(cx, cy, x, y, angle) {
		var radians =  angle,
			cos = Math.cos(radians),
			sin = Math.sin(radians),
			nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
			ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
		return [nx, ny];
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

	this.m_Position.x = ((trapeze[0]*dicomCanvas.width)/dicomWidth)-(this.m_OffsetX*this.m_coeffRedimensionnement.coefWidth*coeffDicom.coefWidth);
	this.m_Position.y = ((trapeze[1]*dicomCanvas.height)/dicomHeight);

	this.m_PositionAvtOffset.x=((trapeze[0]*dicomCanvas.width)/dicomWidth);
	this.m_PositionAvtOffset.y=((trapeze[1]*dicomCanvas.height)/dicomHeight);

	//var deltaCercleTrapeze = (((trapeze[1]-cercle[1])*dicomCanvas.height)/dicomHeight)/2;

	var deltaX = trapeze[2]-trapeze[0];
	var deltaY = trapeze[3]-trapeze[1];

	var tan = deltaX/deltaY;
	var acos = Math.atan(tan);
	var atan = Math.atan(tan)*-1;
	this.m_angleAlignement=atan;

	this.m_deltaDeplacement=deltaDeplacement || 0;
	this.m_deltaDeplacementX=deltaDeplacementX || 0;
	this.m_deltaDeplacementY=deltaDeplacementY || 0;

	this.m_coeffDirecteur=deltaY/deltaX;

	this.m_tigeImageWidth = imageWidth * coeffDicom.coefWidth * this.m_coeffRedimensionnement.coefWidth;
	this.m_tigeImageHeight = imageHeight * coeffDicom.coefHeight * this.m_coeffRedimensionnement.coefHeight;
	var canvas  = document.querySelector('#dwv-imageLayer');
	var context = canvas.getContext('2d');
	context.strokeStyle = "green";
	var trapezeX = trapeze[0] - this.m_OffsetX*this.m_coeffRedimensionnement.coefWidth;
	var trapezeY = trapeze[1];
	    //trapezeX += this.m_deltaDeplacement/this.m_coeffDirecteur;
		//trapezeY += this.m_deltaDeplacement;
		

	var pointMx =  trapezeX + this.m_ptMecaHaut.x*this.m_coeffRedimensionnement.coefWidth;
	var pointMy = trapezeY - this.m_ptMecaHaut.y*this.m_coeffRedimensionnement.coefHeight;

	var rotation = rotate(trapezeX,trapezeY,pointMx,pointMy,acos);
	this.m_PositionPtMeca.x = rotation[0];
	this.m_PositionPtMeca.y = rotation[1];

	var delta=this.m_PositionPtMeca.y-cercle[1];

	this.m_Position.x-=((delta/this.m_coeffDirecteur)*dicomCanvas.width)/dicomWidth;
	this.m_Position.y-=(delta*dicomCanvas.height)/dicomHeight;

	this.m_PositionAvtOffset.x-=((delta/this.m_coeffDirecteur)*dicomCanvas.width)/dicomWidth;
	this.m_PositionAvtOffset.y-=(delta*dicomCanvas.height)/dicomHeight;

	this.m_PositionPtMeca.x-=delta/this.m_coeffDirecteur;
	this.m_PositionPtMeca.y-=delta;

	this.m_PositionPtMeca.x += this.m_deltaDeplacement/this.m_coeffDirecteur;
	this.m_PositionPtMeca.y += this.m_deltaDeplacement;

	this.m_PositionPtMeca.x += this.m_deltaDeplacementX;
	this.m_PositionPtMeca.y += this.m_deltaDeplacementY;

	this.m_Position.x+=((((this.m_deltaDeplacement)/this.m_coeffDirecteur)*dicomCanvas.width)/dicomWidth);
	this.m_Position.y+=((this.m_deltaDeplacement)*dicomCanvas.height)/dicomHeight;
	this.m_Position.x+=((this.m_deltaDeplacementX)*dicomCanvas.width)/dicomWidth;
	this.m_Position.y+=((this.m_deltaDeplacementY)*dicomCanvas.height)/dicomHeight;

	this.m_PositionAvtOffset.x+=((((this.m_deltaDeplacement)/this.m_coeffDirecteur)*dicomCanvas.width)/dicomWidth);
	this.m_PositionAvtOffset.y+=((this.m_deltaDeplacement)*dicomCanvas.height)/dicomHeight;
	this.m_PositionAvtOffset.x+=((this.m_deltaDeplacementX)*dicomCanvas.width)/dicomWidth;
	this.m_PositionAvtOffset.y+=((this.m_deltaDeplacementY)*dicomCanvas.height)/dicomHeight;

	//context.strokeRect(this.m_PositionPtMeca.x,this.m_PositionPtMeca.y, 20, 80);




};

Tige.prototype.Placement = function(imageWidth, imageHeight, position, orientation) {

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
		var coefWidth = (unCmEgalCbPxWidthImage / unCmEgalCbPxWidthImp)*10;
		var coefHeight = (unCmEgalCbPxHeightImage / unCmEgalCbPxHeightImp)*10;

		return {
			coefWidth : coefWidth,
			coefHeight : coefHeight
		};
	}

	var coeffDicom = facteurRedimensionnementImage();
	this.m_coeffRedimensionnement = CoefRedimensionnementImplant(this.m_tigeWidthPx,this.m_tigeWidthCm,this.m_tigeHeightPx,this.m_tigeHeightCm);

	this.m_tigeImageWidth = imageWidth * coeffDicom.coefWidth * this.m_coeffRedimensionnement.coefWidth;
	this.m_tigeImageHeight = imageHeight * coeffDicom.coefHeight * this.m_coeffRedimensionnement.coefHeight;

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

	this.m_PositionAvtOffset.x-=((((1/coeffBille)/this.m_coeffDirecteur)*dicomCanvas.width)/dicomWidth);
	this.m_PositionAvtOffset.y-=((1/coeffBille)*dicomCanvas.height)/dicomHeight;

	this.m_PositionPtMeca.x-=((((1/coeffBille)/this.m_coeffDirecteur)));
	this.m_PositionPtMeca.y-=((1/coeffBille));

	this.m_deltaDeplacement-=1/coeffBille;
	var canvas  = document.querySelector('#dwv-imageLayer');
	var context = canvas.getContext('2d');
	context.strokeStyle = "blue";
	//context.strokeRect(this.m_PositionPtMeca.x,this.m_PositionPtMeca.y, 20, 80);
};

Tige.prototype.Descendre = function() {
	var coeffBille = sessionStorage.getItem("coefficient");
	var dicomCanvas = document.getElementById("dwv-imageLayer");
	var dicomWidth = sessionStorage.getItem("imageLargeur");
	var dicomHeight = sessionStorage.getItem("imageHauteur");

	this.m_Position.x+=((((1/coeffBille)/this.m_coeffDirecteur)*dicomCanvas.width)/dicomWidth);
	this.m_Position.y+=((1/coeffBille)*dicomCanvas.height)/dicomHeight;

	this.m_PositionAvtOffset.x+=((((1/coeffBille)/this.m_coeffDirecteur)*dicomCanvas.width)/dicomWidth);
	this.m_PositionAvtOffset.y+=((1/coeffBille)*dicomCanvas.height)/dicomHeight;

	this.m_PositionPtMeca.x+=((((1/coeffBille)/this.m_coeffDirecteur)));
	this.m_PositionPtMeca.y+=((1/coeffBille));

	this.m_deltaDeplacement+=1/coeffBille;
	var canvas  = document.querySelector('#dwv-imageLayer');
	var context = canvas.getContext('2d');
	context.strokeStyle = "grey";
	//context.strokeRect(this.m_PositionPtMeca.x,this.m_PositionPtMeca.y, 20, 80);
};

Tige.prototype.TournerHaut = function() {
	this.m_angleAlignement+=(1*2*Math.PI)/360;
};

Tige.prototype.TournerBas = function() {
	this.m_angleAlignement-=(1*2*Math.PI)/360;
};

Tige.prototype.MouvementDroit = function() {
	var coeffBille = sessionStorage.getItem("coefficient");
	var dicomCanvas = document.getElementById("dwv-imageLayer");
	var dicomWidth = sessionStorage.getItem("imageLargeur");
	var dicomHeight = sessionStorage.getItem("imageHauteur");

	this.m_Position.x+=((1/coeffBille)*dicomCanvas.width)/dicomWidth;
	
	this.m_PositionAvtOffset.x+=((1/coeffBille)*dicomCanvas.width)/dicomWidth;

	this.m_PositionPtMeca.x+=1/coeffBille;

	this.m_deltaDeplacementX+=1/coeffBille;
};

Tige.prototype.MouvementGauche = function() {
	var coeffBille = sessionStorage.getItem("coefficient");
	var dicomCanvas = document.getElementById("dwv-imageLayer");
	var dicomWidth = sessionStorage.getItem("imageLargeur");
	var dicomHeight = sessionStorage.getItem("imageHauteur");

	this.m_Position.x-=((1/coeffBille)*dicomCanvas.width)/dicomWidth;
	
	this.m_PositionAvtOffset.x-=((1/coeffBille)*dicomCanvas.width)/dicomWidth;

	this.m_PositionPtMeca.x-=1/coeffBille;

	this.m_deltaDeplacementX-=1/coeffBille;
};

Tige.prototype.MouvementHaut = function() {
	var coeffBille = sessionStorage.getItem("coefficient");
	var dicomCanvas = document.getElementById("dwv-imageLayer");
	var dicomWidth = sessionStorage.getItem("imageLargeur");
	var dicomHeight = sessionStorage.getItem("imageHauteur");

	this.m_Position.y-=((1/coeffBille)*dicomCanvas.height)/dicomHeight;
	
	this.m_PositionAvtOffset.y-=((1/coeffBille)*dicomCanvas.height)/dicomHeight;

	this.m_PositionPtMeca.y-=1/coeffBille;

	this.m_deltaDeplacementY-=1/coeffBille;
};

Tige.prototype.MouvementBas = function() {
	var coeffBille = sessionStorage.getItem("coefficient");
	var dicomCanvas = document.getElementById("dwv-imageLayer");
	var dicomWidth = sessionStorage.getItem("imageLargeur");
	var dicomHeight = sessionStorage.getItem("imageHauteur");

	this.m_Position.y+=((1/coeffBille)*dicomCanvas.height)/dicomHeight;
	
	this.m_PositionAvtOffset.y+=((1/coeffBille)*dicomCanvas.height)/dicomHeight;

	this.m_PositionPtMeca.y+=1/coeffBille;

	this.m_deltaDeplacementY+=1/coeffBille;
};