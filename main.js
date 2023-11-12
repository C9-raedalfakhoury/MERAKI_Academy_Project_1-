const imageArray = [
  { id: 1, src: "./image/firebase.jpg", alt: "./front/front.jpg" },
  { id: 2, src: "./image/flutter.jpg", alt: "./front/front.jpg" },
  { id: 2, src: "./image/flutter.jpg", alt: "./front/front.jpg" },
  { id: 3, src: "./image/mongoDB.jpg", alt: "./front/front.jpg" },
  { id: 1, src: "./image/firebase.jpg", alt: "./front/front.jpg" },
  { id: 6, src: "./image/react.jpg", alt: "./front/front.jpg" },
  { id: 4, src: "./image/nodejs.jpg", alt: "./front/front.jpg" },
  { id: 4, src: "./image/nodejs.jpg", alt: "./front/front.jpg" },
  { id: 5, src: "./image/postgress.jpg", alt: "./front/front.jpg" },
  { id: 5, src: "./image/postgress.jpg", alt: "./front/front.jpg" },
  { id: 6, src: "./image/react.jpg", alt: "./front/front.jpg" },
  { id: 3, src: "./image/mongoDB.jpg", alt: "./front/front.jpg" },
  { id: 8, src: "./image/tailwind.jpg", alt: "./front/front.jpg" },
  { id: 7, src: "./image/redux.jpg", alt: "./front/front.jpg" },
  { id: 7, src: "./image/redux.jpg", alt: "./front/front.jpg" },
  { id: 8, src: "./image/tailwind.jpg", alt: "./front/front.jpg" },
];
function shuffleArray(imageArray) {
  for (let i = imageArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
  }
}
shuffleArray(imageArray);

// create div for login page
const loginDiv = document.createElement("div");
// add class for div
loginDiv.className = "loginDiv";
// create heading for gameName
const gameName = document.createElement("h1");
// add class for gameName
gameName.className = "gameName";
// add inner text for signIn
gameName.innerText = `MEMORY GAME CARD`;
// create heading for signIn
const signIn = document.createElement("h2");
// add class for signIn
signIn.className = "signIn";
// add inner text for signIn
signIn.innerText = ` SIGN IN `;
//create input filed for user name
const inputUserName = document.createElement("input");
// add class for input user name
inputUserName.className = "inputUserName";
inputUserName.id = 'userName'
// add placeholder for input user name
inputUserName.placeholder = "Username";
// create input field for password
const inputPasswrod = document.createElement("input");
// add placeholder for input password
inputPasswrod.placeholder = "Password";
inputPasswrod.type = "password";
// add class name for input password
inputPasswrod.className = "inputPasswrod";
// create div for forget password and sign in
const forgrtPassDiv = document.createElement("div");
forgrtPassDiv.className = "forgrtPass";
// create heading forget password
const forgetPassText = document.createElement("a");
forgetPassText.className = "linkPassword";
forgetPassText.innerText = "Forgot Password";
forgetPassText.href = "#";
// create link for sign in
const linkSignIn = document.createElement("a");
linkSignIn.className = "linkSignUP";
linkSignIn.innerText = "Sign Up";
linkSignIn.href = "#";

// append link and forgot password inside div
forgrtPassDiv.append(forgetPassText, linkSignIn);
// create button to start game
const buttonPalyNow = document.createElement("button");
// add class name for button play now
buttonPalyNow.className = "buttonPalyNow";
// add inner text for button
buttonPalyNow.innerText = "PALY NOW";
loginDiv.append(
  gameName,
  signIn,
  inputUserName,
  inputPasswrod,
  forgrtPassDiv,
  buttonPalyNow
);
buttonPalyNow.addEventListener("click", () => {
  loginDiv.style.display = "none";
  mainDivCard.style.display = "show";
});
//! main screen Layout
// create main div for all card
const mainDivCard = document.createElement("div");
mainDivCard.className = "mainDivCard";
mainDivCard.style.display = "none";
// create layoutPage div holding all card

const layoutPage = document.createElement("div");
layoutPage.className = "layoutPage";
layoutPage.style.display = "none";

const playerName = document.createElement("div");

playerName.className = "playerName";
let count = 1;
let FirstImageValue;
let LastIndex;
let trueSelect = 0; 
const renderImage = () => {


  imageArray.forEach((x, index) => {
    const imageCard = document.createElement("img");
    imageCard.className = "img";
    imageCard.src = x.src;
    imageCard.id = `img${index}`;
    imageCard.value = x.id;
    mainDivCard.append(imageCard);

    layoutPage.append(playerName, mainDivCard);

    imageCard.addEventListener("click", (e) => {
      imageCard.src = x.src;
      if (count === 1) {
        FirstImageValue = e.target.value;
        firstIndex = index;
      }
      if (count === 2) {
        imageCard.src = x.src;
        e.preventDefault();
        if (FirstImageValue === e.target.value) {
          trueSelect++;
          new Audio("./sound/click.wav").play();
        } else {
          new Audio("./sound/wrong.mp3").play();
          setTimeout(() => {
            document.querySelector(`#img${index}`).src = x.alt;
            document.querySelector(`#img${firstIndex}`).src = x.alt;
          }, "1000");
        }
        count = 0;
      }
      count++;
    });
  });
  setTimeout(() => {
    document.querySelectorAll(".img").forEach((img)=>{
      img.src="./front/front.jpg"
    })
  }, "4000");
};

buttonPalyNow.addEventListener("click", (e) => {
  if (inputUserName.value&&inputPasswrod.value) {
    
    renderImage(imageArray);

  playerName.innerText = `Player Name : ${inputUserName.value}`;
  loginDiv.style.display = "none";
  mainDivCard.style.display = "grid";
  layoutPage.style.display = "grid";
  }
  else{
    inputUserName.id=inputUserName
    inputUserName.id="userNamef"
inputUserName.placeholder='please fill the input'
 
loginDiv.style.display = "flex";
  }
   
  
});

document.body.append(loginDiv, layoutPage);
