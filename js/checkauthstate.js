(function(){

var user = firebase.auth().currentUser;
let profilebutton = document.getElementById('profilebutton');    
let loginbutton = document.getElementById('loginbutton');
let signupbutton = document.getElementById('signupbutton');
let logoutbutton = document.getElementById('logoutbutton');  

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    loginbutton.style.display = "none";
    signupbutton.style.display = "none";
    logoutbutton.style.display = "inline";
    profilebutton.style.display = "inline";  
    alert('User is logged in. (placeholder alert for testing)');
  } else {
    loginbutton.style.display = "inline";
    signupbutton.style.display = "inline";
    logoutbutton.style.display = "none";
    profilebutton.style.display = "none";  
    alert('User is logged out. (placeholder alert for testing)');
  }
})
})();