$(document).ready(function () {
	var patient = new Patient("DUPOND", "Jean", true, "dcm", "droit");
	console.log(patient.GetNom());
});