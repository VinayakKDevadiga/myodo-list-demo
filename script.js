const ac=document.querySelector(".ac");//done
const inputbox=document.querySelector("#calculationInput");//done

//for clear
ac.addEventListener("click",()=>{
      inputbox.value = "";
   }
);
//for delete
function deleted(){
   var text=inputbox.value;
   var modifiedText = text.slice(0, -1); // Remove the last letter
   inputbox.value = modifiedText;
}
//for every button
var c = 0;

function adder(value) {
  // Retrieve the input element
  var inputbox = document.getElementById("calculationInput");

  if (c == 1) {
    inputbox.value = "";
    inputbox.style.backgroundColor = "";
    c = 0;
  }

  if (value === "=") {
    if (inputbox.value == "") {
      inputbox.style.backgroundColor = "red";
      c = 1;
       // Exit the function if input is empty
    }else
    inputbox.value = String(eval(inputbox.value));
    
  } else {
    var rinput = inputbox.classList;
    rinput.remove("red");
    var text = inputbox.value;
    var modifiedText = text + value;
    inputbox.value = modifiedText;
  }
}

//for square of number
function square(){
  let ans=(Number(inputbox.value));
  inputbox.value=String(ans*ans);
}



