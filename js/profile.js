function editProfile() {
  document.getElementById("summary-background").style.display = "none";
  document.getElementById("summary-background-edit").style.display = "block";
}

function submitChanges() {
  updateProfile();
  document.getElementById("summary-background").style.display = "block";
  document.getElementById("summary-background-edit").style.display = "hidden";
}

function updateProfile(){
    var firebase = app_firebase;
    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("users/"+user.uid).update(
		{
        name:firstName, 
        email:user.email
        });
    });
    
};