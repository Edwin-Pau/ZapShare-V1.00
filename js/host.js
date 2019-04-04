function editHostDetails() {
  document.getElementById("host-details").style.display = "none";
  document.getElementById("host-details-edit").style.display = "block";
}

function saveHostDetails() {
  var firebase = app_firebase;
  var hostaddress = document.getElementById('dbhostaddress').value;

    // for the current user
    // create this user node in the datebase

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("hosts/" + user.uid).update(
		{
        "address":hostaddress
        });
    });
    document.getElementById("host-details").style.display = "block";
    document.getElementById("host-details-edit").style.display = "none";
    
    firebase.database().ref('/hosts').on('value', function(snapshot) {
    
    // Variables for JSON object and the address string array.    
    var myObject = snapshot.val();
    var addressArr = [];    
    
    // Grabs the address value from each JSON object.    
    for (value in myObject) {
        addressArr.push(myObject[value].address);
    }
    alert(addressArr);    
    });
    
}


