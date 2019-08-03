 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDVgSz4AycHxgh35J4r8G5pAEwHyFzPhRo",
    authDomain: "train-scheduler-72b84.firebaseapp.com",
    databaseURL: "https://train-scheduler-72b84.firebaseio.com",
    projectId: "train-scheduler-72b84",
    storageBucket: "train-scheduler-72b84.appspot.com",
    messagingSenderId: "690907642728",
    appId: "1:690907642728:web:80dff5e24b8a64bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Create a variable to reference the database
var database = firebase.database();

// Initial Values
var trainName = "";
var destination = "";
var initialTrainTime = "";
var minFrequency = "";


// Capture button click
$("#add-user").on("click", function(event) {
    event.preventDefault();
console.log("train added")

// Store and retrieve most recent user data
trainName = $("#name-input").val().trim();
destination = $("#destination-input").val().trim();
initialTrainTime = $("#time-input").val().trim();
minFrequency = $("#frequency-input").val().trim();

// Code for the push
database.ref().push({

    trainName: trainName,
        destination: destination,
        initialTrainTime: initialTrainTime,
        minFrequency: minFrequency,
        dateAdded: moment().format("MMM Do, YYYY hh:mm:ss")

}); 

}); 
database.ref().on("child_added", function(childSnapshot) {

    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val());
    var trainName = childSnapshot.val().trainName
    var destination = childSnapshot.val().destination
    // var initialTrainTime = childSnapshot.val().initialTrainTime
    var minFrequency = childSnapshot.val().minFrequency
    var nextArrival = childSnapshot.val().nextArrival
    var minutesAway = childSnapshot.val().minutesAway
    // var dateAdded = childSnapshot.val().dateAdded
    $("#train-table > tbody").append(
        $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(destination),
            $("<td>").text(minFrequency),
            $("<td>").text(nextArrival),
            $("<td>").text(minutesAway),

        )
    )


  });