const artist  =['clapton', 'U2', 'Bruno Mars', 'Lamar'];

// for(var i = 0; i<artist.length; i++){

    // console.log(artist[i]);
// }
artist.forEach(function(artist){
    console.log(artist);
})

const names = ['francis', 'lisa', 'marions', 'ron'];
let template ='';
names.forEach(function(name){
    template+= `<div> hi, my name is ${name}</div>`;
})
document.body.insertAdjacentHTML("afterbegin",template );