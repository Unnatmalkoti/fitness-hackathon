let paras = document.querySelectorAll(".para");
let i=0;

window.setInterval(()=>
{  
    console.log(i);
    paras[i].classList.toggle("active-para");

    if(i<paras.length-1)
        i++;
    else 
        i=0;

    paras[i].classList.toggle("active-para");
} ,5000); /// 5 Seconds delay