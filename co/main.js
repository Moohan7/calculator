let button = document.querySelectorAll("button");
let resInput = document.querySelector("#res-input");
let opeInput = document.querySelector("#ope-input");
let historyIcon = document.querySelector(".history-icon");
let historyPage = document.querySelector(".history-page");

let valueOne = 0;
let valueTwo = 0;
let operation = "";
let option2 = false;

let allOperation = ( JSON.parse(localStorage.getItem("operations")) || []);

historyIcon.addEventListener("click", () =>{
    historyPage.classList.toggle("active");
})

button.forEach(btn =>{
    btn.addEventListener("click", (e)=>{
        if(btn.classList.contains("clear-all") ||btn.classList.contains("clear"))
        {
      //clear or clear all
      if(btn.classList.contains("clear")){
        if(resInput.value > 0){
            clearInput(resInput);

        }else{
            clearInput(opeInput)
        }
      }else{
        clearAll();
      }

    }else if(btn.classList.contains("operation")){
        // oprations

        if(btn.value != "="){
            option2 = true;
            valueOne = opeInput.value;
            operation = btn.value;
        
         } else{
                if(option2){
                   // let sum = 
                   let sum = `${(valueOne)} ${operation} ${(valueTwo)}`;
                   resInput.value = `${eval(sum)}`;

                   let currentOperation = {
                    val1 : valueOne,
                    op:operation,
                    val2 : valueTwo,

                   }
                   allOperation.push(currentOperation);
                   localStorage.setItem("operations", JSON.stringify(allOperation));


                   valueOne= 0;
                   valueTwo = 0;
                   operation = "";
                
                }
                    
        
            
        }

    }else{

     // if the pressed input is number
     if (option2) {
         valueTwo == 0 ? valueTwo = btn.value : valueTwo += btn.value;
         opeInput.value = `${valueOne} ${operation} ${valueTwo}`;
     }else {
        opeInput.value == 0 ? opeInput.value = btn.value : opeInput.value += btn.value;

        valueOne += btn.value;

     }

        
    }

    })
})

function clearInput(input) {
    let currenResult = input.value.split("");

    let last = currenResult.pop();

    if(currenResult.length > 0) {
        input.value = currenResult.join("");
        
    }else{
        input.value = 0;
        option2 = false;
        valueOne = 0;
        valueTwo = 0;
        operation = 0;

    }
}

function clearAll(){
        opeInput.value = 0;
        resInput.value = 
        option2 = 0;
        valueOne = 0;
        valueTwo = 0;
        operation = 0;

}

function showHistory() {
    let ops ='' ;
    if(allOperation.length > 0){
        allOperation.forEach( op => {

        
        


        })

    }
}