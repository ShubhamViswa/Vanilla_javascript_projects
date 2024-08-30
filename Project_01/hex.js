const hex =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');



btn.addEventListener('click', function(){
    let hexCode = getRandomNumber();
    console.log(hexCode)
    document.body.style.backgroundColor = hexCode;
    color.textContent = hexCode;

     
})

function getRandomNumber(){
    let hexValue = '#';
    for(let i = 0; i<6; i++){
        let randomNumber = Math.floor(Math.random()*15);
        hexValue +=  hex[randomNumber];
    }
    return  hexValue;

}
 
 