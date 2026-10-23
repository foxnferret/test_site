const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/test_image.png") {
    myImage.setAttribute("src", "images/test_image2.png");
  } else {
    myImage.setAttribute("src", "images/test_image.png");
  }
});

//personalsied welcome text
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Art is cool, ' + myName;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Art is cool, ' + storedName;
  }
  
  myButton.addEventListener("click", () => {
    setUserName();
  });

  const listItems = document.querySelectorAll("li");

  function toggleDone(e) {
    if (!e.target.className) {
      e.target.className = "done";
    } else {
      e.target.className = "";
    }
  }
  
  listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
  });