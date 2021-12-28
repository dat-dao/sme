var buybtn = document.querySelector('.btn-buy');
var buybg = document.querySelector('.modal-main-1');
var closebg = document.querySelector('.modal-close-1')

buybtn.addEventListener('click',function(){
    buybg.classList.add('bg-active');
});

closebg.addEventListener('click',function(){
    buybg.classList.remove('bg-active');
});

var donatebtn = document.querySelector('.btn-donate');
var donatebg = document.querySelector('.modal-main');
var closebg = document.querySelector('.modal-close')

donatebtn.addEventListener('click',function(){
    donatebg.classList.add('bg-active');
});

closebg.addEventListener('click',function(){
    donatebg.classList.remove('bg-active');
});