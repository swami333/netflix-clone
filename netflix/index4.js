
let form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   
})


let button1 = document.querySelector('.btn-1');
let button2 = document.querySelector('.btn-2');
let button3 = document.querySelector('.btn-3');
let button4 = document.querySelector('.btn-4');
let div1   = document.querySelector('.wrapper .div-1');
let div2   = document.querySelector('.wrapper .div-2');
let div3   = document.querySelector('.wrapper .div-3');
let div4   = document.querySelector('.wrapper .div-4');
let img1    = document.querySelector('.do1 span');
let img2    = document.querySelector('.do2 span');
let img3    = document.querySelector('.do3 span');
let img4    = document.querySelector('.do4 span');
let plan = document.querySelector('.plan');
let rs1 = document.querySelector('.rs1');
let rs2 = document.querySelector('.rs2');
let rs3 = document.querySelector('.rs3');
let rs4 = document.querySelector('.rs4');





button1.addEventListener('click',()=>{
    let text1 = document.querySelector('.text1').innerHTML;
    localStorage.setItem('btn',text1)
    button1.style.backgroundColor='#e50914';
   
    div1.style.color='#e50914';
    img1.style.display='inline-block';
    img2.style.display='none';
    img3.style.display='none';
    img4.style.display='none';
    button2.style.backgroundColor='rgb(242, 116, 116)';
    
    div2.style.color='#737373';
    button3.style.backgroundColor='';
    div3.style.color='';
    button4.style.backgroundColor='';
    div4.style.color='';
   
})
div1.addEventListener('click',()=>{
    button1.style.backgroundColor='#e50914';
  
    div1.style.color='#e50914';
    
    img1.style.display='inline-block';
    img2.style.display='none';
    img3.style.display='none';
    img4.style.display='none';
    button2.style.backgroundColor='rgb(242, 116, 116)';
    div2.style.color='#737373';
    button3.style.backgroundColor='';
    div3.style.color='';
    button4.style.backgroundColor='';
    div4.style.color='';

})

button2.addEventListener('click',()=>{
    button2.style.backgroundColor='#e50914';
    let text2 = document.querySelector('.text2').innerHTML;
    localStorage.setItem('btn',text2)
    div2.style.color='#e50914';
    img2.style.display='inline-block';
    img1.style.display='none';
 
    img3.style.display='none';
    img4.style.display='none';

    button1.style.backgroundColor='';
    div1.style.color='';
    button3.style.backgroundColor='';
    div3.style.color='';
    button4.style.backgroundColor='';
    div4.style.color='';
})
div2.addEventListener('click',()=>{
    button2.style.backgroundColor='#e50914';

    div2.style.color='#e50914';
    img2.style.display='inline-block';
    img1.style.display='none';
 
    img3.style.display='none';
    img4.style.display='none';
 
    button1.style.backgroundColor='';
    div1.style.color='';
    button3.style.backgroundColor='';
    div3.style.color='';
    button4.style.backgroundColor='';
    div4.style.color='';
})
button3.addEventListener('click',()=>{
    button3.style.backgroundColor='#e50914';
    let text3 = document.querySelector('.text3').innerHTML;
    localStorage.setItem('btn',text3)
    div3.style.color='#e50914';
    img3.style.display='inline-block';
    img1.style.display='none';
 
    img2.style.display='none';
    img4.style.display='none';
    button2.style.backgroundColor='rgb(242, 116, 116)';
    div2.style.color='#737373';
 
    button1.style.backgroundColor='';
    div1.style.color='';
    button4.style.backgroundColor='';
    div4.style.color='';
})
div3.addEventListener('click',()=>{
    button3.style.backgroundColor='#e50914';

    div3.style.color='#e50914';
    img3.style.display='inline-block';
    img1.style.display='none';
 
    img2.style.display='none';
    img4.style.display='none';
    button2.style.backgroundColor='rgb(242, 116, 116)';
    div2.style.color='#737373';
 
    button1.style.backgroundColor='';
    div1.style.color='';
    button4.style.backgroundColor='';
    div4.style.color='';
})

button4.addEventListener('click',()=>{
    button4.style.backgroundColor='#e50914';
    let text4 = document.querySelector('.text4').innerHTML;
    localStorage.setItem('btn',text4)
    div4.style.color='#e50914';
    img4.style.display='inline-block';
    img1.style.display='none';
 
    img2.style.display='none';
    img3.style.display='none';
    button2.style.backgroundColor='rgb(242, 116, 116)';
    div2.style.color='#737373';
 
    button1.style.backgroundColor='';
    div1.style.color='';
    button3.style.backgroundColor='';
    div3.style.color='';
})
div4.addEventListener('click',()=>{
    button4.style.backgroundColor='#e50914';
 
    div4.style.color='#e50914';
    img4.style.display='inline-block';
    img1.style.display='none';
 
    img2.style.display='none';
    img3.style.display='none';
    button2.style.backgroundColor='rgb(242, 116, 116)';
    div2.style.color='#737373';
 
    button1.style.backgroundColor='';
    div1.style.color='';
    button3.style.backgroundColor='';
    div3.style.color='';
})










