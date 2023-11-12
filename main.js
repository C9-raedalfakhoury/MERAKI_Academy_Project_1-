const images = [
  { id: 1, src: "./image/firebase.jpg", alt: "./front/front.png" },
  { id: 2, src: "./image/flutter.jpg", alt: "./front/front.png" },
  { id: 2, src: "./image/flutter.jpg", alt: "./front/front.png" },
  { id: 3, src: "./image/mongoDB.jpg", alt: "./front/front.png" },
  { id: 1, src: "./image/firebase.jpg", alt: "./front/front.png" },
  { id: 6, src: "./image/react.jpg", alt: "./front/front.png" },
  { id: 4, src: "./image/nodejs.jpg", alt: "./front/front.png" },
  { id: 4, src: "./image/nodejs.jpg", alt: "./front/front.png" },
  { id: 5, src: "./image/postgress.jpg", alt: "./front/front.png" },
  { id: 5, src: "./image/postgress.jpg", alt: "./front/front.png" },
  { id: 6, src: "./image/react.jpg", alt: "./front/front.png" },
  { id: 3, src: "./image/mongoDB.jpg", alt: "./front/front.png" },
  { id: 8, src: "./image/tailwind.jpg", alt: "./front/front.png" },
  { id: 7, src: "./image/redux.jpg", alt: "./front/front.png" },
  { id: 7, src: "./image/redux.jpg", alt: "./front/front.png" },
  { id: 8, src: "./image/tailwind.jpg", alt: "./front/front.png" },
];
function shuffleArray(images) {
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }
}
shuffleArray(images);
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

// add placeholder for input user name
inputUserName.placeholder = "Username";
// create input field for password
const inputPasswrod = document.createElement("input");
// add placeholder for input password
inputPasswrod.placeholder = "Password";
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
let id;

const renderImage = () => {
  images.forEach((image, index) => {
    const card = document.createElement("div");
    card.className = "card";
    const img = document.createElement("img");
    img.className = "img";
    img.src = image.alt;
    img.id = image.id;

    const imageId = document.querySelector(".img");
    card.append(img);
    mainDivCard.append(card);

    layoutPage.append(playerName, mainDivCard);

    img.addEventListener("click", (e) => {
      if (count === 1) {
        id = e.target.id;
        img.src = image.src;
        //  return ;
      }
      if (count === 2) {
        img.src = image.src;
        const firstImage = document.querySelector(`#${id}`);

        const secondImage = document.querySelector(`#${e.target.id}`);

        if (id === e.target.id) {
          console.log("yes");
          console.log(`ID is ${id} TARGET ${e.target.id}`);

          console.log(`f : ${firstImage}`);

          console.log(`s : ${secondImage}`);
        } else {
          console.log("no");
          console.log(`ID is ${id} TARGET ${e.target.id}`);
          img.src = image.src;
        }
        count = 1;
      }
      count++;
    });
  });
};

buttonPalyNow.addEventListener("click", (e) => {
  renderImage();
  playerName.innerText = `Player Name : ${inputUserName.value}`;

  loginDiv.style.display = "none";
  mainDivCard.style.display = "grid";
  layoutPage.style.display = "grid";
});
document.body.append(loginDiv, layoutPage);
