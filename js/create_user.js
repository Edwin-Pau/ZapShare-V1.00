(function(){

    var firebase = app_firebase;
    var firstName = document.getElementById("firstName").value;
    // for the current user
    // create this user node in the datebase

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("users/"+user.uid).update(
		{
        "name":firstName, 
         "email":user.email
        });
    });
});

