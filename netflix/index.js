// function refresh(){
//     window.location.reload();
// }

// setInterval(refresh,2000)

let form = document.querySelector('form');
let input = document.querySelector('input');
let span  = document.querySelector('.re');

 form.addEventListener('submit',()=>{
    input.value='';
   
 })

 function getValue(){
     let email = document.getElementById('email').value;
     localStorage.setItem("EMAIL",email);
 }


