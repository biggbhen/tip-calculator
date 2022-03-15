// get the value of the 'bill' and 'number of people' out of the input.
// add eventlisteners to the percent button to multiply the corresponding percentage with the value gotten from the input and display the value on the h2 in the value section
// to get the tip amount value:
 //get the number value from  from the bill input, multiply it by the corresponding percent value, then divide it by the corresponding number value gotten from the number of people input.
 // to get the total amount / person
 // divide the bill by the number of people and add the tip.

 const billInput = document.querySelector('#bill'),
       button = document.querySelectorAll('.percentageValue'),
       numberOfPeople = document.querySelector('#numberOfPeople'),
       displayTip = document.querySelector('.tipAmountDisplay'),
       displayTotal = document.querySelector('.totalAmountDisplay'),
       resetElement = document.querySelector('.reset');
// console.log(reset)

for (let i = 0; i < button.length; i++) {

 const percentElement = button[i]

percentElement.addEventListener('click', calculate);
function calculate(){
const elementVal = Number(percentElement.textContent.slice(0, -1));
const billVal = Number(billInput.value);
const numberOfPeopleVal = Number(numberOfPeople.value);

const tipPerPerson = (billVal * (elementVal / 100)) / numberOfPeopleVal;
const totalPerPerson= (billVal / numberOfPeopleVal) + tipPerPerson;

displayTip.innerText =`${tipPerPerson.toFixed(2)}`
displayTotal.innerText=`${totalPerPerson.toFixed(2)}`


// console.log(tipPerPerson, totalPerPerson, numberOfPeopleVal, billVal)


}

}


resetElement.addEventListener('click', reset);
function reset(){
const inputField = document.querySelector('.inputZero')
const textfield = document.querySelector('.headingZero')
inputField.value='0'

console.log()
}


    