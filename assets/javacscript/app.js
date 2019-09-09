// Declare variables
var pos = 0, quiz, status, question, choice, choices, chA, chB, chC, correct = 0;
// Questions/answers array
var timeLeft = true;
var clock = document.getElementById("timer");
var questions = [
    ["In what year did the first Super Mario Bros. game release?", "1980", "1985", "1983", "B"], 
    ["What planet planet is Kirby from?", "Planet Popstar", "Planet Earthfall", "Planet Frostak", "A"],
    ["What is the name of Sonic The Hedgehog's sidekick?", "Knuckles", "Miles", "Tails", "C"],
    ["What species is Donkey Kong?", "Orangutan", "Gorilla", "Monkey", "B"],
    ["How many dots are on a Pac-Man board?", "225", "275", "240", "C"]
];

var isGuess = false;

function _(x) {
    return document.getElementById(x);
}

// Populate a question function
function renderQuestion() {
    quiz = _("quiz");
    // Grades the quiz
    if (pos >= questions.length) {
        quiz.innerHTML = "<h2>You got " + correct + " of " + questions.length + " Questions Correct!</h2>";
        _("status").innerHTML = "Quiz Complete";
        // Resets score
        pos = 0;
        correct = 0;
        return false;
    }

    _("status").innerHTML = "Question "+(pos+1)+" of " + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    quiz.innerHTML = "<h3>"+question+"</h3>";
    quiz.innerHTML += "<input type = 'radio' name = 'choices' value = 'A'> "+chA+"<br>";
    quiz.innerHTML += "<input type = 'radio' name = 'choices' value = 'B'> "+chB+"<br>";
    quiz.innerHTML += "<input type = 'radio' name = 'choices' value = 'C'> "+chC+"<br><br>";
    quiz.innerHTML += "<button = onclick = 'checkAnswer()' >Submit</button>";
    isGuess = false;
}
// Check answer function
function checkAnswer() {
    isGuess = true;
    choices = document.getElementsByName("choices");
    // For loop
    for (var i = 0; i < choices.length; i++) {
    // If statment checking users answer
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    // Checks to see if the answer is correct
    if(choice == questions[pos][4]){
        correct++;
    }
    pos++;
    renderQuestion();
}
// Calling the page to generate a question on load
window.addEventListener("load", renderQuestion, false);
