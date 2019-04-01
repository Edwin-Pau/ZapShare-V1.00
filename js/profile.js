function editProfile() {
  document.getElementById("summary-background").style.display = "none";
  document.getElementById("summary-background-edit").style.display = "block";
}

function submitChanges() {
  var firebase = app_firebase;
  var firstname = document.getElementById('firstname').value;    

    // for the current user
    // create this user node in the datebase

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("users/"+user.uid).update(
		{
        "name":user.displayName, 
        "email":user.email,
        "firstname":firstname    
        });
    });
    
  document.getElementById("summary-background").style.display = "block";
  document.getElementById("summary-background-edit").style.display = "hidden";
}

document.getElementById("username").innerHTML = "Bob";