var firebaseConfig = {
    apiKey: "AIzaSyBge-pO-GoVl3l3Q3dkicLDZ0xXCS_fd_w",
    authDomain: "project---93-157a6.firebaseapp.com",
    projectId: "project---93-157a6",
    storageBucket: "project---93-157a6.appspot.com",
    messagingSenderId: "208167167502",
    appId: "1:208167167502:web:36cf7407cfdc1626f4be5f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");
  document.getElementById("userName").innerHTML = "Welcome " + userName + "!";
  
  //ADD YOUR FIREBASE LINKS HERE
  
  function getData() {
        firebase.database().ref("/").on('value', function (snapshot) {
              document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                    childKey = childSnapshot.key;
                    Room_names = childKey;
                    //Start code
                    console.log("Room Name - " + Room_names);
                    row = "<div class='roomName' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
                    document.getElementById("output").innerHTML += row;
              });
        });
  }
  getData();
  
  function addRoom() {
        roomName = document.getElementById("roomName").value;
        firebase.database().ref("/").child(roomName).update({
              purpose:"adding room name"
        });
  
        localStorage.setItem("roomName", roomName);
        window.location("kwitter_page.html");
  }
  
  function redirectToRoomName(name) {
        console.log(name);
        localStorage.setItem("roomName", roomName);
        window.location("kwitter_page.html");
  }
  
  function logOut() {
        localStorage.removeItem("userName");
        localStorage.removeItem("roomName");
        window.location = "index.html";
  }