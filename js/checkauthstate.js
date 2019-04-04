(function(){

// Declaring variables for each of the button elements on the page.
var user = firebase.auth().currentUser;
let profilebutton = document.getElementById('profilebutton');    
let loginbutton = document.getElementById('loginbutton');
let signupbutton = document.getElementById('signupbutton');
let logoutbutton = document.getElementById('logoutbutton');  

// We check the auth state of the user, if user is logged in, then the profile 
// button and log out button will be visible to the user. If the user is not
// logged in, then the sign up and log in buttons will be visible.
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    loginbutton.style.display = "none";
    signupbutton.style.display = "none";
    logoutbutton.style.display = "inline";
    profilebutton.style.display = "inline";
  } else {
    loginbutton.style.display = "inline";
    signupbutton.style.display = "inline";
    logoutbutton.style.display = "none";
    profilebutton.style.display = "none";
  }
})
})();