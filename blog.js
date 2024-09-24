document.querySelector("#home").addEventListener("click", function () {
    window.location.href = "./index.html";
  });

  document.querySelector('#one').addEventListener("click",function () {
     if ( document.querySelector('#one1').classList.contains("hidden")) {
        document.querySelector('#one1').classList.remove("hidden")
        document.querySelector('#one').classList.add("slide-down")
        document.querySelector('#one1').classList.add("slide-down")
        document.querySelector('#two2').classList.add("hidden")
    
     } else {
        document.querySelector('#one1').classList.add("hidden")
        document.querySelector('#one').classList.remove("slide-down")
     }

    
  })
//   2nd
//   document.querySelector('#two').addEventListener("click",function () {

//     document.querySelector('#two2').classList.remove("hidden")
//     document.querySelector('#two2').classList.add("slide-down")
//     document.querySelector('#two').classList.add("slide-down")

    
//   })

document.querySelector('#two').addEventListener("click",function () {
    if ( document.querySelector('#two2').classList.contains("hidden")) {
       document.querySelector('#two2').classList.remove("hidden")
       document.querySelector('#two').classList.add("slide-down")
       document.querySelector('#two2').classList.add("slide-down")
       document.querySelector('#one1').classList.add("hidden")
       document.querySelector('#one').classList.remove("slide-down")
   
    } else {
       document.querySelector('#two2').classList.add("hidden")
       document.querySelector('#two').classList.remove("slide-down")
    }

   
 })
