// Step handling
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");

// Happy Birthday words
const wordHappy = document.getElementById("word-happy");
const wordBirthday = document.getElementById("word-birthday");
const wordBuddy = document.getElementById("word-buddy");

// Cake image
const cakeImage = document.querySelector(".cake-image");

// Go from poem to "HAPPY BIRTHDAY BUDDY"
next1.addEventListener("click", () => {
  step1.classList.remove("active");
  step2.classList.add("active");

  // Sequence the animations
  setTimeout(() => {
    wordHappy.classList.add("show", "show-from-left");
  }, 200);

  setTimeout(() => {
    wordBirthday.classList.add("show", "show-from-top");
  }, 900);

  setTimeout(() => {
    wordBuddy.classList.add("show", "show-from-right");
  }, 1600);

  // Show cake after the text animation
  setTimeout(() => {
    cakeImage.classList.add("show");
  }, 2300);
});

// Go from HAPPY BIRTHDAY BUDDY + cake to final message
next2.addEventListener("click", () => {
  step2.classList.remove("active");
  step3.classList.add("active");
});

