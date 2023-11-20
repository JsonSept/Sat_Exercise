
let x= 1
function print(limit){
if(limit>=1){
    console.log(x++);
    limit--
    print(limit)
}
}
print(10)


// 8.Welcome to the mini calculator that only adds+, once you see the steps you'll finish it in no time:)

// 8.1 make a variable for the input tag(where information will be written to)
let input = document.querySelector('input')
// Now Time for some nandos

// 8.2. make a variable for the equal button(=)
let equal = document.querySelectorAll('button')[6]
// 8.3 Attach all the buttons with values to a single variable(This will now make it/or return an array)
let buttons = document.querySelectorAll(`[value]`)
// 8.4 Now create a function that will add the button to the input tag.
function addInput(buttonValue){
    if(buttonValue == '+' && input.value.includes('+')) return    
    input.value += buttonValue
}
// 8.5 Now use a ForEach loop to add an event lister to each button that will add the value of the button to the input tag.(make use of the function made in 8.4)

buttons.forEach(btn=> btn.addEventListener('click', ()=> addInput(btn.value)))
 
// 8.6 Now attach an event listener to the equal button that will evaluate( eval ) the answer

equal.addEventListener('click' , ()=> input.value = eval(input.value))



//9. Now make each button[1, 2 and 3] alert the value of 'data-textset' value in the html. for eg when I click on button1, the alert will show...'I am button 1'.
// let buttons = document.querySelectorAll('.myButtonClass');
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     // your code here
//   });
// });
// 9.1 Attach button1, button2, and button3 to a single variable(just like earlier it will be an array) 
let newButtons = document.querySelectorAll('[data-textset]');
// 9.2 To attach an alert to multiple buttons make sure to use a for each loop
    //not done with the loop yet//
    newButtons.forEach(button => {
        button.addEventListener('click', () => 
         alertMessage(button.getAttribute('data-textset')));
        });
            //('click', () => alertMessage(btn.getAttribute('data-textset')))
// 9.3 Write a function inside of the event listener that will alert the message...for the message you need to use .getAttribute() to attach the message from the button to the alert
function alertMessage(message) {
    alert(message)
}
// 10 A student got the following marks Eng 59%, afrik 40%, maths 56%, physics 71%. Calculate his average for the given marks and use a switch statement to check the answer,write the message into the corresponding tag. If the student got higher than 80%, message should be 'I'm proud of you'. If the student got higher than 50%,message should be 'Dont worry I'm still proud of you'. If the student got below than 50%,message should be 'What did you think I was going to say I'm still proud of you :), regardless'

// 11.Create a factory function that will create an object with name, surname, message:function. The function should log the name and surname of that object. Create 2 objects using the factory function.

// 12 Create a constructor function that is the same as no 11. Create 2 objects using the constructor function and display the message in the first paragrph tag
