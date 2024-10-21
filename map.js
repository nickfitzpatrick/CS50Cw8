//define places on earth
let wallCoord = [37.8808718,-122.236439]
let schoolCoord =  [37.8724961,-122.2579945]
let coffeeCoord = [37.8696448,-122.2560644]

//define zoom
let myZoom = 14;

// make map object
let myMap = L.map('map');

// provide map values
myMap.setView( schoolCoord, myZoom );

// get map title provider - OpenStreetMap

let myTiles = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreettmap.org/copyright">OpenStreetMap</a>'
    }
);

//connect tile layer to map object
myTiles.addTo(myMap);

//create markers
let wallMarker = L.marker( wallCoord );
let schoolMarker = L.marker( schoolCoord );
let coffeeMarker = L.marker( coffeeCoord );


//place marker on map
wallMarker.addTo( myMap );
schoolMarker.addTo( myMap );
coffeeMarker.addTo( myMap );

//make marker clickable
let wallPopUp = wallMarker.bindPopup('<strong>The Best Place To Watch Sunset</strong>')
let schoolPopUp = schoolMarker.bindPopup('<strong>Where I Studied</strong>')
let coffeePopUp = coffeeMarker.bindPopup('<strong>Where I spent my mornings having coffee while studying</strong>')


// have popup open
// myPopUp.openPopup();

// add vector shapes
let myCircle = L.circle(
    [37.8808718,-122.236439],
    {
        color: 'red',
        fillColor: '#ff0033',
        fillOpacity: 0.5,
        radius: 100
    }
);

//add to map
myCircle.addTo(myMap);

//add popup

myCircle.bindPopup('Great View')

//polygon
let myPoly = L.polygon(
    [
        [37.884347,-122.2489919],
        [37.895335,-122.2378069],
        [37.761883,-122.0902679],
        [37.735065,-122.1006779]
    ]
);

myPoly.addTo(myMap);
myPoly.bindPopup('Where I hike and ride motorcycles with friends')

