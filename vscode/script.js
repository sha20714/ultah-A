const musik = document.getElementById("musik");
const pesan1 = document.getElementById("pesan1");
const pesan2 = document.getElementById("pesan2");
const pesan3 = document.getElementById("pesan3");
const pesan4 = document.getElementById("pesan4");
const pesan5 = document.getElementById("pesan5");
const pesan6 = document.getElementById("pesan6");

const btn1 = document.getElementById("btnLanjut1");
const btn2 = document.getElementById("btnLanjut2");
const btn3 = document.getElementById("btnLanjut3");
const btn4 = document.getElementById("btnLanjut4");

btn1.addEventListener("click", () => {
  pesan1.classList.remove("show");
  btn1.classList.add("hidden");

  pesan2.classList.add("show");
  btn2.classList.remove("hidden");

  musik.play();
});

btn2.addEventListener("click", () => {
  pesan2.classList.remove("show");
  btn2.classList.add("hidden");

  pesan3.classList.add("show");
  btn3.classList.remove("hidden");
});

btn3.addEventListener("click", () => {
  pesan3.classList.remove("show");
  btn3.classList.add("hidden");

  pesan4.classList.add("show");
  btn4.classList.remove("hidden");
});

btn4.addEventListener("click", () => {
  pesan4.classList.remove("show");
  btn4.classList.add("hidden");

  pesan5.classList.add("show");

  setTimeout(() => {
    pesan5.classList.remove("show");
    pesan6.classList.add("show");
  }, 3000); // buat efek dramatis 3 detik
});
