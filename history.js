document.getElementById("donation").addEventListener("click", function () {
  window.location.href = "./index.html";
  this.style.backgroundColor = "#a3e635";
});
document.querySelector("#blog").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

let trasition = JSON.parse(localStorage.getItem("perdiv"));
console.log(trasition);

let lastTrasition=trasition[trasition.length-1]
document.querySelector('#amount').innerHTML=lastTrasition.reduce

trasition.forEach((trasition) => {
  let add = ``;
  add += `<aside class="border flex flex-col w-11/12 p-5"><div class="flex gap-1"><span class="font-bold">${trasition.amount}</span><h1 class="font-bold">Taka is Donated for ${trasition.location},Bangladesh </h1></div><h1 class="text-gray-500">DATE:${trasition.date}</h1></aside>`;

  document.querySelector("#place_it").innerHTML += add;
});
