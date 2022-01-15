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