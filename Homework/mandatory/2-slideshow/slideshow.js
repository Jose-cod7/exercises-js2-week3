// Write your code here

const myImg = [
    "https://i.postimg.cc/4drqs1Gh/cielo2.jpg",
    "https://i.postimg.cc/yxHjLpBn/Thorpe-253x180.jpg",
    "httpsg://i.postimg.cc/pXPk8SsL/phelps.jp",
];

function forward() {
    const selectImg = document.querySelector("#mainimg");
    const newImg = document.createElement("img");
    selectImg.appendChild(newImg);
    const img = document.querySelector("#first");
    img.remove();
    newImg.src = myImg[0];
}

const buttonFow = document.querySelector("#forward");
buttonFow.addEventListener("click", forward);