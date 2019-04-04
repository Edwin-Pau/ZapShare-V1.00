(function(){
logoutbutton.addEventListener("click", function(e) {
		var promise = firebase.auth().signOut();
        promise.then(function(){
            window.location.href='index.html';
        });
	});
})();

(function(){
profilebutton.addEventListener("click", function() {
        window.location.href='dashboard.html';
	});
})();
