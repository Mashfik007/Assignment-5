'use strict'
document.querySelector("#history").addEventListener("click", function () {
  window.location.href = "/history.html";
  this.style.backgroundColor = "#a3e635";
});
let nowakhli_donation = parseInt(document.querySelector('#cal').innerHTML)
let reduce = parseInt(document.querySelector('#reduce').innerHTML)



document.querySelector('#button1').addEventListener('click', function () {
  let n = parseInt(document.querySelector('#input1').value);

  if (isNaN(n) || n < 0) {
    alert('its not a number')
  } else {
   
    document.querySelector('#cal').innerHTML =`${ nowakhli_donation+=n}`
    document.querySelector('#reduce').innerHTML = `${reduce-=n}`
    // console.log(nowakhli_donation);

  }


})
document.querySelector('#button1').addEventListener('click', function () {
  let n = parseInt(document.querySelector('#input1').value);

  if (isNaN(n) || n < 0) {
    alert('its not a number')
  } else {
   
    document.querySelector('#cal').innerHTML =`${ nowakhli_donation+=n}`
    document.querySelector('#reduce').innerHTML = `${reduce-=n}`
    // console.log(nowakhli_donation);

  }


})
