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
  var chargelevel = document.getElementById('level').value;
  var connector = document.getElementById('con').value;
  var charinfo = document.getElementById('chargerinfo').value.trim();

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("hosts/" + user.uid).update(
		{
        "address":hostaddress,
        "name":hostname,
        "phone":hostphone,
        "city":hostcity,
        "chargerLevel":chargelevel,
        "connector":connector,
        "charinfo":charinfo
        });
    });
    document.getElementById("host-details").style.display = "block";
    document.getElementById("host-details-edit").style.display = "none";

}


//The following methods read the hosts info from the database.
firebase.auth().onAuthStateChanged(function(user){
var first = document.getElementById("hostname");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/name");
	   db.on ("value", snap => first.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var phone = document.getElementById("hostphonenum");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/phone");
	   db.on ("value", snap => phone.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var address = document.getElementById("hostaddress");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/address");
	   db.on ("value", snap => address.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var city = document.getElementById("hostcity");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/city");
	   db.on ("value", snap => city.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var level = document.getElementById("charlev");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/chargerLevel");
	   db.on ("value", snap => level.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var conn = document.getElementById("conn");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/connector");
	   db.on ("value", snap => conn.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var conn = document.getElementById("conn");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/connector");
	   db.on ("value", snap => conn.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var info = document.getElementById("inf");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/charinfo");
	   db.on ("value", snap => info.value = snap.val());
});
//--------------------------------------------------------------------

//The following methods read the hosts info from the database into the value of the inputs.
firebase.auth().onAuthStateChanged(function(user){
var first = document.getElementById("dbhostname");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/name");
	   db.on ("value", snap => first.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var phone = document.getElementById("dbhostphonenum");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/phone");
	   db.on ("value", snap => phone.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var address = document.getElementById("dbhostaddress");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/address");
	   db.on ("value", snap => address.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var city = document.getElementById("dbhostcity");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/city");
	   db.on ("value", snap => city.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var type = document.getElementById("level");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/chargerLevel");
	   db.on ("value", snap => type.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var con = document.getElementById("con");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/connector");
	   db.on ("value", snap => con.value = snap.val());
});


firebase.auth().onAuthStateChanged(function(user){
var info = document.getElementById("chargerinfo");
	   var db = firebase.database().ref().child("hosts/"+user.uid + "/charinfo");
	   db.on ("value", snap => info.value = snap.val());
});
//--------------------------------------------------------------------



