var j =0;

var questions = [{

    question: ,

    answers: [
        { text: , value: "Hulk" },
        { text: , value: "Black Widow"},
        { text: , value:"Vision" },
        { text: , value: "Captin America" }
    ]


},
{
    question: ,
    answers: [
        { text: , value: "Hulk" },
        { text: , value: "Black Widow"},
        { text: , value:"Vision" },
        { text: , value: "Captin America" }
    ]
},
{
    question: ,
    answers: [
        { text: , value: "Hulk" },
        { text: , value: "Black Widow"},
        { text: , value:"Vision" },
        { text: , value: "Captin America" }
    ]
},
{
    question: ,
    answers: [
        { text: , value: "Hulk" },
        { text: , value: "Black Widow"},
        { text: , value:"Vision" },
        { text: , value: "Captin America" }
    ]
},
{
    question: ,

    answers: [
        { text: , value: "Hulk" },
        { text: , value: "Black Widow"},
        { text: , value:"Vision" },
        { text: , value: "Captin America" }
    ]

},
{
    question: ,
    answers: [
        { text: , value: "Hulk" },
        { text: , value: "Black Widow"},
        { text: , value:"Vision" },
        { text: , value: "Captin America" }

    ]
}]
answerBtnEl.forEach(item => {
    item.addEventListener('click', (event) => {

        //
        if (event.target.value == 'Hulk' && j < 5 || j === 5 && event.target.value == 'Hulk') {
           
            // j++
            // getQuestion()
            // answers()
            hulkEl++
            
        }
        else if (event.target.value == 'Black Widow' && j < 5 || j === 5 && event.target.value == 'Black Widow' ) {
            // j++
            // getQuestion()
            // answers()
            blackWidowEl++
           
           }
           else if (event.target.value == 'Vision' && j < 5 || j === 5 && event.target.value == 'Vision' ) {
            // j++
            // getQuestion()
            // answers()
            visionEl++
           
           }
           else if (event.target.value == 'Captin America' && j < 5 || j === 5 && event.target.value == 'Captin America' ) {
            // j++
            // getQuestion()
            // answers()
            captinAmericaEl++
           
           }
          


    })
})

function answers() {

    a1.innerHTML = questions[j].answers[0].text
    a2.innerHTML = questions[j].answers[1].text
    a3.innerHTML = questions[j].answers[2].text
    a4.innerHTML = questions[j].answers[3].text
    
    a1.value = questions[j].answers[0].value
    a2.value = questions[j].answers[1].value
    a3.value = questions[j].answers[2].value
    a4.value = questions[j].answers[3].value
}

function getQuestion() {
    questionEl.innerHTML = questions[j].question
}