// This function logs out the user and redirects them to the home page.
(function(){
logoutbutton.addEventListener("click", function(e) {
		var promise = firebase.auth().signOut();
        promise.then(function(){
            window.location.href='index.html';
        });
	});
})();

// This function redirects the user to the dashboard html page. 
(function(){
profilebutton.addEventListener("click", function() {
        window.location.href='dashboard.html';
	});
})();
