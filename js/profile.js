function editProfile() {
  document.getElementById("summary-background").style.display = "none";
  document.getElementById("summary-background-edit").style.display = "block";
}

function submitChanges() {
  var firebase = app_firebase;
  var firstname = document.getElementById('firstname').value;    
  var lastname = document.getElementById('lastname').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;

    // for the current user
    // create this user node in the datebase

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
  document.getElementById("summary-background-edit").style.display = "hidden";
}
