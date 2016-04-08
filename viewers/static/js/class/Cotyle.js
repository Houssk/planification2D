/**
*Created by Quentin PETIT on 07/04/2016
*/

/**
*Cette fonction crée un cotyle
*
*@param ID 				Identifiant du cotyle
*@param Url 			Chemin d'accès a l'image du cotyle
*
*@author Quentin PETIT
*/

function Cotyle(ID, Url) {
	this.m_ID=ID;
	this.m_Url=Url;
}

/**
*Cette fonction permet de récupérer l'identifiant du cotyle
*
*@return m_ID 				Identifiant du cotyle
*
*@author Quentin PETIT
*/

Cotyle.prototype.GetID = function() {
	return this.m_ID;
};

/**
*Cette fonction permet de récupérer le chemin d'accès a l'image du cotyle
*
*@return m_Url 				Chemin d'accès a l'image du cotyle
*
*@author Quentin PETIT
*/

Cotyle.prototype.GetUrl = function() {
	return this.m_Url;
};