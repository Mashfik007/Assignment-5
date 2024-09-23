'use strict'
document.querySelector("#history").addEventListener("click", function () {
  window.location.href = "/history.html";
  this.style.backgroundColor = "#a3e635";
});
let donation = parseInt(document.querySelector('#cal').innerHTML)
let reduce = parseInt(document.querySelector('#reduce').innerHTML)



document.querySelector('#button1').addEventListener('click', function () {
  let n = parseInt(document.querySelector('#input1').value);

  if (isNaN(n) || n < 0) {
    alert('its not a number')
  } else {
     
    document.querySelector('#cal').innerHTML =`${donation+=n}`
    document.querySelector('#reduce').innerHTML = `${reduce-=n}`
    // console.log(nowakhli_donation);
    document.querySelector("#congrats").style.display='flex'
    document.querySelector("#close").addEventListener('click',function () {
    document.querySelector("#congrats").remove;

    })
  }


})

// 2nd
document.querySelector('#button2').addEventListener('click', function () {
  let n = parseInt(document.querySelector('#input2').value);

  if (isNaN(n) || n < 0) {
    alert('its not a number')
  } else {
   
    document.querySelector('#cal2').innerHTML =`${donation+=n}`
    document.querySelector('#reduce').innerHTML = `${reduce-=n}`
    // console.log(nowakhli_donation);

  }


})
