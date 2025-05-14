const images = [
  "./public/banner1.jpg",
  "./public/banner2.jpg",
  "./public/banner3.jpg",
];

let index = 0;
const slideDiv = document.querySelector(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function atualizar() {
  slideDiv.style.backgroundImage = `url('${images[index]}')`;
}

// Próximo slide
nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  atualizar();
});
// Slide anterior
prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  atualizar();
});

atualizar();
