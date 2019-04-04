//Function that assigns user name and email when they sign up.
(function(){

    var firebase = app_firebase;

   

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("users/"+user.uid).update(
		{
        "name":user.displayName, 
         "email":user.email
        });
    });
})()
