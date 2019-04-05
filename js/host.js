function editHostDetails() {
  document.getElementById("host-details").style.display = "none";
  document.getElementById("host-details-edit").style.display = "block";
}

function saveHostDetails() {
  var firebase = app_firebase;
  var hostaddress = document.getElementById('dbhostaddress').value;
  var hostname = document.getElementById('dbhostname').value;
  var hostphone = document.getElementById('dbhostphonenum').value;
  var hostcity = document.getElementById('dbhostcity').value;

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("hosts/" + user.uid).update(
		{
        "address":hostaddress,
        "name":hostname,
        "phone":hostphone,
        "city":hostcity
        });
    });
    document.getElementById("host-details").style.display = "block";
    document.getElementById("host-details-edit").style.display = "none";

}
  


//The following methods read the users info from the database.
firebase.auth().onAuthStateChanged(function(user){
var name = document.getElementById("hostname");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/name");
	   db.on ("value", snap => name.innerText = snap.val());
});

