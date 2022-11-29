const userText = document.getElementById("user-text");
const cardText = document.getElementById("card-text");
const cardImage = document.getElementById("card-image");

const updateText = () => {
  cardText.innerHTML = userText.value;
}

const changeColor = (color) => {
  cardText.style.color = color;
}

const changeBackground = (src) => {
  console.log(src)
  cardImage.src = src;
}
const backGrounds = document.querySelectorAll('#user-background div');
backGrounds.forEach(backGround => {
  backGround.addEventListener("click", () => changeBackground(backGround.firstElementChild.src));
})