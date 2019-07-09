// import './js/regist.js'
const regBtn = document.getElementById('registParagraph');
/////////////////////////   added  registration   ///////////////////////
regBtn.onclick = function(event) {
  let regpage = document.getElementById("registrlog").appendChild((document.createElement("register-page")));
  regpage.setAttribute("markup", "./chanks/chank1.html");
  regpage.setAttribute("css", "./chanks/chank1.css"); 
}


///////////////////////////////////////////////////////////////////////////
// regBtn.onclick= function(event) {
// 	this.style = `display:none;` 
// }

let ava = document.getElementById('avatarka');//.src = "../avatar/i05.png";
//appendChild(new Image(150));
let userId = document.cookie.split('; ')
    .filter(item => item.indexOf('userId') === 0)[0].split('=')[1];

let currentUser = null;

userId
  ? fetch(`https://curasa.glitch.me/users/${userId}`)
    .then(response => response.json())
    .then(user => currentUser = user)
    .then(() => ava.src = currentUser.avatar)
  : null;

    // document.getElementById('avatarka')
    //  . src !== null ? ava.src = "../avatar/i05.png" 
    //   function zatychka () {
    //   : ava.src = currentUser.avatar
    // };


// let logpage = document.createElement("register-page")
  
// function openLogin (event) {
//  	 document.getElementById("registrlog").appendChild(logpage)
//     logpage.setAttribute("markup", "../chanks/chank1.html")
//     logpage.setAttribute("css", "../chanks/chank1.css")
// 