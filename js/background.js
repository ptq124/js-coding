const imges = ["0.jpg","1.jpg"];

const chosenImage = imges[Math.floor(Math.random()*imges.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("background");

document.body.appendChild(bgImage);