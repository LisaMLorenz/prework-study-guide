/*
Everything in between is a comment.
*/
// This is also a comment

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

  const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "assets/bowtie-cat.png") {
    myImage.setAttribute("src", "assets/Lisa_BC.jpg");
  } else {
    myImage.setAttribute("src", "assets/bowtie-cat.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("What's your name?.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Hey, ${myName}?`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `What's up, ${storedName}?`;
  }

  myButton.onclick = () => {
    setUserName();
  };

  

    