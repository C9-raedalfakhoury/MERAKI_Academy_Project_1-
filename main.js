// create div for login page
const loginDiv = document.createElement('div');
// add class for div 
loginDiv.className = 'loginDiv';
// create heading for game name
const gameName = document.createElement('h1');
// add class for heading 
gameName.className ='gameName';
// add inner text for game name
gameName.innerText = 'SIGN IN'
//create input filed for user name
const inputUserName = document.createElement('input');
// add class for input user name
inputUserName.className = 'inputUserName';
// add placeholder for input user name
inputUserName.placeholder = 'Username'
// create input field for password
const inputPasswrod = document.createElement('input');
// add placeholder for input password
inputPasswrod.placeholder = 'Password'
// add class name for input password
inputPasswrod.className = 'inputPasswrod';
// create div for forget password and sign in
 const forgrtPassDiv = document.createElement('div');
forgrtPassDiv.className = 'forgrtPass';
// create heading forget password
const forgetPassText = document.createElement('a');
forgetPassText.className = 'linkPassword'
forgetPassText.innerText ='Forgot Password'
forgetPassText.href = '#'
// create link for sign in 
const linkSignIn = document.createElement('a');
linkSignIn.className = 'linkSignUP'
linkSignIn.innerText = 'Sign Up'
linkSignIn.href = '#'

// append link and forgot password inside div
forgrtPassDiv.append(forgetPassText , linkSignIn);
// create button to start game
const buttonPalyNow = document.createElement('button');
// add class name for button play now
buttonPalyNow.className = 'buttonPalyNow';
// add inner text for button 
buttonPalyNow.innerText = 'PALY NOW'
loginDiv.append(gameName , inputUserName , inputPasswrod,forgrtPassDiv ,buttonPalyNow);
buttonPalyNow.addEventListener('click' , ()=>{
    loginDiv.style.display = 'none'
    mainDivCard.style.display = 'show'
})
//! main screen Layout
// create main div for all card
const mainDivCard = document.createElement('div');
mainDivCard.className = 'mainDivCard';
mainDivCard.innerText =  'lorem';
mainDivCard.style.display = 'none'
buttonPalyNow.addEventListener('click' , ()=>{
    loginDiv.style.display = 'none'
    mainDivCard.style.display = 'block'
})
document.body.append(loginDiv , mainDivCard); 
