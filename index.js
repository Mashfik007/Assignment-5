"use strict";
document.querySelector("#history").addEventListener("click", function () {
  window.location.href = "./history.html";
  this.style.backgroundColor = "#a3e635";
});

let perdiv = JSON.parse(localStorage.getItem("perdiv")) || []; //array
let updated_reduce = localStorage.setItem("perdiv", JSON.stringify(perdiv));
let donation =
  parseInt(localStorage.getItem("donation")) ||
  parseInt(document.querySelector("#cal").innerHTML);
let donation2 =
  parseInt(localStorage.getItem("donation2")) ||
  parseInt(document.querySelector("#cal2").innerHTML);
let donation3 =
  parseInt(localStorage.getItem("donation3")) ||
  parseInt(document.querySelector("#cal3").innerHTML);
let reduce =
  parseInt(localStorage.getItem("reduce")) ||
  parseInt(document.querySelector("#reduce").innerHTML);

document.querySelector("#reduce").innerHTML = reduce;
document.querySelector("#cal").innerHTML = donation;
document.querySelector("#cal2").innerHTML = donation2;
document.querySelector("#cal3").innerHTML = donation3;

// close the module
document.querySelector("#Close").addEventListener("click", function () {
  document.querySelector("#congrats").style.display = "none";
  localStorage.setItem("perdiv", JSON.stringify(perdiv));
  console.log(JSON.parse(localStorage.getItem("perdiv")));
});

// 1st donation bu`tton
document.querySelector("#button1").addEventListener("click", function () {
  let n = parseInt(document.querySelector("#input1").value);

  if (isNaN(n) || n < 0) {
    alert("Invalid Doantoin amount ");
  } else {
    const date = new Date().toLocaleDateString("default", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    donation += n;
    reduce -= n;
    document.querySelector("#cal").innerHTML = donation;
    document.querySelector("#reduce").innerHTML = reduce;
    document.querySelector("#congrats").style.display = "flex";

    perdiv.push({
      location: "Flood at Noakhali",
      amount: n,
      reduce: reduce,
      date: date,
    });
    localStorage.setItem("reduce", reduce);
    localStorage.setItem("donation", donation);
    // console.log(perdiv);
  }
});

// second donation
document.querySelector("#button2").addEventListener("click", function () {
  let n = parseInt(document.querySelector("#input2").value);

  if (isNaN(n) || n < 0) {
    alert("Invalid Doantoin amount ");
  } else {
    const date = new Date().toLocaleDateString("default", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    donation2 += n;
    reduce -= n;
    document.querySelector("#cal2").innerHTML = donation2;
    document.querySelector("#reduce").innerHTML = reduce;
    document.querySelector("#congrats").style.display = "flex";

    perdiv.push({
      location: "Flood at feni",
      amount: n,
      reduce: reduce,
      date: date,
    });
    localStorage.setItem("reduce", reduce);
    localStorage.setItem("donation2", donation2);
    // console.log(perdiv);
  }
});

// 3rd donation

document.querySelector("#button3").addEventListener("click", function () {
  let n = parseInt(document.querySelector("#input3").value);

  if (isNaN(n) || n < 0) {
    alert("Invalid Doantoin amount ");
  } else {
    const date = new Date().toLocaleDateString("default", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    donation3 += n;
    reduce -= n;
    document.querySelector("#cal3").innerHTML = donation3;
    document.querySelector("#reduce").innerHTML = reduce;
    document.querySelector("#congrats").style.display = "flex";

    perdiv.push({
      location: "Flood at Noakhali",
      amount: n,
      reduce: reduce,
      date: date,
    });
    localStorage.setItem("reduce", reduce);
    localStorage.setItem("donation3", donation3);
    // console.log(perdiv);
  }
});

