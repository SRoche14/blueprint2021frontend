const url1 = 'http://127.0.0.1:5000/getQs'
var total;
fetch(url1)
.then(response => response.json())  
.then(json => {
    total = json["data"];
    console.log(total);
    window.onload = function() {
        var questions = total[0];
        var answers = total[1];
        console.log(questions);
        for (var i = 0; i < questions.length; i++) {
            console.log(questions[i]);
            console.log(answers[i]);
            var div = document.createElement("div");
        
            var q = document.createElement("H2");
            q.innerHTML = "Question: ";
            div.appendChild(q);
        
            var ques = document.createElement("P");
            ques.innerHTML = questions[i];
            div.appendChild(ques);
        
            var a = document.createElement("H2");
            a.innerHTML = "Answer: ";
            div.appendChild(a);
        
            var txtArea = document.createElement("TEXTAREA");
            div.appendChild(txtArea);
        
            //actual answer that is hidden unless you click the show answers
            var div2 = document.createElement("div");
            div2.classList.add("Answer");
        
            var a2 = document.createElement("H2");
            a2.innerHTML = "Correct Answer: ";
            div2.appendChild(a2);
        
            var correctA = document.createElement("P");
            correctA.innerHTML = answers[i];
            div2.appendChild(correctA);
        
            div.classList.add("questionbox");
            div2.classList.add("questionbox");
            div2.classList.add("questionbox2");
            div.appendChild(div2);
            
        
            var place = document.getElementById('section1');
            place.appendChild(div);
        }

        document.getElementById("answerbtn").addEventListener('click', show);

        function show() {
            var correct = 0;
            var wrong = 0;
            an = document.getElementsByClassName("Answer");
            for (var i=0; i< an.length; i++){
                if (an[i].style.display == "block") {
                    an[i].style.display = "none";
                    an[i].style.visibility = "hidden";
                    document.getElementsByTagName("textarea")[i].style.border = "none";
                } else {
                    an[i].style.display = "block";
                    an[i].style.visibility = "visible";
                    if (document.getElementsByTagName("textarea")[i].value == answers[i]){
                        document.getElementsByTagName("textarea")[i].style.border = "5px solid green";
                        correct += 1;
                    } else {
                        document.getElementsByTagName("textarea")[i].style.border = "5px solid red";
                        wrong += 1;
                        // a formal regulatory framework
                    }
                    score = document.createElement("H1");
                    var t = correct+wrong;
                    score.innerHTML = "You got " + correct + "/" + t + " questions correct!";
                    score.classList.add("finalScore");
                }
            }
            document.body.appendChild(score);
        }
    }

  });

// console.log(document.getElementById("output"));
// console.log(total);


// window.onload = function() {
// total = [["q1", "q2"], ["a1", "a2"]];

// var questions = total[0];
// var answers = total[1];
// for (var i = 0; i < questions.length; i++) {
//     console.log(questions[i]);
//     console.log(answers[i]);
//     var div = document.createElement("div");

//     var q = document.createElement("H2");
//     q.innerHTML = "Question: ";
//     div.appendChild(q);

//     var ques = document.createElement("P");
//     ques.innerHTML = questions[i];
//     div.appendChild(ques);

//     var a = document.createElement("H2");
//     a.innerHTML = "Answer: ";
//     div.appendChild(a);

//     var txtArea = document.createElement("TEXTAREA");
//     div.appendChild(txtArea);

//     //actual answer that is hidden unless you click the show answers
//     var div2 = document.createElement("div");
//     div2.classList.add("Answer");

//     var a2 = document.createElement("H2");
//     a2.innerHTML = "Correct Answer: ";
//     div2.appendChild(a2);

//     var correctA = document.createElement("P");
//     correctA.innerHTML = answers[i];
//     div2.appendChild(correctA);

//     div.classList.add("questionbox");
//     div2.classList.add("questionbox");
//       div2.classList.add("questionbox2");
//     div.appendChild(div2);
    

//     var place = document.getElementById('section1');
//     place.appendChild(div);
// }}
