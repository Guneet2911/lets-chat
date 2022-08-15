const firebaseConfig = {
      apiKey: "AIzaSyCKBfvQbKmH2Mxff5IsgwEkwwqzpnMJxYc",
      authDomain: "kwitter-acd0b.firebaseapp.com",
      databaseURL: "https://kwitter-acd0b-default-rtdb.firebaseio.com",
      projectId: "kwitter-acd0b",
      storageBucket: "kwitter-acd0b.appspot.com",
      messagingSenderId: "156740836903",
      appId: "1:156740836903:web:436c71c0bc8f51a915b802",
      measurementId: "G-EVDQYT1XG3"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";

      document.getElementById("output").innerHTML +=row;
   
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "chat_page.html";
}

function addRoom()
{ 
      room_name = document.getElementById("room_name").value; 

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
   });

   localStorage.setItem("room_name" , room_name);

   window.location = "chat_page.html";


}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
