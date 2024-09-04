/* Remember to run this click ctrl+s */

var questions = [
    {
       prompt: "Which continent does Kenya belong to?\n\
                (a)Africa\n\
                (b)Europe\n\
                (c)Alaska",
       answer:   "a"
    },      
    {
        prompt: "Which is largest body oragan?\n\
                (a)Heart\n\
                (b)Skin\n\
                (c)Liver",
       answer:   "b"
    },
    {
        prompt: "First black president of the united states?\n\
                (a)Barrack Obama\n\
                (b)Donald trump\n\
                (c)John F kennedy",
       answer:   "a"
    },
    {
        prompt: "Largest mammal?\n\
                (a)Elephant\n\
                (b)Buffalo\n\
                (c)Whale",
       answer:   "c"
    },
    {
        prompt: "Capital city of China?\n\
                (a)Newyork\n\
                (b)Nairobi\n\
                (c)Beijing",
       answer:   "c"
    },
    {
        prompt: "Who is a better rapper?\n\
                (a)Drake\n\
                (b)Yuno miles\n\
                (c)Jay z",
       answer:   "b"
    },
    
]
var score = 0;
 for(var i = 0; i < questions.length; i++){
  var response = window.prompt(questions[i].prompt)
  if (response == questions[i].answer){
    score++;
    alert("Correct!");
  }
  else{
    alert("WRONG!");
  }
 }
 alert("You got " + score + " out of " +questions.length);
