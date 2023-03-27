


let option= document.querySelectorAll('.option');

let options = document.querySelector('.options');
let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let option4 = document.querySelector('.option4');
let option5 = document.querySelector('.option5');
let option6 = document.querySelector('.option6');
let  p= document.querySelector('.select p');
let  select= document.querySelector('.select');
let form = document.querySelector('.form');

let span = document.getElementById('img');


let sp= document.querySelector('.sp');
form.addEventListener('submit',()=>{
   e.preventDefault();
})

select.addEventListener('click',()=>{
  
  options.classList.toggle('hide');
  span.classList.toggle('rotate');

  
})
let i = document.querySelector('.i');
option.forEach((item)=>
{
  item.addEventListener('click',function(){
       p.innerHTML = this.innerHTML;
       img.classList.remove('rotate');
       options.classList.toggle('hide');
       i.innerHTML = ` <input type="text" name="" id="" class="id" placeholder="UPI ID" required>`
    
  })
})

option1.addEventListener('click',()=>{
    option1.classList.toggle('gray');

    option2.classList.remove('gray');
    option3.classList.remove('gray');
    option4.classList.remove('gray');
    option5.classList.remove('gray');
    option6.classList.remove('gray');
})
option2.addEventListener('click',()=>{
    option2.classList.toggle('gray');
    option1.classList.remove('gray');
    option3.classList.remove('gray');
    option4.classList.remove('gray');
    option5.classList.remove('gray');
    option6.classList.remove('gray');
})
option3.addEventListener('click',()=>{
    option3.classList.toggle('gray');
    option1.classList.remove('gray');
    option2.classList.remove('gray');
   
    option4.classList.remove('gray');
    option5.classList.remove('gray');
    option6.classList.remove('gray');
})
option4.addEventListener('click',()=>{
    option4.classList.toggle('gray');
    option1.classList.remove('gray');
    option2.classList.remove('gray');
    option3.classList.remove('gray');
    
    option5.classList.remove('gray');
    option6.classList.remove('gray');
})
option5.addEventListener('click',()=>{
    option5.classList.toggle('gray');
    option1.classList.remove('gray');
    option2.classList.remove('gray');
    option3.classList.remove('gray');
    option4.classList.remove('gray');
    
    option6.classList.remove('gray');
})
option6.addEventListener('click',()=>{
    option6.classList.toggle('gray');
    option1.classList.remove('gray');
    option2.classList.remove('gray');
    option3.classList.remove('gray');
    option4.classList.remove('gray');
    option5.classList.remove('gray');
   
})

