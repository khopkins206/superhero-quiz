var j =0;
var hulkEl=0
var captinAmericaEl =0
var visionEl=0
var spiderManEl = 0
var blackWidowEl =0
var questionEl = document.getElementById('quizQ')
var a1 = document.getElementById('answer1')
var a2 = document.getElementById('answer2')
var a3 = document.getElementById('answer3')
var a4 = document.getElementById('answer4')
var a5 = document.getElementById('answer5')
var answerBtnEl = document.querySelectorAll('.answer')

var questions = [{
    
  question: 'How do you foster a positive work environment?',
    answers: [
        { text: 'Smashing things and yelling', value: "Hulk" },
        { text: 'Giving gifts and incentives', value: "Black Widow"},
        { text: 'Do everything by your self', value:"Vision" },
        { text: 'Talking softly and calmly', value: "Captin America" },
        { text: 'Sitting back and just watching', value:"Spider Man"}
    ]

},
{
    

    question: 'What leadership style best defines you?',
    answers: [
        { text: 'Assertive', value: "Hulk" },
        { text: 'Strategic', value: "Black Widow"},
        { text: 'Authorative', value:"Vision" },
        { text: 'Coaching', value: "Captin America" },
        {text:'Empathetic' ,value:'Spider Man'}
    ]
},
{
 
    question:'There is 30 people in a train about to run in to a wall, how do you top it?' ,
    answers: [
        { text: 'try and throw the train off the tracks', value: "Hulk" },
        { text: 'try and find a way to hack the train system and stop it', value: "Black Widow"},
        { text: 'stand in front of train and try and deflect it', value:"Vision" },
        { text: 'try to get to the front and pull the breaks', value: "Captin America" },
        {text: 'try and rescue loads of people at a time', value:'Spider Man'}
    ]
},
{
    
    question: 'When you\’re at a buffet, how many trays of food do you start off with?',
    answers: [
        { text: 'The entire buffet', value: "Hulk" },
        { text: 'Ew, eat at a buffet?', value: "Black Widow"},
        { text: 'Food?', value:"Vision" },
        { text: 'We didn\'t have thoes back in my day', value: "Captin America" },
        {text: 'Multiple Plates',value:'Spider Man'}
    ]
},
{

    question:'How well do you handle stress?' ,

    answers: [
        { text: 'I do not handle it well', value: "Hulk" },
        { text: 'Ignore it / Push it down', value: "Black Widow"},
        { text: 'Multitasker, thrives in stress', value:"Vision" },
        { text: 'Use it to fuel me', value: "Captin America" },
        {text: 'Laugh through it', value: 'Spider Man'}
    ]

},
{

    question: 'What will you do if someone not treated fairly',
    answers: [
        { text: 'Resolve it your way ', value: "Hulk" },
        { text: 'Seek amicable resolution', value: "Black Widow"},
        { text: 'make the other person apologies', value:"Vision" },
        { text: 'Make Peace', value: "Captin America" },
        { text: 'Seek revenge', value: 'Spider Man'}

    ]
}]
getQuestion()
answers()
answerBtnEl.forEach(item => {
    item.addEventListener('click', (event) => {

        
        if (event.target.value == 'Hulk' && j < 5 ) {
           
            j++
            getQuestion()
            answers()
            hulkEl++
            
        }
        else if( j === 5 && event.target.value == 'Hulk'){
            hulkEl++
        }
        else if (event.target.value == 'Black Widow' && j < 5 || j === 5 && event.target.value == 'Black Widow' ) {
            j++
            getQuestion()
            answers()
            blackWidowEl++
           
           }
           else if (j === 5 && event.target.value == 'Black Widow'){
               blackWidowEl++
           }
           else if (event.target.value == 'Vision' && j < 5  ) {
            j++
            getQuestion()
            answers()
            visionEl++
           
           }
           else if ( j === 5 && event.target.value == 'Vision'){
               visionEl++
           }
           else if (event.target.value == 'Captin America' && j < 5 ) {
            j++
            getQuestion()
            answers()
            captinAmericaEl++
           
           }
           else if(j === 5 && event.target.value == 'Captin America'){
               captinAmericaEl++
           }
           else if(j<6 && event.target.value == 'Spider Man'){

             j++
            getQuestion()
            answers()
            spiderManEl++
           }
           else if (j === 6 && event.target.value == 'Spider Man'){
               spiderManEl++
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