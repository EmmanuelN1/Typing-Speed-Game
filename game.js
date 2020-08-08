window.onload = initAll;
 // window.addEventListener(load,initAll) = it is an alternative for window.onLoad
        //global variables
        var time = 5;
        var score = 0;
        var isPlaying;

    //array of words
        var words = [
            "selecting",
            "established",
            "pivot", 
            "selections",
            "form",
            "elements.",
            "input", 
            "select", 
            "textarea",
            "possible",
            "contained",
            "(setting)",
            "potential",
            "newsletter", 
            "elements, and you might be asking yourself,",
            "you’re being proactive and simply planning",
            "your form needs may grow and you","programming", 
            "logic",
            "validation",
            "Updating C/C++ dependencies...",
            "C/C++ language components (Windows)",
            "ClangFormat (Windows)",
            "Failed. Retrying...Waiting 16 seconds...",
            "Visual Studio Windows Debugger",
            "C/C++ language components (Windows)",
            "Failed at stage: installPackages",
            "Error: end of central directory record signature not found"
        ];
  
      //initializ game
function initAll(){
        //load random words from the array
        showWord(words);
        //matching words with input
        inputt.addEventListener('input', startMatching);
        //call countdown every seconds
        setInterval(countDown, 1000);
        //check the status of the game
        setInterval(checkStatus, 50);
   
    //Pick & show random word
    function showWord(words){
        //generate a random array index
        var randIndex = Math.floor(Math.random() * words.length);
        //change the element
        var result = document.querySelector("#currentWord").innerHTML= words[randIndex];    
    }
    //startMatching
    function startMatching(){
        var scoreDisplay = document.getElementById('score');
        if(matchWord()){
            isPlaying = true;
            time =6;
            showWord(words);
            document.getElementById("inputt").value="";
            document.getElementById("responseMessage").value ="";
            score++;
        }
        if (score===-1){
            scoreDisplay.innerHTML = "0"
        }
        else{
            scoreDisplay.innerHTML=score;
        }
        
    }
    //match words with text
    function matchWord(){
        //checks the value of the textbox  and the currentWord
        var input = document.getElementById("inputt");
        var currentWord = document.getElementById("currentWord");
        var response = document.getElementById("responseMessage");
        if(input.value === currentWord.innerHTML){  
            response.innerHTML ='Correct!!!';
            return true;
        }
        else{
            response.innerHTML ='incorrect'; 
            return false;
        }
    } 
    //countDown Timer
    function countDown(){
        if (time>0){
            //decrement
            time--;
        }
        else if (time===0){
            isPlaying=false;    
        }
        //show time
        var timeLeft = document.getElementById("timeLeft");
        timeLeft.innerHTML=time;
        
    }
    function checkStatus(){
        if(!isPlaying&&time===0){
            document.getElementById("responseMessage").innerHTML="Game Over!!!";
            score=-1;
        }
    }
}