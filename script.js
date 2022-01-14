var data = 0;
document.querySelector(".nums").innerText=data;

document.querySelector(".btn-de").addEventListener("click", function(){
    data=data-1;
    document.querySelector(".nums").innerText = data;
});



document.querySelector(".btn-in").addEventListener("click", function(){
   data=data+1;
    document.querySelector(".nums").innerText = data+1;
})
document.querySelector(".btn-re").addEventListener("click", function(){
   data=0;
    document.querySelector(".nums").innerText = data;
});