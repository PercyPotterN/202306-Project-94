
const firebaseConfig = {
      apiKey: "AIzaSyDEvY4RFsg2bDL3x8nAdt4_QeqcVSm2DDw",
      authDomain: "letschat-64477.firebaseapp.com",
      projectId: "letschat-64477",
      storageBucket: "letschat-64477.appspot.com",
      messagingSenderId: "157146134724",
      appId: "1:157146134724:web:43a2fc31843712075fb191",
      measurementId: "G-JPQSM512RG"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    var username = localStorage.getItem("Username");
document.getElementById("Welcome").innerHTML = "Welcome " + username + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
