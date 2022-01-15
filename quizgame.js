
player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");

player1score = 0;
player2score = 0;

console.log(player1name);
console.log(player2name);
console.log(player1score);
console.log(player2score);

document.getElementById("player1_name").innerHTML = player1name + " : ";

document.getElementById("player2_name").innerHTML = player2name + " : ";

document.getElementById("player1_score").innerHTML = player1score;

document.getElementById("player2_score").innerHTML = player2score;

document.getElementById("questionturn").innerHTML = "Question Turn - " + player1name;

document.getElementById("answerturn").innerHTML = "Answer Turn - " + player2name;

function send() {
    number1 = document.getElementById("numberone").value;
    number2 = document.getElementById("numbertwo").value;
    actual_answer = parseInt(number1) * parseInt (number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'><br><br>";
    check_button = "<br<br><button onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("numberone").value = "";
    document.getElementById("numbertwo").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer) {
        if(answer_turn = "player1") {
            update_player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }

        else {

            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;

        }
        
        if(questionturn == "player1") {

            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2name;

        }
        else {
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
        }

    }
}