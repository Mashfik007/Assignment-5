document.getElementById('donation').addEventListener("click",function () {
    window.location.href='./index.html'
    this.style.backgroundColor = "#a3e635";
})

let n=JSON.parse(localStorage.getItem("perdiv"))
let reduce=JSON.parse(localStorage.getItem("reduce"))

console.log(n);

n.forEach((donation) => {
    let add=``;
add+=`<aside class="border flex flex-col p-5"><div class="flex gap-1"><span class="font-bold">${donation.amount}</span><h1 class="font-bold">Taka is Donated for ${donation.place},Bangladesh </h1></div> 
        <h1 class="text-gray-500">DATE:${donation.date}</h1></aside>`
    
    document.querySelector('#place_it').innerHTML+=add

    document.querySelector('#amount').innerHTML=`${donation.reduce}`
  
  
  
  });





 