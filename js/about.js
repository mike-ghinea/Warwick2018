var config = {
    authDomain: "rubberduck-69fdc.firebaseapp.com",
    databaseURL: "https://rubberduck-69fdc.firebaseio.com",
    projectId: "rubberduck-69fdc",
};

var database;
var refs = { solved: null, notSolved: null};
$(document).ready(function() {
    firebase.initializeApp(config);
    database = firebase.database();
    refs.solved = database.ref('numberOfProblemsSolved');
    refs.notSolved = database.ref('numberOfProblemsNotSolved');
    refs.solved.on('value', data => updateSolved(data.val()));
    refs.notSolved.on('value', data => updateUnsolved(data.val()));
    updateRatio();
    database.ref('aboutQuotes').on('value', data => updateQuotes(data.val()));
    updateRatio();
});

$('img').on('click', function() {
    database.ref('naggingQuotes').on('value', data => updateQuotes(data.val()));
});

var numberOfSolved;
function updateSolved(newNumberOfSolved) {
  numberOfSolved = newNumberOfSolved;
  $("#numberOfSolved").text(numberOfSolved);
  updateRatio();
}

var numberOfUnsolved;
function updateUnsolved(newNumberOfUnsolved) {
    numberOfUnsolved = newNumberOfUnsolved;
    $("#numberOfUnsolved").text(numberOfUnsolved);
    updateRatio();
}

function updateRatio() {
     $("#ratio").text(((numberOfSolved) / (numberOfUnsolved + numberOfSolved)) * 100);
}

var quotes = [];
function updateQuotes(newQuotes) {
    quotes = newQuotes;
    newQuote();
}

function newQuote() {
    var randomIndex = Math.floor(Math.random()*quotes.length);

    var quote = quotes[randomIndex];

    $(".duck-speak").text(quote);

}
