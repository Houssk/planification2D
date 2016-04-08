$(document).ready(function () {
	var complexdata = [1, 2, 3, 40, 5, 6];
	var complexdataBis;
// store array data to the session storage
sessionStorage.setItem("list_data_key",  JSON.stringify(complexdata));

//Use JSON to retrieve the stored data and convert it 
var storedData = sessionStorage.getItem("list_data_key");
if (storedData) {
  complexdataBis = JSON.parse(storedData);
}

console.log("complexdataBis[0]", complexdataBis[0], "complexdataBis[3]", complexdataBis[3]);
});