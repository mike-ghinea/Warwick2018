var config = {
    authDomain: "rubberduck-69fdc.firebaseapp.com",
    databaseURL: "https://rubberduck-69fdc.firebaseio.com",
    projectId: "rubberduck-69fdc",
};

var database;
var refs = { solved: null, notSolved: null };
$(document).ready(function() {
    firebase.initializeApp(config);
    database = firebase.database();
    refs.solved = database.ref('numberOfProblemsSolved');
    refs.notSolved = database.ref('numberOfProblemsNotSolved');
    refs.solved.on('value', data => updateSolved(data.val()));
});

function updateSolved(numberOfSolved) {
    $("#numberOfSolved").text(numberOfSolved);
}

function incrementRef(ref) {
    ref.on('value', data => {
        var oldNumber = data.val();
        ref.set(oldNumber+1);
    })
}

function yes() {
    incrementRef(refs.solved);
}

function no() {
    incrementRef(refs.notSolved);
}
