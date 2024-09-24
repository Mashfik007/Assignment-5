"use strict";
document.querySelector("#history").addEventListener("click", function () {
  window.location.href = "./history.html";
  this.style.backgroundColor = "#a3e635";
});

let perdiv = [];

function updateLocalStorage() {
  localStorage.setItem('perdiv', JSON.stringify(perdiv));
}

let donation = parseInt(document.querySelector("#cal").innerHTML);
let donation2 = parseInt(document.querySelector("#cal2").innerHTML);
let reduce = parseInt(document.querySelector("#reduce").innerHTML);

document.querySelector("#Close").addEventListener("click", function () {
  document.querySelector("#congrats").style.display = "none";
});
// 1st donation button
document.querySelector("#button1").addEventListener("click", function () {
  let n = parseInt(document.querySelector("#input1").value);

  if (isNaN(n) || n < 0) {
    alert("its not a number");
  } else {
    const date = new Date()
      .toLocaleDateString("default", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "numeric",
        hour12:true
      })
      .toLocaleUpperCase();
    // console.log(date);

    donation += n;
    reduce -= n
    document.querySelector("#cal").innerHTML =donation;
    document.querySelector("#reduce").innerHTML =reduce;
    document.querySelector("#congrats").style.display = "flex";

    // console.log(perdiv);
    perdiv.push({
      amount: n,
      place: "Flood Relief in Feni",
      date: date,
      reduce:reduce
    });
    updateLocalStorage()
  }
});
// 2nd
document.querySelector("#button2").addEventListener("click", function () {
  let n = parseInt(document.querySelector("#input2").value);

  if (isNaN(n) || n < 0) {
    alert("its not a number");
  } else {
    const date = new Date()
      .toLocaleDateString("default", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "numeric",
      })
      .toLocaleUpperCase();


    // console.log(perdiv);
    donation2 += n;
    reduce -= n
    document.querySelector("#cal2").innerHTML =donation2;
    document.querySelector("#reduce").innerHTML = reduce;
    document.querySelector("#congrats").style.display = "flex";


    perdiv.push({
      amount: n,
      place: "flood at Nowakhali",
      date: date,
      reduce:reduce
    });
    updateLocalStorage()
  }
 
});


