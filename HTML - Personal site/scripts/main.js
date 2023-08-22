const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-image.jpeg") {
    myImage.setAttribute("src", "images/firefox2-image.jpeg");
  } else {
    myImage.setAttribute("src", "images/firefox-image.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
if(!localStorage.getItem("name")) {
    setusername();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.innerHTML = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function() {
    setUserName();
  }
