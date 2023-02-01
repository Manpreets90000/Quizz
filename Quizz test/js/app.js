const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Json Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript Launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "npne of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Json Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let index= 0;
let correct=0, incorret=0, total= quizData.length;
let questionBox= document.getElementById("questionBox");
let allInputs= document.getElementById("input [type='radio']")
const loadQuestion = () => {
    if (total === indxe) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementBySibling.innerHTML = data.a 
    allInputs[1].nextElementBySibling.innerHTML = data.b
    allInputs[2].nextElementBySibling.innerHTML = data.c
    allInputs[3].nextElementBySibling.innerHTML = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function () {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans=== data.correct) {
            correct++;
        } else {
            incorret++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    document.getElementsByClassName("container")[0].innerHTML = `<div class="col"><h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>`
}
loadQuestion(index);