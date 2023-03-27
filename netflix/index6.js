let form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let inputs = document.querySelectorAll('input[type="text"]');
    for(let input of inputs){
        input.value = '';
    }
})

let rupees = document.getElementById('rupees');

rupees.innerHTML = localStorage.getItem('btn');
rupees.innerHTML = localStorage.getItem('btn');
rupees.innerHTML = localStorage.getItem('btn');
rupees.innerHTML = localStorage.getItem('btn');
