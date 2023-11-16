const imageArray = [
  {
    id: 1,
    src: "./image/firebase.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 2,
    src: "./image/flutter.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 2,
    src: "./image/flutter.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 3,
    src: "./image/mongoDB.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 1,
    src: "./image/firebase.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 6,
    src: "./image/react.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 4,
    src: "./image/nodejs.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 4,
    src: "./image/nodejs.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 5,
    src: "./image/postgress.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 5,
    src: "./image/postgress.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 6,
    src: "./image/react.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 3,
    src: "./image/mongoDB.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 8,
    src: "./image/tailwind.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 7,
    src: "./image/redux.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 7,
    src: "./image/redux.jpg",
    alt: "./front/front.jpg",
  },
  {
    id: 8,
    src: "./image/tailwind.jpg",
    alt: "./front/front.jpg",
  },
];
function shuffleArray(imageArray) {
  for (let i = imageArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
  }
}
shuffleArray(imageArray);
const refresh = () => {
  location.reload();
};
// let nameLocal;
// create div for login page
const loginDiv = document.createElement("div");
// add class for div
loginDiv.className = "loginDiv";
const logo = document.createElement("img");
logo.id = "logo";
logo.src = "./image/logo.webp";

loginDiv.append(logo);

const inputUserName = document.createElement("input");
// add class for input user name
inputUserName.className = "inputUserName";
inputUserName.id = "userName";
inputUserName.addEventListener("change", (e) => {
  // nameLocal = e.target.value;
});
// localStorage.setItem("name", nameLocal);
// add placeholder for input user name
inputUserName.placeholder = "Username";


const buttonPalyNow = document.createElement("button");
// add class name for button play now
buttonPalyNow.className = "buttonPalyNow";
// add inner text for button
buttonPalyNow.innerText = "Play Now";
const playRule = document.createElement('a');
playRule.innerText = 'How To Play?'
playRule.id = 'playRule'
playRule.href = '#';
const goHome = document.createElement('button');
goHome.id = 'goHome';
goHome.innerText = 'Home Page';
goHome.addEventListener('click',refresh)
const masterRuleDiv = document.createElement('div');
masterRuleDiv.id = 'masterRuleDiv';
masterRuleDiv.style.display = 'none'
playRule.addEventListener('click',()=>{
  masterRuleDiv.style.display = 'flex'
  RuleDiv.style.display='flex'
  loginDiv.style.display = 'none'
  
})
const RuleDiv = document.createElement('div')
RuleDiv.id = 'RuleDiv';
RuleDiv.style.display='flex'
const textRule = document.createElement('p')
textRule.id = 'textRule';
textRule.innerText = '# The memory game is a common children\'s game played with a set of cards. The cards have a pictures on one side and each picture appears on two (or sometimes four) cards. The game starts with all the cards face down and players take turns to turn over two cards. If the two cards have the same picture, then they keep the cards, otherwise they turn the cards face down again. The winner is the person with the most cards when all the cards have been taken'

RuleDiv.append(textRule,goHome);
 
loginDiv.append(inputUserName, buttonPalyNow,playRule);
loginDiv.style.display = "flex";
buttonPalyNow.addEventListener("click", () => {
  loginDiv.style.display = "none";
  mainDivCard.style.display = "grid";
});
masterRuleDiv.append(RuleDiv)
//! main screen Layout
// create main div for all card
const mainDivCard = document.createElement("div");
mainDivCard.className = "mainDivCard";
mainDivCard.style.display = "none";
// create layoutPage div holding all card

const layoutPage = document.createElement("div");
layoutPage.className = "layoutPage";
layoutPage.style.display = "none";

//!-----------create result page -------------------------
// create div for result screen
const resultScreen = document.createElement("div");
resultScreen.id = "resultScreen";
// create heading for result
const resultText = document.createElement("h1");
resultText.id = "resultText";
resultText.innerText = "GAME OVER";
// create button replay again
const replayButton = document.createElement("button");
replayButton.id = "replayButton";
replayButton.innerText = "PLAY AGAIN";
// replayButton.onclick= window.location.reload() ;
resultScreen.style.display = "none";

resultScreen.append(resultText, replayButton);
document.body.append(resultScreen);
//!----------------------------create counter-----------------------

let minutes = 2;
let seconds = 60;
const counter = document.createElement("h3");
counter.id = "counter";

const timer = () => {
  let timeOver = setInterval(() => {
    seconds--;

    counter.innerText = "0" + minutes + "m" + " : " + seconds + "s";
    if (seconds === 0) {
      seconds = 60;
      minutes--;
    }
    if (minutes === -1) {
      clearInterval(timeOver);
      resultScreen.style.display = "flex";
      layoutPage.style.display = "none";
      loginDiv.style.display = "none";
    }
  }, 1000);
};

const divNameCounter = document.createElement("div");
divNameCounter.id = "playerName";
const innerDivCounter = document.createElement("p");
innerDivCounter.id = "innerDivCounter";
divNameCounter.append(innerDivCounter, counter);
let count = 1;
let FirstImageValue;
let LastIndex;
let trueSelect = 0;
const finishGame = () => {
  if (trueSelect === 8) {
    loginDiv.style.display = "none";
    layoutPage.style.display = "none";
    resultScreen.style.display = "flex";
    resultText.innerText = "CONGRATULATION";
  }
};
document.body.addEventListener("click", finishGame);
const renderImage = () => {
  timer();
  imageArray.forEach((x, index) => {
    const imageCard = document.createElement("img");
    imageCard.className = "img";
    imageCard.src = x.src;
    imageCard.id = `img${index}`;
    imageCard.value = x.id;
    imageCard.status = x.status;
    mainDivCard.append(imageCard);

    layoutPage.append(divNameCounter, mainDivCard);

    imageCard.addEventListener("click", (e) => {
      imageCard.src = x.src;

      if (count === 1) {
        document.querySelector(`#img${index}`).className = "blockimg";
        FirstImageValue = e.target.value;
        firstIndex = index;
      }

      if (count === 2) {
        imageCard.src = x.src;

        if (FirstImageValue === e.target.value) {
          trueSelect++;
          document.querySelector(`#img${index}`).className = "blockimg";
          document.querySelector(`#img${firstIndex}`).className = "blockimg";

          new Audio("./sound/click.wav").play();
        } else {
          new Audio("./sound/wrong.mp3").play();
          document.querySelector(`#img${index}`).className = "img";
          document.querySelector(`#img${firstIndex}`).className = "img";
          setTimeout(() => {
            document.querySelector(`#img${index}`).src = x.alt;
            document.querySelector(`#img${firstIndex}`).src = x.alt;
          }, "700");
        }
        count = 0;
      }
      count++;
    });
  });
  setTimeout(() => {
    document.querySelectorAll(".img").forEach((img) => {
      img.src = "./front/front.jpg";
    });
  }, "4000");
};


replayButton.addEventListener("click", refresh);

buttonPalyNow.addEventListener("click", (e) => {
  if (inputUserName.value && typeof inputUserName.value === "string") {
    renderImage();
    // document.body.style.pointerEvents = 'none'
    innerDivCounter.innerText = `Player Name : ${inputUserName.value}`;
    loginDiv.style.display = "none";
    mainDivCard.style.display = "grid";
    layoutPage.style.display = "flex";
  } else {
    inputUserName.id = inputUserName;
    inputUserName.id = "userNamef";
    inputUserName.placeholder = "please fill the input";
    loginDiv.style.display = "flex";
  }
});

document.body.append( loginDiv, layoutPage,masterRuleDiv);
