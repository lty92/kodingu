function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
		showScore();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScore() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("score");
    element.innerHTML = "Current Score : " + quiz.score;
}

function showScores() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("showScores");
    element.innerHTML = "Current Score " + currentScore + " of" + quiz.questions.length;
}

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}
function skipQuestion(){
  quiz.questionIndex--;
  quiz.score += 0;
   populate();
}

// create questions
var Question = [
	new Question(
    "Solve the following simultaneous equations using the substitution method. <br> <i>y</i> = 2<i><i>x</i></i> </br> <br> 7<i><i>x</i></i> - 2<i><i>y</i></i> = 15 </br>", [
      "<br>7<i><i>x</i></i> - 2(2<i><i>x</i></i>) = 15</br><br>7<i><i>x</i></i> - 4<i><i>x</i></i> = 13</br><br>3<i><i>x</i></i> = 13</br> <br> <i><i>x</i></i> = 13 / 3 </br><br><i><i>y</i></i> = 2(5)</br><br><i><i>y</i></i> = 5</br>",
      "<br>7<i><i>x</i></i> - 2(2<i><i>x</i></i>) = 15</br><br>7<i><i>x</i></i> - 4<i><i>x</i></i> = 10</br> <br>3<i><i>x</i></i> = 10</br><br> <i><i>x</i></i> = 10 / 3</br><br><i><i>y</i></i>=2(5)</br> <br><i><i>y</i></i> = 9</br>",
      "<br>7<i><i>x</i></i> - 2(2<i><i>x</i></i>) = 15</br> <br>7<i><i>x</i></i> - 4<i><i>x</i></i> = 15</br> <br>3<i><i>x</i></i> = 15</br>  <br><i><i>x</i></i> = 5</br> <br><i>y</i> =2(5)</br> <br><i><i>y</i></i> = 10</br>",
      "<br>7<i>x</i> - 2(2<i>x</i>) = 15</br> <br>7<i>x</i> - 4<i>x</i> = 19</br> <br>3<i>x</i> = 19</br> <br><i>x</i> = 19 / 3</br><br><i>y</i> = 2(5)</br> <br><i><i>y</i></i> = 10</br>"
    ],
      "<br>7<i><i>x</i></i> - 2(2<i><i>x</i></i>) = 15</br> <br>7<i><i>x</i></i> - 4<i><i>x</i></i> = 15</br> <br>3<i><i>x</i></i> = 15</br>  <br><i><i>x</i></i> = 5</br> <br><i>y</i> =2(5)</br> <br><i><i>y</i></i> = 10</br>"
  ),
	new Question(
    "Solve the following simultaneous equations using the substitution method.<br> <i><i>x</i></i> + <i><i>y</i></i> = 13</br><br><i><i>x</i></i> - <i><i>y</i></i> = 7</br>", [
      "<br> <i><i>x</i></i> = <i><i>y</i></i> + 7</br><br>(<i><i>y</i></i> + 7) + <i><i>y</i></i> = 13</br><br>2<i><i>y</i></i> = 6</br><br><i><i>y</i></i> = 3</br><br><i><i>x</i></i> = 3 + 7</br><br><i><i>x</i></i> = 10</br>",
      "<br> <i><i>x</i></i> = <i><i>y</i></i> + 7</br><br>(<i><i>y</i></i> + 7) + <i><i>y</i></i> = 13</br><br>2<i><i>y</i></i> = 6</br><br><i>y</i> = 2</br><br><i>x</i> = 2 + 7</br><br><i>x</i> = 12</br>",
      "<br> <i><i>x</i></i> = <i><i>y</i></i> + 7</br><br>(<i><i>y</i></i> + 9) + <i><i>y</i></i> = 13</br><br>2<i>y</i> = 6</br><br><i>y</i> = 3</br><br><i>x</i> = 3 + 9</br><br><i>x</i> = 12</br>",
      "<br> <i>x</i> = <i>y</i> + 7</br><br>(<i>y</i> + 7) + <i>y</i> = 12</br><br>2<i>y</i> = 10</br><br><i>y</i> = 5</br><br><i>x</i> = 5 + 7</br><br><i>x</i> = 12</br>"
    ],
      "<br> <i><i>x</i></i> = <i><i>y</i></i> + 7</br><br>(<i><i>y</i></i> + 7) + <i><i>y</i></i> = 13</br><br>2<i><i>y</i></i> = 6</br><br><i><i>y</i></i> = 3</br><br><i><i>x</i></i> = 3 + 7</br><br><i><i>x</i></i> = 10</br>"
  ),
	new Question(
    "The prices of a book and a pen are $<i><i>x</i></i> and $<i><i>y</i></i> respectivel<i>y</i>. <br>(a) The total price of 3 books and 1 pen is $17. Form an equation in terms of <i><i>x</i></i> and <i><i>y</i></i>.</br>", [
      "<br>3<i>x</i> + <i>y</i> = 17</br>",
      "<br><i>x</i> + 3<i>y</i> = 17</br>",
      "<br>2<i>x</i> + <i>y</i> = 17</br>",
      "<br><i>x</i> + 2<i>y</i> = 17</br>"
    ],
      "<br>3<i>x</i> + <i>y</i> = 17</br>"
  ),
	new Question(
    "(b)The total price of 4 books and 5 pens is $30. Form another equation in <i>x</i> and <i>y</i>.", [
      "<br>4<i>x</i> + 5<i>y</i> = 47</br>",
      "<br>5<i>x</i> + 4<i>y</i> = 47</br>",
      "<br>5<i>x</i> + 4<i>y</i> = 30</br>",
      "<br>4<i>x</i> + 5<i>y</i> = 30</br>"
    ],
      "<br>4<i>x</i> + 5<i>y</i> = 30</br>"
  ),
	new Question(
    "(c)B<i>y</i> solving the simultaneous equations in (a) and (b),find the price of the book and the price of the pen.", [
      "<br><i>y</i> = 17 - 3<i>x</i></br><br>4<i>x</i> + 5(17-3<i>x</i>) = 30</br><br>-11<i>x</i> = 55</br><br><i>x</i>=5</br><br><i>y</i> = 17 - 3(5)</br><br><i>y</i> = 2</br>",
      "<br><i>y</i> = 17 - 3<i>x</i></br><br>4<i>x</i> + 5(17-3<i>x</i>) = 30</br><br>-11<i>x</i> = -55</br><br><i>x</i>=5</br><br><i>y</i> = 17 - 3(5)</br><br><i>y</i> = 32</br>",
      "<br><i>y</i> = 17 - 3<i>x</i></br><br>4<i>x</i> + 5(17-3<i>x</i>) = 30</br><br>-11<i>x</i> = -55</br><br><i>x</i>=5</br><br><i>y</i> = 17 - 3(5)</br><br><i>y</i> = 2</br>",
      "<br><i>y</i> = 17 - 3<i>x</i></br><br>4<i>x</i> + 5(17+3<i>x</i>) = 45</br><br>-11<i>x</i> = -55</br><br><i>x</i>=5</br><br><i>y</i> = 17 - 3(5)</br><br><i>y</i> = 2</br>"
    ],
      "<br><i>y</i> = 17 - 3<i>x</i></br><br>4<i>x</i> + 5(17-3<i>x</i>) = 30</br><br>-11<i>x</i> = -55</br><br><i>x</i>=5</br><br><i>y</i> = 17 - 3(5)</br><br><i>y</i> = 2</br>"
  ),
];

// create quiz
var quiz=new Quiz (Question);

// display quiz
populate();
