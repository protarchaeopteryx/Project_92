const player1 = localStorage.getItem("p1");
const player2 = localStorage.getItem("p2");

var p1_sc = 0;
var p2_sc = 0;

q_turn = "player1";
a_turn = "player2";

document.getElementById("p1_name").innerHTML = player1;
document.getElementById("p1_score").innerHTML = p1_sc;
document.getElementById("p2_name").innerHTML = player2;
document.getElementById("p2_score").innerHTML = p2_sc;
document.getElementById("q_turner").innerHTML = player1;
document.getElementById("a_turner").innerHTML = player2;
function sent() {
    num1 = document.getElementById("inputn_1").value;
    num2 = document.getElementById("inputn_2").value;
    ans = parseInt(num1) * parseInt(num2);
    ques = "<h3 id='end_holder'>" + num1 + "x" + num2 + "</h3>";
    input = "<br><input id='get_end_txt'>";
    btn = "<br><br><button onclick='check()'>Check</button>";
    rows = ques + input + btn;
    document.getElementById("output_holder").innerHTML = rows;
    document.getElementById("inputn_1").innerHTML = "";
    document.getElementById("inputn_2").innerHTML = "";
}
function check() {
	user_ans = parseInt(document.getElementById('get_end_txt').value);
	if(user_ans == ans)	{
        if(q_turn == "player1") {
			p1_sc = p1_sc + 1;
		    document.getElementById("p1_score").innerHTML = p1_sc;
            q_turn = "player1";
            document.getElementById("a_turner").innerHTML = player1;
            a_turn = "player2";
            document.getElementById("q_turner").innerHTML = player2;
		}else if(q_turn == "player2") {
			p2_sc = p2_sc + 1;
		    document.getElementById("p2_score").innerHTML = p2_sc;
            q_turn = "player2";
            document.getElementById("a_turner").innerHTML = player2;
            a_turn = "player1";
            document.getElementById("q_turner").innerHTML = player1;
		}
	}
    if(q_turn == "player1") {
        document.getElementById("a_turner").innerHTML = player1;
        a_turn = "player2";
        document.getElementById("q_turner").innerHTML = player2;
    }else if(q_turn == "player2") {
        q_turn = "player2";
        document.getElementById("a_turner").innerHTML = player2;
        a_turn = "player1";
        document.getElementById("q_turner").innerHTML = player1;
    }
    document.getElementById("output_holder").innerHTML = "";
    document.getElementById("inputn_1").innerHTML = "";
    document.getElementById("inputn_2").innerHTML = "";
}

