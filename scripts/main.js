const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/staring-cat.png") {
    myImage.setAttribute("src", "images/cat-mirror.png");
  } else {
    myImage.setAttribute("src", "images/staring-cat.png");
  }
};
