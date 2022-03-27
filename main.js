// get the value of the 'bill' and 'number of people' out of the input.
// add eventlisteners to the percent button to multiply the corresponding percentage with the value gotten from the input and display the value on the h2 in the value section
// to get the tip amount value:
 //get the number value from  from the bill input, multiply it by the corresponding percent value, then divide it by the corresponding number value gotten from the number of people input.
 // to get the total amount / person
 // divide the bill by the number of people and add the tip.
//  then display your values in the innerText of h2..

 const billInput = document.querySelector('#bill'),
       button = document.querySelectorAll('.percentageValue'),
       numberOfPeople = document.querySelector('#numberOfPeople'),
       displayTip = document.querySelector('.tipAmountDisplay'),
       displayTotal = document.querySelector('.totalAmountDisplay'),
       resetElement = document.querySelector('.reset'),
       customInput = document.querySelector('.percentSix');

// console.log(customInput)

for (let i = 0; i < button.length; i++) {

 const percentElement = button[i]

percentElement.addEventListener('click', calculate);
function calculate(){
const elementVal = Number(percentElement.textContent.slice(0, -1));
const billVal = Number(billInput.value);
const numberOfPeopleVal = Number(numberOfPeople.value);

const tipPerPerson = (billVal * (elementVal / 100)) / numberOfPeopleVal;
const totalPerPerson= (billVal / numberOfPeopleVal) + tipPerPerson;

displayTip.innerText =`$${tipPerPerson.toFixed(2)}`
displayTotal.innerText=`$${totalPerPerson.toFixed(2)}`


if(billInput.value ==='' || numberOfPeople.value ===''){
      displayTip.innerText ='$0.00';
displayTotal.innerText='$0.00';

}

}

}


customInput.addEventListener('input', custom);
function custom(){
      const billVal = Number(billInput.value);
      const numberOfPeopleVal = Number(numberOfPeople.value);
      const customVal = Number(customInput.value);
      const customValtipPerPerson = (Number(customInput.value) / 100) * billVal / numberOfPeopleVal;

      const customValTotalPerPerson = (billVal / numberOfPeopleVal) + customValtipPerPerson;

      displayTip.innerText =`$${customValtipPerPerson.toFixed(2)}`
      displayTotal.innerText=`$${customValTotalPerPerson.toFixed(2)}`


if(customVal == ''){
  displayTip.innerText ='$0.00';
displayTotal.innerText='$0.00';

}else if(billInput.value ==='' || numberOfPeople.value ===''){
      displayTip.innerText ='$0.00';
displayTotal.innerText='$0.00';

}

//      console.log(customValtipPerPerson, customValTotalPerPerson);
}

resetElement.addEventListener('click', reset);
function reset(){
billInput.value=''
numberOfPeople.value=''
customInput.value=''
displayTip.innerText ='$0.00'
displayTotal.innerText='$0.00'
// console.log()
}


    