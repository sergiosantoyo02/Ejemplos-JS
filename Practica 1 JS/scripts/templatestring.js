function returnEmployee(){
    const name ="Francis";
    const age =21;
    const position ="Manager";

    console.log(`His name is ${name}`)
}

returnEmployee();


/*var list = document.querySelector('.user_list');

function addUser(name,lastname){
    var template=`<div class= "user">
                    <div>${name}</div>
                    <div>${lastname}</div>
                </div>`;
                list.insertAdjacentHTML("beforeend", template);
}

addUser('Francis','Jones');
addUser('jane','doa');

*/

const name = "Francis";
const lastName ="Nashville";
let age = 21;
let profession = "Developer";
let salary = 3000;


console.log(`My name is ${name} my lastName ${lastName} i am ${age} years old and my profession is ${profession}and  i earn $${salary}`);

const ul = document.querySelector('.players');

const players = [
    {jersey:56,name:"Djounte Murray",position:"Point guard",PPG:2.6},
    {jersey:98,name:"Dennis Rodman",position:"Small Forward",PPG:10.8},
    {jersey:1,name:"Michael Jordan",position:"Small Forward",PPG:345.6},
    {jersey:2,name:"Lebron James",position:"Shooting Guard",PPG:26.7},
    {jersey:33,name:"Patrick Ewing",position:"Center",PPG:20.2}
 ]
 let list = '';
 for(let i= 0; i<players.length; i++){
     let player = players[i]

     list += `<li>${player.jersey} - ${player.name} -- Position: ${player.position} PPG: ${player.PPG}</li>`
    
 }
  ul.insertAdjacentHTML("beforeend",list);