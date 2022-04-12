const quizData= [
    {
        numb:1,
        question: "What is one-half of a single foot?",
        a: "6 Inches",
        b: "12 Inches",
        c: "15 Inches",
        d: "18 Inches",
        correct:"a"
    },
    {   
        numb:2,
        question: "Which are like fractions?",
        a: "1.8 & 4",
        b: "1/100 & 9/4",
        c: "2/3 & 1/3",
        d: "none of these",
        correct:"c"
    },
    {
        numb:3,
        question: "What is the total of all the internal angles of a triangle?",
        a: "90",
        b: "180",
        c: "360",
        d: "60",
        correct:"b"
    },
    {
        numb:4,
        question: "How many vertices are there on a cube?",
        a: "8",
        b: "4",
        c: "6",
        d: "12",
        correct:"a"
    },
    {
        numb:5,
        question: "What is the highest common factor of 30 and 132?",
        a: "8",
        b: "6",
        c: "12",
        d: "9",
        correct:"b"
    }
]

const quiz1=document.getElementById('quiz1')
const answerEls =document.querySelectorAll('.answer')
const questionNumber = document.getElementById("numb")
const questionEl = document.getElementById("question")
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const nextBtn = document.getElementById('nxtbtn')
const prevBtn = document.getElementById('prvbtn')
const rslt = document.getElementById('result_box1')
const rslt1 = document.getElementById('result_box2')
const pgbar= document.getElementById('prgsbar')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswer()
    rslt.innerHTML = `<span>
            <p>${currentQuiz}</p>
            
            <p>of</p>
            
            <p>${quizData.length}</p>
            
            <p>questions</p>
        </span>`
    
    const currentQuizData = quizData[currentQuiz]
    
    questionNumber.innerText = currentQuizData.numb
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswer(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function  getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

nextBtn.addEventListener("click" , () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++
        
        if(currentQuiz < quizData.length) {
        
            loadQuiz()
        }

        pgbar.style.width= (currentQuiz/quizData.length) * 100 + "%"
     
    }
})


function func(){
    rslt.innerHTML = `
    <p> you scored ${score}/${quizData.length}</p>
    `
    nextBtn.style.display="none"
    
    prevBtn.style.display="none"     

}




