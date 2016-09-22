var gameInput = $("#game-input");
var gameOutput  = $("#game-output");
gameInput.keydown(function(keydownEvent) {
  // the key code for enter is 13
  
  if (keydownEvent.keyCode == 13) {      
    parseText(gameInput.val()); 
    gameInput.val("");
  }  
})

function parseText(text) {  
  switch (text) {
    case "hello":
      gameOutput.html("Bob!");
      break;
    case "why?": 
      // -1 if it doens't exist
      text.indexOf("cat");
      gameOutput.html("Hi there!");
      break;  
    case "random":
      var responses = [
        "IDK",
        "David Rocks",
        "Who am I?",
        "Stop asking me questions"
      ]
      var response = responses[Math.floor(Math.random()*responses.length)];
      gameOutput.html(response);      
      break
    default:       
  }  
//  if (text === "hello") {
//    gameOutput.html("Hi there!");
//  } else if(text === "name") {
//    gameOutput.html("Bob!");
//  }  
}

