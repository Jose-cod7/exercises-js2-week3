// Write your code here

const myImg = [
    "https://i.postimg.cc/HxH8KqcJ/download.jpg",
    "https://i.postimg.cc/yxHjLpBn/Thorpe-253x180.jpg",
    "https://i.postimg.cc/pLff7fhW/download-1.jpg",
    "https://i.postimg.cc/HLP94p8X/Federica-Pellegrini2-735x400-620x400.jpg",
];

var imgNumb = 0;

function forward() {
    imgNumb = imgNumb + 1;
    if (imgNumb === myImg.length) {
        imgNumb = 0;
    }
    const selectImg = document.querySelector("#first");
    selectImg.src = myImg[imgNumb];
}

function back() {
    imgNumb = imgNumb - 1;
    if (imgNumb === -1) {
        imgNumb = myImg.length - 1;
    }
    const selectImg = document.querySelector("#first");
    selectImg.src = myImg[imgNumb];
}

const buttonFow = document.querySelector("#forward");
buttonFow.addEventListener("click", forward);

const buttonBack = document.querySelector("#back");
buttonBack.addEventListener("click", back);

fgfg;