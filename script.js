let display = document.getElementById("display");

// Add values
function appendValue(value){
  display.value += value;
}

// Clear display
function clearDisplay(){
  display.value = "";
}

// Calculate answer
function calculate(){

  try{
    display.value = eval(display.value);
  }

  catch(error){
    display.value = "Error";
  }

}