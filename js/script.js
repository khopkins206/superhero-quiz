var j = 0;
var hulkEl = 0
var captinAmericaEl = 0
var visionEl = 0
var spiderManEl = 0
var blackWidowEl = 0
var questionEl = document.getElementById('quizQ')

var a1 = document.getElementById('answer1')
var a2 = document.getElementById('answer2')
var a3 = document.getElementById('answer3')
var a4 = document.getElementById('answer4')
var a5 = document.getElementById('answer5')
var answerBtnEl = document.querySelectorAll('.answer')
var resultsBtn = document.getElementById('resultsBtn')

var questions = [{

    question: 'How do you foster a positive work environment?',
    answers: [
        { text: 'Smashing things and yelling', value: "Hulk" },
        { text: 'Giving gifts and incentives', value: "Black Widow" },
        { text: 'Do everything by your self', value: "Vision" },
        { text: 'Talking softly and calmly', value: "Captin America" },
        { text: 'Sitting back and just watching', value: "Spider Man" }
    ]

},
{


    question: 'What leadership style best defines you?',
    answers: [
        { text: 'Assertive', value: "Hulk" },
        { text: 'Strategic', value: "Black Widow" },
        { text: 'Authorative', value: "Vision" },
        { text: 'Coaching', value: "Captin America" },
        { text: 'Empathetic', value: 'Spider Man' }
    ]
},
{

    question: 'There are 30 people on a train that\'s about to run in to a wall, how do you stop it?',
    answers: [
        { text: 'try and throw the train off the tracks', value: "Hulk" },
        { text: 'try and find a way to hack the train system and stop it', value: "Black Widow" },
        { text: 'stand in front of train and try and deflect it', value: "Vision" },
        { text: 'try to get to the front and pull the breaks', value: "Captin America" },
        { text: 'try to rescue a lot of people at a time', value: 'Spider Man' }
    ]
},
{

    question: 'When you\’re at a buffet, how many trays of food do you start off with?',
    answers: [
        { text: 'The entire buffet', value: "Hulk" },
        { text: 'Ew, eat at a buffet?', value: "Black Widow" },
        { text: 'Food?', value: "Vision" },
        { text: 'We didn\'t have thoes back in my day', value: "Captin America" },
        { text: 'Multiple Plates', value: 'Spider Man' }
    ]
},
{

    question: 'How well do you handle stress?',

    answers: [
        { text: 'I do not handle it well', value: "Hulk" },
        { text: 'Ignore it / Push it down', value: "Black Widow" },
        { text: 'Multitasker, thrives in stress', value: "Vision" },
        { text: 'Use it to fuel me', value: "Captin America" },
        { text: 'Laugh through it', value: 'Spider Man' }
    ]

},
{

    question: 'What will you do if someone is not treated fairly?',
    answers: [
        { text: 'Resolve it your way ', value: "Hulk" },
        { text: 'Seek amicable resolution', value: "Black Widow" },
        { text: 'Make the other person apologize', value: "Vision" },
        { text: 'Make Peace', value: "Captin America" },
        { text: 'Seek revenge', value: 'Spider Man' }

    ]
}]

getQuestion()
answers()
answerBtnEl.forEach(item => {

    item.addEventListener('click', (event) => {
        

        if (event.target.value == 'Hulk' && j < 5) {

            j++
            getQuestion()
            answers()
            hulkEl++

        }
        else if (j === 5 && event.target.value == 'Hulk') {
            hulkEl++
            show( computeAnswer())
           
        }
        else if (event.target.value == 'Black Widow' && j < 5) {
            j++
            getQuestion()
            answers()
            blackWidowEl++

        }
        else if (j === 5 && event.target.value == 'Black Widow') {
            blackWidowEl++
            show(computeAnswer())
            
        }
        else if (event.target.value == 'Vision' && j < 5) {
            j++
            getQuestion()
            answers()
            visionEl++

        }
        else if (j === 5 && event.target.value == 'Vision') {
            visionEl++
            show(computeAnswer())
            
        }
        else if (event.target.value == 'Captin America' && j < 5) {
            j++
            getQuestion()
            answers()
            captinAmericaEl++

        }
        else if (j === 5 && event.target.value == 'Captin America') {
            captinAmericaEl++
            show(computeAnswer())
            
        }
        else if (j < 5 && event.target.value == 'Spider Man') {

            j++
            getQuestion()
            answers()
            spiderManEl++
        }
        else if (j === 5 && event.target.value == 'Spider Man') {
            spiderManEl++
            show(computeAnswer())
            
        }



    })
})

function answers() {

    a1.innerHTML = questions[j].answers[0].text
    a2.innerHTML = questions[j].answers[1].text
    a3.innerHTML = questions[j].answers[2].text
    a4.innerHTML = questions[j].answers[3].text
    a5.innerHTML = questions[j].answers[4].text

    a1.value = questions[j].answers[0].value
    a2.value = questions[j].answers[1].value
    a3.value = questions[j].answers[2].value
    a4.value = questions[j].answers[3].value
    a5.value = questions[j].answers[4].value
}

function getQuestion() {
    questionEl.innerHTML = questions[j].question
}


function show(g) {


    resultsBtn.classList.remove('hideBtn')
    resultsBtn.classList.add('showBtn')

    resultsBtn.setAttribute('href', 'results.html?answer=' + g)
    localStorage.setItem("superheroName", g)


}
function computeAnswer() {

    var characters = ['Hulk','Captain America','Vision','Spider Man', 'Black Widow']
    var scores = [hulkEl, captinAmericaEl, visionEl, spiderManEl, blackWidowEl]



    var currentHighestScore = 0
    var currentHighestIndex = 0

    for (var f = 0; f < scores.length; f++) {


        //compare the first number to the last highest number

        if (currentHighestScore < scores[f]) {

            //if it is greater than the highest score store it and the index of it 
            currentHighestScore = scores[f]
            currentHighestIndex = f
        }



    }

    console.log(currentHighestScore)
    console.log(currentHighestIndex)
    console.log(scores)
    console.log(characters[currentHighestIndex])
    return characters[currentHighestIndex];
}
