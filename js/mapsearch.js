firebase.auth().onAuthStateChanged(function(user){
    
var db = firebase.database().ref().child("hosts");
	   db.once('value').then(function(snapshot) {
           snapshot.forEach(function(childSnapshot) {
               let jsonItem = childSnapshot.val();
               let retreivedAddress = jsonItem['address']
               if (retreivedAddress === "1277 Lynn Valley Rd, North Vancouver") {
                   let retreivedName = jsonItem['name'];
                   console.log(retreivedName);
               }
           })
       })
});




