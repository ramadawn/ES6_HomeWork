//test is a Athenian thinker returns true if given a string with values Plato, Socrates or Aristotle
function IsAthensThinker(name) {

    if(name === "Plato" || name === "Aristotle" || name === "Socrates"){
        return true;
    }else {return false}

}
//an array of test values
var testvalues = ["Plato", 14, false, true, "Mark", "Socrates"];
//running test values in array
testvalues.forEach((value) => {console.log(IsAthensThinker(value));}); 