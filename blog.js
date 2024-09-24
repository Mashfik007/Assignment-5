document.querySelector("#home").addEventListener("click", function () {
  window.location.href = "./index.html";
});


document.querySelector("#one").addEventListener("click", function () {
  if (document.querySelector("#one1").classList.contains("hidden")) {
    document.querySelector("#one1").classList.remove("hidden");
    document.querySelector("#one").classList.add("slide-down");
    document.querySelector("#one1").classList.add("slide-down");
    document.querySelector("#two").classList.remove("slide-down");
    document.querySelector("#two2").classList.add("hidden");
    document.querySelector("#three3").classList.add("hidden");
    document.querySelector("#three").classList.remove("slide-down");
    document.querySelector("#four4").classList.add("hidden");
    document.querySelector("#four").classList.remove("slide-down");
  } else {
    document.querySelector("#one1").classList.add("hidden");
    document.querySelector("#one").classList.remove("slide-down");
  }
});
//   2nd

document.querySelector("#two").addEventListener("click", function () {
  if (document.querySelector("#two2").classList.contains("hidden")) {
    document.querySelector("#two2").classList.remove("hidden");
    document.querySelector("#two").classList.add("slide-down");
    document.querySelector("#two2").classList.add("slide-down");
    document.querySelector("#one1").classList.add("hidden");
    document.querySelector("#one").classList.remove("slide-down");
    document.querySelector("#three3").classList.add("hidden");
    document.querySelector("#three").classList.remove("slide-down");
    document.querySelector("#four4").classList.add("hidden");
    document.querySelector("#four").classList.remove("slide-down");
  } else {
    document.querySelector("#two2").classList.add("hidden");
    document.querySelector("#two").classList.remove("slide-down");
  }
});
//  3rd
document.querySelector("#three").addEventListener("click", function () {
  if (document.querySelector("#three3").classList.contains("hidden")) {
    document.querySelector("#three3").classList.remove("hidden");
    document.querySelector("#three").classList.add("slide-down");
    document.querySelector("#three").classList.add("slide-down");

    document.querySelector("#one1").classList.add("hidden");
    document.querySelector("#one").classList.remove("slide-down");
    document.querySelector("#two2").classList.add("hidden");
    document.querySelector("#two").classList.remove("slide-down");
    document.querySelector("#four4").classList.add("hidden");
    document.querySelector("#four").classList.remove("slide-down");
  } else {
    document.querySelector("#three3").classList.add("hidden");
    document.querySelector("#three").classList.remove("slide-down");
  }
});



// 4th

document.querySelector("#four").addEventListener("click", function () {
    if (document.querySelector("#four4").classList.contains("hidden")) {
      document.querySelector("#four4").classList.remove("hidden");
      document.querySelector("#four").classList.add("slide-down");
  
      document.querySelector("#one1").classList.add("hidden");
      document.querySelector("#one").classList.remove("slide-down");
      document.querySelector("#two2").classList.add("hidden");
      document.querySelector("#two").classList.remove("slide-down");
      document.querySelector("#three3").classList.add("hidden");
      document.querySelector("#three").classList.remove("slide-down");
    } else {
      document.querySelector("#four4").classList.add("hidden");
      document.querySelector("#four").classList.remove("slide-down");
    }
  });
