
let btn=document.querySelector('.btn');
let para=document.querySelector('#para');
btn.addEventListener("click",()=>{
    let num=Math.floor(Math.random()*1000);
    para.innerText=num;
});