// // data array holding all the artictecure questions
// // Questions and answers generated with the help of ChatGPT
// const data = [
//     {
//       "number": 1,
//       "question": "Who designed the Walt Disney Concert Hall?",
//       "points": 10,
//       "answers": ["Zaha Hadid", "Frank Gehry", "Frank Lloyd Wright", "Antoni Gaudí"],
//       "correct": 1,
//       "media": "./images/DisneyConcertHall.png",
//       "mediaDis": "The Disney Concert Hall - Source: https://en.wikipedia.org/wiki/Walt_Disney_Concert_Hall#/media/File:Walt_Disney_Concert_Hall,_LA,_CA,_jjron_22.03.2012.jpg"
//     },
//     {
//       "number": 2,
//       "question": "What is the tallest building in the world as of 2023?",
//       "points": 10,
//       "answers": ["Shanghai Tower", "Burj Khalifa", "Taipei 101", "One World Trade Center"],
//       "correct": 1,
//       "media": "./images/tallest.png",
//       "mediaDis": "Tallest Building in the World - Source:https://en.wikipedia.org/wiki/Burj_Khalifa#/media/File:Burj_Khalifa.jpg"
//     },
//     {
//       "number": 3,
//       "question": "Which architect is known for the Guggenheim Museum in New York?",
//       "points": 10,
//       "answers": ["Frank Lloyd Wright", "Le Corbusier", "Ludwig Mies van der Rohe", "Richard Meier"],
//       "correct": 0,
//       "media": "./images/Guggenheim.png",
//       "mediaDis": "Guggenheim Museum - Source:https://en.wikipedia.org/wiki/Solomon_R._Guggenheim_Museum"
//     },
//     {
//       "number": 4,
//       "question": "Which city is home to the iconic Sagrada Família?",
//       "points": 10,
//       "answers": ["Madrid", "Barcelona", "Rome", "Paris"],
//       "correct": 1,
//       "media": "./images/Sagrada.png",
//       "mediaDis": "Sagrada Família - Source:https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia#/media/File:Sagrada_Familia_8-12-21_(1).jpg"
//     },
//     {
//       "number": 5,
//       "question": "What is the architectural style of the Sydney Opera House?",
//       "points": 10,
//       "answers": ["Brutalism", "Postmodernism", "Expressionism", "Neo-Gothic"],
//       "correct": 2,
//       "media": "./images/SydneyOperaHouse.png",
//       "mediaDis": "Sydney Opera House - Source:https://en.wikipedia.org/wiki/Sydney_Opera_House#/media/File:Sydney_Australia._(21339175489).jpg"
//     },
//     {
//       "number": 6,
//       "question": "Which architect is known for the 'Fallingwater' house?",
//       "points": 10,
//       "answers": ["Frank Lloyd Wright", "Louis Sullivan", "Renzo Piano", "Norman Foster"],
//       "correct": 0,
//       "media": "./images/FallingWater.png",
//       "mediaDis": "Fallingwater House - Source:https://en.wikipedia.org/wiki/Fallingwater#/media/File:Fallingwater3.jpg"
//     },
//     {
//       "number": 7,
//       "question": "Which famous architect was a pioneer of Modernist architecture and designed the Villa Savoye?",
//       "points": 10,
//       "answers": ["Walter Gropius", "Le Corbusier", "Ludwig Mies van der Rohe", "Alvar Aalto"],
//       "correct": 1,
//       "media": "./images/VillaSavoye.png",
//       "mediaDis": "- Source:https://en.wikipedia.org/wiki/Villa_Savoye#/media/File:VillaSavoye.jpg"
//     },
//     {
//       "number": 8,
//       "question": "What material was primarily used in the construction of the Eiffel Tower?",
//       "points": 10,
//       "answers": ["Steel", "Iron", "Copper", "Concrete"],
//       "correct": 1,
//       "media": "./images/Eiffel.png",
//       "mediaDis": "Eiffel Tower - Source:https://en.wikipedia.org/wiki/Eiffel_Tower#/media/File:Tour_Eiffel_Wikimedia_Commons_(cropped).jpg"
//     },
//     {
//       "number": 9,
//       "question": "Which architect designed the glass pyramid at the Louvre in Paris?",
//       "points": 10,
//       "answers": ["I. M. Pei", "Rem Koolhaas", "Norman Foster", "Jean Nouvel"],
//       "correct": 0,
//       "media": "./images/Louvre.png",
//       "mediaDis": "Louvre - Source:https://en.wikipedia.org/wiki/Louvre#/media/File:Louvre_Museum_Wikimedia_Commons.jpg"
//     },
//     {
//       "number": 10,
//       "question": "Which of the following is considered an example of Gothic architecture?",
//       "points": 10,
//       "answers": ["The Colosseum", "The Parthenon", "Notre-Dame Cathedral", "The Pantheon"],
//       "correct": 2,
//       "media": "./images/Gothic.png",
//       "mediaDis": "Gothic - Source:https://en.wikipedia.org/wiki/Gothic_architecture#/media/File:Sainte_Chapelle_Interior_Stained_Glass.jpg"
//     }
//   ]
  
//   // setup turn and point counters
//   var turn = 0;
//   var points = 0;
  
//   // // show first question after the page has fully loaded
//   showQuestion();
  
//   // function that can show the current question and its possible answers
//   function showQuestion() {
//     // set the counter 
//     $('#counter').text( turn + 1 );
  
//     // set the points
//     $('#points').text( points );
  
//     // show question 
//     $('#question').text( data[turn].question );
  
//     // render buttons for answers 
//     $('#answers').empty();
  
//     for ( let index = 0; index < data[turn].answers.length; index++) {
//       // create button and set text to answer text
//       var button = $("<span>");
//       button.text( data[turn].answers[index] );
  
//       button.data('choice', index);
//       button.addClass("answers");
//       // append button element into html document model
//       $('#answers').append( button );
  
//       // event handler
//       button.draggable();
//     }
  
//     if (data[turn].media) {
//       $('#questionImage').html('<img src="' + data[turn].media + '" alt="' + data[turn].mediaDis + '" style="width: 50%; display: block; margin: 0 auto;" />');
//     } else {
//       $('#questionImage').empty();
//     }
  
