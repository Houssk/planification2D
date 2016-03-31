/**
* Created by Quentin PETIT on 30/03/2016
**/

/**
*Cette fonction crée un patient
*
*@param Nom 			Nom du patient
*@param Prenom 			Prenom du patient
*@param OperationGuide 	Représente le type d'opération que va effectué le patient (guidée ou non)
*@param DICOM 			DICOM associée au patient
*@param CoteOperation	Coté ou l'opération va être effectué
*
*@author Quentin PETIT
*/

function Patient(Nom, Prenom, OperationGuide, DICOM, CoteOperation) {
	this.m_Nom=Nom;
	this.m_Prenom=Prenom;
	this.m_OperationGuide=OperationGuide;
	this.m_DICOM=DICOM;
	this.m_CoteOperation=CoteOperation;
};

/**
*Cette fonction permet de récupérer le nom du patient
*
*@return m_Nom 				Nom du patient
*
*@author Quentin PETIT
*/

Patient.prototype.GetNom = function() {
	return this.m_Nom;
}; 

/**
*Cette fonction permet de récupérer le prénom du patient
*
*@return m_Prenom 			Prenom du patient
*
*@author Quentin PETIT
*/

Patient.prototype.GetPrenom = function() {
	return this.m_Prenom;
}; 

/**
*Cette fonction permet de récupérer le type d'opération (guidée ou non)
*
*@return m_OperationGuide	Type d'opération (guidée ou non)
*
*@author Quentin PETIT
*/

Patient.prototype.GetOperationGuide = function() {
	return this.m_OperationGuide;
}; 

/**
*Cette fonction permet de récupérer la DICOM 
*
*@return m_DICOM			DICOM associé au patient
*
*@author Quentin PETIT
*/

Patient.prototype.GetDICOM = function() {
	return this.m_DICOM;
}; 

/**
*Cette fonction permet de récupérer le coté sur lequel l'opération sera effectuée 
*
*@return m_CoteOperation	coté sur lequel l'opération sera effectuée
*
*@author Quentin PETIT
*/

Patient.prototype.GetCoteOperation = function() {
	return this.m_CoteOperation;
}; 