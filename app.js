const billAmount = document.querySelector("#bill-amount")
const givenAmount = document.querySelector("#cash-given")
const checkButton = document.querySelector(".check-button")
const message = document.querySelector(".error-message")
const notesData = document.querySelectorAll(".no-of-notes")

checkButton.addEventListener('click', checkFunction)


availableNotes = [2000,500,100,20,10,5,1]

function checkFunction() {
    message.style.display = "none"
    if(givenAmount.value > 0) {
        generateChange()
    }

    else {
        showMessage("Enter valid amount")
    }
}


function showMessage(msg){
    message.innerText = msg
    message.style.display = "block"
}

function generateChange(){
    let changeAmount = givenAmount.value - billAmount.value
    
    console.log(changeAmount)
    for (let  i =0; i <availableNotes.length; i++){
        let noOfNotes = Math.trunc(changeAmount/availableNotes[i])
        console.log(noOfNotes)
        changeAmount = changeAmount % availableNotes[i]
        notesData[i].innerText = noOfNotes


    }
    
}

