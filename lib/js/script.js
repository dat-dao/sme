// Thuê
var buybtn = document.querySelector('.btn-buy');
var buybg = document.querySelector('.modal-main-1');
var closebg = document.querySelector('.modal-close-1')

buybtn.addEventListener('click',function(){
    buybg.classList.add('bg-active');
});

closebg.addEventListener('click',function(){
    buybg.classList.remove('bg-active');
});


// Donate
var donatebtn = document.querySelector('.btn-donate');
var donatebg = document.querySelector('.modal-main');
var closebg = document.querySelector('.modal-close')

donatebtn.addEventListener('click',function(){
    donatebg.classList.add('bg-active');
});

closebg.addEventListener('click',function(){
    donatebg.classList.remove('bg-active');
});

// Nhắn tin

var sendbtn = document.querySelector('.btn-chat');
var sendbg = document.querySelector('.modal-chat');
var closebg = document.querySelector('.chat-close')

sendbtn.addEventListener('click',function(){
    sendbg.classList.add('bg-chat');
});

closebg.addEventListener('click',function(){
    sendbg.classList.remove('bg-chat');
});

// Mắt frame

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  function myFunction1() {
    var y = document.getElementById("myInput-1");
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  };
  function myFunction2() {
    var z = document.getElementById("myInput-2");
    if (z.type === "password") {
      z.type = "text";
    } else {
      z.type = "password";
    }
  };

//   Hiển thị thay đổi mật khẩu



// //recharge
// var rechargeBtn = document.querySelector('.recharge-btn');
// var rechargeBg = document.querySelector('.recharge');
// // var closebg = document.querySelector('.x')

// rechargeBtn.addEventListener('click',function(){
//     rechargeBg.classList.add('hide-recharge');
// });

// // rechargeBg.addEventListener('click',function(){
// //     rechargeBg.classList.remove('hide-recharge');
// // });
