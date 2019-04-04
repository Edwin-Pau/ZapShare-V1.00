//Edit profile function that switches the content of the main div.
function editProfile() {
  document.getElementById("summary-background").style.display = "none";
  document.getElementById("summary-background-edit").style.display = "block";
}

//Submit changes fucntion that writes the changes to the databaseand then switches the main div back.
function submitChanges() {
  var firebase = app_firebase;
  var firstname = document.getElementById('firstname').value;    
  var lastname = document.getElementById('lastname').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("users/"+user.uid).update(
		{
        "name":user.displayName, 
        "email":user.email,
        "firstname":firstname,
        "lastname":lastname,
        "address":address,
        "city":city
        });
    });
  document.getElementById("summary-background").style.display = "block";
  document.getElementById("summary-background-edit").style.display = "none";
}



//The following methods read the users info from the database.
firebase.auth().onAuthStateChanged(function(user){
var name = document.getElementById("dbusername");
	   var db = firebase.database().ref().child("users/"+user.uid + "/name");
	   db.on ("value", snap => name.innerText = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var name = document.getElementById("username");
	   var db = firebase.database().ref().child("users/"+user.uid + "/name");
	   db.on ("value", snap => name.innerText = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var first = document.getElementById("dbfirstname");
	   var db = firebase.database().ref().child("users/"+user.uid + "/firstname");
	   db.on ("value", snap => first.innerText = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var last = document.getElementById("dblastname");
	   var db = firebase.database().ref().child("users/"+user.uid + "/lastname");
	   db.on ("value", snap => last.innerText = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var address = document.getElementById("dbaddress");
	   var db = firebase.database().ref().child("users/"+user.uid + "/address");
	   db.on ("value", snap => address.innerText = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var city = document.getElementById("dbcity");
	   var db = firebase.database().ref().child("users/"+user.uid + "/city");
	   db.on ("value", snap => city.innerText = snap.val());
});

//The following methods read the users info from the database into the value of the inputs.
firebase.auth().onAuthStateChanged(function(user){
var first = document.getElementById("firstname");
	   var db = firebase.database().ref().child("users/"+user.uid + "/firstname");
	   db.on ("value", snap => first.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var last = document.getElementById("lastname");
	   var db = firebase.database().ref().child("users/"+user.uid + "/lastname");
	   db.on ("value", snap => last.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var address = document.getElementById("address");
	   var db = firebase.database().ref().child("users/"+user.uid + "/address");
	   db.on ("value", snap => address.value = snap.val());
});

firebase.auth().onAuthStateChanged(function(user){
var city = document.getElementById("city");
	   var db = firebase.database().ref().child("users/"+user.uid + "/city");
	   db.on ("value", snap => city.value = snap.val());
});



