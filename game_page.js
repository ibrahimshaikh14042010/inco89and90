player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_name+":";
document.getElementById("player2_score").innerHTML=player2_name+":";

document.getElementById("player1_question").innerHTML=player1_name+":";
document.getElementById("player2_answer").innerHTML=player2_name+":";



function send()
{
    number1=document.GetElementById("number1").value;
        number2=document.GetElementById("number2").value;
        actual_answer=parseInt(number1)*parseInt(number2);

        function_number<= <"h4">+number1+"x"+number2+"</h4>";
        input_box="<br>Answer:<input type='text' id=input_check_box'>";
         check_button="<br<br><br><button class='btn btn-info' onclick=check()'><check</button>";
         
}