//     $('#progress').progressbar(
//       {
//         value: turn * 10,
//         max: 100
//       }
//     );
  
//     $('#question').droppable(
//       {
//           drop: function(event, ui){
//             var userChoice = ui.draggable.data('choice');
//             checkAnswer(userChoice);
//           }
//       }
//     );
//   }
  
//   function checkAnswer(choice) {
//       // handles how the user answers 
//       // decide which answer is correct
//       if ( choice == data[turn].correct ) {
//         rightAnswer();
//       } else {
//         wrongAnswer()
//       }
//   }
  
//   // show another if one is available
//   function nextQuestion() {
//     turn++;
//     if ( turn < data.length ) {
//       showQuestion();
//     } else {
//       gameEnding()
//     }
//   }
  
//   // Function that handles the message for the quiz's ending
//   function gameEnding() {
//     $('#question').empty();
//     $('#answers').empty();
//     $('#counter').empty();
//     $('#points').empty();
//     $('#progress').progressbar(
//       {
//         value: 100,
//         max: 100
//       }
//     );
//     let grade;
//     let score = (points / (turn * 10)) * 100;
  
//     // Conditional Statement for Grade assignment
//     if (score >= 90) {
//       grade = "A";
//     } else if (score >= 80) {
//       grade = "B";
//     } else if (score >= 70) {
//       grade = "C";
//     } else if (score >= 60) {
//       grade = "D";
//     } else {
//       grade = "F";
//     }
    
//     // End of game text and score
//     $('#end').text(`Game Over! You Scored: ${points}/${turn * 10}, Your grade is: ${grade}`);
  
//     let againButton = $("<span>").text("Play Again");
//     againButton.addClass("answers")
//     againButton.draggable();
//     $('#answers').append(againButton);
  
//     $('#question').droppable({
//       drop: function(event, ui){
//         if (ui.draggable.text() === "Play Again") {
//           playAgain();
//         }
//       }
//     });
//   }
  
//   // Function to handle when the question was answered correctly
//   // and give the user the option to go to the next question
//   function rightAnswer() {
//     // Display if they answered correctly or not
//     $('#question').text("Right answer!");
//     points += data[turn].points;
  
//     if (turn === 9){
//       let finishButton = $("<span>").text("Finish Quiz");
//       finishButton.draggable();
//       finishButton.addClass("answers");
  
//       // Clear old buttons and add button for next question
//       $('#answers').empty();
//       $('#answers').append(finishButton);
//       $('#question').droppable({
//         drop: function(event, ui){
//           if (ui.draggable.text() === "Finish Quiz") {
//             nextQuestion();
//         }
//       }
//     });
      
//     } else {
//       // Next question button
//       let nextButton = $("<span>").text("Next Question");
//       nextButton.draggable()
//       nextButton.addClass("answers");
  
//       // Clear old buttons and add button for next question
//       $('#answers').empty();
//       $('#answers').append(nextButton);
  
//       $('#question').droppable({
//           drop: function(event, ui){
//             if (ui.draggable.text() === "Next Question") {
//               nextQuestion();
//           }
//         }
//       });
//     }
//   }
  
//   // Function to handle when the question was answered incorrectly
//   // and give the user the option to try again
//   function wrongAnswer() {
//     // Display if they answered correctly or not
//     $('#question').text("Wrong Answer, Try Again?");
//     $('#wrongAnswer').dialog();
    
//     // Create decision buttons
//     let yesButton = $("<span>").text("Yes");
//     yesButton.addClass("answers");
//     yesButton.draggable();
//     let noButton = $("<span>").text("No");
//     noButton.addClass("answers")
//     noButton.draggable();
  
//     // Clear old buttons and add decision buttons
//     $('#answers').empty();
//     $('#answers').append(yesButton, noButton);
  
//     // Handle what user dedides 
//     $('#question').droppable({
//       drop: function(event, ui){
//         if (ui.draggable.text() === "Yes") {
//           showQuestion();
//       }  else {
//         nextQuestion();
//       }
//     }
//   });
//   }
  
//   function playAgain(){
//     $('#end').empty();
//     turn = 0;
//     points = 0;
//     // $('#end').empty();
//     showQuestion();
//   }