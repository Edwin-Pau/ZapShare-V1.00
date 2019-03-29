function updateProfile(){
    var firebase = app_firebase;
    var database = firebase.database();
    function myFunction(user){
        firebase.database().ref("users/"+user.uid).update(
		{
         "name":document.getElementById("firstname").value, 
        });
    };
    
};

function editProfile() {
  document.getElementById("summary-background").style.display = "none";
  document.getElementById("summary-background-edit").style.display = "block";
};

function submitChanges() {
  updateProfile();
  document.getElementById("summary-background").style.display = "block";
  document.getElementById("summary-background-edit").style.display = "hidden";
};

