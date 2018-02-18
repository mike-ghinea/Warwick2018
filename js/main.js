$(document).ready(function() {
    // Initialize Firebase
    var config = {
        authDomain: "rubberduck-69fdc.firebaseapp.com",
        databaseURL: "https://rubberduck-69fdc.firebaseio.com",
        projectId: "rubberduck-69fdc",
    };
    firebase.initializeApp(config);
    var database = firebase.database();
    var solved = database.ref('numberOfProblemsSolved');
    solved.on('value', data => updateSolved(data.val()));
    function updateSolved(numberOfSolved) {
        $("#numberOfSolved").text(numberOfSolved);
    }

});
