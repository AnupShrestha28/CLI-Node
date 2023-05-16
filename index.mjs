import prompts from "prompts";
import chalkAnimation from 'chalk-animation';
import figlet from "figlet";

figlet("Enter your details properly", function(err, data){
  if(err){
    console.log("Something went wrong");
    console.dir(err);
    return;
  }
  console.log(data);

const question = [
  {
    type: 'number',
    name: 'age',
    message: 'How old are you ?'
  },
  {
    type: 'text',
    name: 'study',
    message: 'What is your qualification ?'
  },
  {
    type: 'text',
    name: 'place',
    message: 'Where are you from ?'
  },
  {
    type: 'number',
    name: 'contact',
    message: 'What is your phone number'
  }
];

// const response = prompts(question);
// console.log(response);

// Using IIF
// (async () => {
//   const response = prompts(question)
//   console.log(response);
// })();

// Using Promise
// prompts(question).then((response) => {
//   console.log(response)
// })

prompts(question).then((response) => {
  const myDetails = `Age: ${response.age}, Qualification: ${response.study}, Place: ${response.place}, Phone Number: ${response.contact}`;
  chalkAnimation.rainbow(myDetails);

// Display my details
figlet("Your Details", function(err, data){
      if(err){
        console.log("Something went wrong");
        console.dir(err);
        return;
      }
      console.log(data);
      console.log(myDetails)
    });
  });
});
