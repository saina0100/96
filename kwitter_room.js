const firebaseConfig = {
      apiKey: "AIzaSyAc6TXvkpijmBVM4uSOZLzl_peVab0Mp4k",
      authDomain: "kwitter1-87c03.firebaseapp.com",
      databaseURL: "https://kwitter1-87c03-default-rtdb.firebaseio.com",
      projectId: "kwitter1-87c03",
      storageBucket: "kwitter1-87c03.appspot.com",
      messagingSenderId: "56790296141",
      appId: "1:56790296141:web:7ca0113c021cafcedc9e04"
    };
    
    // Initialize Firebase
    
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome  "+user_name;
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}